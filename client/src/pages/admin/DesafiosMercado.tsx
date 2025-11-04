import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminDesafiosMercado() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.desafiosMercado.listAll.useQuery();
  const createMutation = trpc.desafiosMercado.create.useMutation({
    onSuccess: () => utils.desafiosMercado.invalidate(),
  });
  const updateMutation = trpc.desafiosMercado.update.useMutation({
    onSuccess: () => utils.desafiosMercado.invalidate(),
  });
  const deleteMutation = trpc.desafiosMercado.delete.useMutation({
    onSuccess: () => utils.desafiosMercado.invalidate(),
  });

  const fields = [
      { name: "titulo", label: "Título", type: "text" as const, required: true },
      { name: "percentual", label: "Percentual", type: "text" as const, required: true },
      { name: "descricao", label: "Descrição", type: "textarea" as const, required: true },
      { name: "ordem", label: "Ordem", type: "number" as const, required: true },
      { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
    ];

  return (
    <DashboardLayout>
      <CrudTable
        title="Desafios do Mercado"
        description="Gerenciar desafios do mercado de BI"
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
