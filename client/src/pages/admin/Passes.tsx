import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminPasses() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.passes.listAll.useQuery();
  const createMutation = trpc.passes.create.useMutation({
    onSuccess: () => utils.passes.invalidate(),
  });
  const updateMutation = trpc.passes.update.useMutation({
    onSuccess: () => utils.passes.invalidate(),
  });
  const deleteMutation = trpc.passes.delete.useMutation({
    onSuccess: () => utils.passes.invalidate(),
  });

  const fields = [
    { name: "nome", label: "Nome do Passe", type: "text" as const, required: true },
    { name: "preco", label: "Preço", type: "text" as const, required: true },
    { name: "descricao", label: "Descrição", type: "textarea" as const, required: true },
    { name: "beneficios", label: "Benefícios (separados por |)", type: "textarea" as const, required: true },
    { name: "destaque", label: "Destaque (1 ou 0)", type: "number" as const, required: true },
    { name: "ordem", label: "Ordem", type: "number" as const, required: true },
    { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
  ];

  return (
    <DashboardLayout>
      <CrudTable
        title="Passes e Ingressos"
        description="Gerenciar passes e ingressos do evento"
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
