import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminPalestrantes() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.palestrantes.listAll.useQuery();
  const createMutation = trpc.palestrantes.create.useMutation({
    onSuccess: () => utils.palestrantes.invalidate(),
  });
  const updateMutation = trpc.palestrantes.update.useMutation({
    onSuccess: () => utils.palestrantes.invalidate(),
  });
  const deleteMutation = trpc.palestrantes.delete.useMutation({
    onSuccess: () => utils.palestrantes.invalidate(),
  });

  const fields = [
      { name: "nome", label: "Nome", type: "text" as const, required: true },
      { name: "cargo", label: "Cargo", type: "text" as const, required: true },
      { name: "empresa", label: "Empresa", type: "text" as const, required: true },
      { name: "foto", label: "URL da Foto", type: "text" as const, required: false },
      { name: "bio", label: "Biografia", type: "textarea" as const, required: false },
      { name: "ordem", label: "Ordem", type: "number" as const, required: true },
      { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
    ];

  return (
    <DashboardLayout>
      <CrudTable
        title="Palestrantes"
        description="Gerenciar palestrantes do evento"
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
