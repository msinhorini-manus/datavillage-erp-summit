import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminPatrocinadores() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.patrocinadores.listAll.useQuery();
  const createMutation = trpc.patrocinadores.create.useMutation({
    onSuccess: () => utils.patrocinadores.invalidate(),
  });
  const updateMutation = trpc.patrocinadores.update.useMutation({
    onSuccess: () => utils.patrocinadores.invalidate(),
  });
  const deleteMutation = trpc.patrocinadores.delete.useMutation({
    onSuccess: () => utils.patrocinadores.invalidate(),
  });

  const fields = [
    { name: "nome", label: "Nome", type: "text" as const, required: true },
    { name: "nivel", label: "Nível (Diamond, Gold, Silver, Bronze)", type: "text" as const, required: true },
    { name: "logo", label: "URL do Logo", type: "text" as const, required: false },
    { name: "site", label: "Site", type: "text" as const, required: false },
    { name: "ordem", label: "Ordem", type: "number" as const, required: true },
    { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
  ];

  return (
    <DashboardLayout>
      <CrudTable
        title="Patrocinadores"
        description="Gerenciar patrocinadores do evento"
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
