import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminProjecoes() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.projecoes.listAll.useQuery();
  const createMutation = trpc.projecoes.create.useMutation({
    onSuccess: () => utils.projecoes.invalidate(),
  });
  const updateMutation = trpc.projecoes.update.useMutation({
    onSuccess: () => utils.projecoes.invalidate(),
  });
  const deleteMutation = trpc.projecoes.delete.useMutation({
    onSuccess: () => utils.projecoes.invalidate(),
  });

  const fields = [
    { name: "titulo", label: "Título", type: "text" as const, required: true },
    { name: "valor", label: "Valor", type: "text" as const, required: true },
    { name: "descricao", label: "Descrição", type: "textarea" as const, required: true },
    { name: "icone", label: "Ícone", type: "text" as const, required: false },
    { name: "cor", label: "Cor", type: "text" as const, required: false },
    { name: "ordem", label: "Ordem", type: "number" as const, required: true },
    { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
  ];

  return (
    <DashboardLayout>
      <CrudTable
        title="Projeções 2027"
        description="Gerenciar projeções para 2027"
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
