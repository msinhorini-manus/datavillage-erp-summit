import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminTendencias() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.tendencias.listAll.useQuery();
  const createMutation = trpc.tendencias.create.useMutation({
    onSuccess: () => utils.tendencias.invalidate(),
  });
  const updateMutation = trpc.tendencias.update.useMutation({
    onSuccess: () => utils.tendencias.invalidate(),
  });
  const deleteMutation = trpc.tendencias.delete.useMutation({
    onSuccess: () => utils.tendencias.invalidate(),
  });

  const fields = [
      { name: "titulo", label: "Título", type: "text" as const, required: true },
      { name: "percentual", label: "Percentual", type: "text" as const, required: true },
      { name: "descricao", label: "Descrição", type: "textarea" as const, required: true },
      { name: "icone", label: "Ícone (emoji)", type: "text" as const, required: true },
      { name: "cor", label: "Cor", type: "text" as const, required: true },
      { name: "ordem", label: "Ordem", type: "number" as const, required: true },
      { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
    ];

  return (
    <DashboardLayout>
      <CrudTable
        title="Tendências"
        description="Gerenciar tendências do mercado"
        data={data || []}
        fields={fields}
        onAdd={(data) => createMutation.mutateAsync(data)}
        onUpdate={(id, data) => updateMutation.mutateAsync({ id, data })}
        onDelete={(id) => deleteMutation.mutateAsync(id)}
        isLoading={isLoading}
      />
    </DashboardLayout>
  );
}
