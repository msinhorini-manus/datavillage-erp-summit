import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminRoiBeneficio() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.roiBeneficio.listAll.useQuery();
  const createMutation = trpc.roiBeneficio.create.useMutation({
    onSuccess: () => utils.roiBeneficio.invalidate(),
  });
  const updateMutation = trpc.roiBeneficio.update.useMutation({
    onSuccess: () => utils.roiBeneficio.invalidate(),
  });
  const deleteMutation = trpc.roiBeneficio.delete.useMutation({
    onSuccess: () => utils.roiBeneficio.invalidate(),
  });

  const fields = [
      { name: "titulo", label: "Título", type: "text" as const, required: true },
      { name: "descricao", label: "Descrição", type: "textarea" as const, required: true },
      { name: "icone", label: "Ícone (emoji)", type: "text" as const, required: true },
      { name: "cor", label: "Cor", type: "text" as const, required: true },
      { name: "ordem", label: "Ordem", type: "number" as const, required: true },
      { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
    ];

  return (
    <DashboardLayout>
      <CrudTable
        title="ROI em Business Intelligence"
        description="Gerenciar benefícios de ROI"
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
