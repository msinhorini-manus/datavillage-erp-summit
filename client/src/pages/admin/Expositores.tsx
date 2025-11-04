import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminExpositores() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.expositores.listAll.useQuery();
  const createMutation = trpc.expositores.create.useMutation({
    onSuccess: () => utils.expositores.invalidate(),
  });
  const updateMutation = trpc.expositores.update.useMutation({
    onSuccess: () => utils.expositores.invalidate(),
  });
  const deleteMutation = trpc.expositores.delete.useMutation({
    onSuccess: () => utils.expositores.invalidate(),
  });

  const fields = [
      { name: "nome", label: "Nome", type: "text" as const, required: true },
      { name: "categoria", label: "Categoria", type: "text" as const, required: true },
      { name: "descricao", label: "Descrição", type: "textarea" as const, required: true },
      { name: "icone", label: "Ícone (emoji)", type: "text" as const, required: true },
      { name: "produtos", label: "Produtos", type: "text" as const, required: true },
      { name: "ordem", label: "Ordem", type: "number" as const, required: true },
      { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
    ];

  return (
    <DashboardLayout>
      <CrudTable
        title="Expositores"
        description="Gerenciar expositores da expo"
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
