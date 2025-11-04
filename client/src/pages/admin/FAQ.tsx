import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminFAQ() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.faq.listAll.useQuery();
  const createMutation = trpc.faq.create.useMutation({
    onSuccess: () => utils.faq.invalidate(),
  });
  const updateMutation = trpc.faq.update.useMutation({
    onSuccess: () => utils.faq.invalidate(),
  });
  const deleteMutation = trpc.faq.delete.useMutation({
    onSuccess: () => utils.faq.invalidate(),
  });

  const fields = [
    { name: "pergunta", label: "Pergunta", type: "text" as const, required: true },
    { name: "resposta", label: "Resposta", type: "textarea" as const, required: true },
    { name: "ordem", label: "Ordem", type: "number" as const, required: true },
    { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
  ];

  return (
    <DashboardLayout>
      <CrudTable
        title="Perguntas Frequentes (FAQ)"
        description="Gerenciar perguntas e respostas frequentes"
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
