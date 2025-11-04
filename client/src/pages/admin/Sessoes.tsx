import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminSessoes() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.sessoes.listAll.useQuery();
  const createMutation = trpc.sessoes.create.useMutation({
    onSuccess: () => utils.sessoes.invalidate(),
  });
  const updateMutation = trpc.sessoes.update.useMutation({
    onSuccess: () => utils.sessoes.invalidate(),
  });
  const deleteMutation = trpc.sessoes.delete.useMutation({
    onSuccess: () => utils.sessoes.invalidate(),
  });

  const fields = [
      { name: "titulo", label: "Título", type: "text" as const, required: true },
      { name: "categoria", label: "Categoria", type: "text" as const, required: true },
      { name: "corCategoria", label: "Cor da Categoria", type: "text" as const, required: true },
      { name: "descricao", label: "Descrição", type: "textarea" as const, required: true },
      { name: "palestranteId", label: "ID do Palestrante", type: "number" as const, required: false },
      { name: "ordem", label: "Ordem", type: "number" as const, required: true },
      { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
    ];

  return (
    <DashboardLayout>
      <CrudTable
        title="Sessões"
        description="Gerenciar sessões do evento"
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
