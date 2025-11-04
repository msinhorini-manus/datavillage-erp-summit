import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function AdminAgendaEvento() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.agendaEvento.listAll.useQuery();
  const createMutation = trpc.agendaEvento.create.useMutation({
    onSuccess: () => utils.agendaEvento.invalidate(),
  });
  const updateMutation = trpc.agendaEvento.update.useMutation({
    onSuccess: () => utils.agendaEvento.invalidate(),
  });
  const deleteMutation = trpc.agendaEvento.delete.useMutation({
    onSuccess: () => utils.agendaEvento.invalidate(),
  });

  const fields = [
      { name: "dia", label: "Dia (1 ou 2)", type: "number" as const, required: true },
      { name: "horarioInicio", label: "Horário Início", type: "text" as const, required: true },
      { name: "horarioFim", label: "Horário Fim", type: "text" as const, required: true },
      { name: "titulo", label: "Título", type: "text" as const, required: true },
      { name: "tipo", label: "Tipo", type: "text" as const, required: true },
      { name: "palestrante", label: "Palestrante", type: "text" as const, required: false },
      { name: "local", label: "Local", type: "text" as const, required: true },
      { name: "descricao", label: "Descrição", type: "textarea" as const, required: true },
      { name: "ordem", label: "Ordem", type: "number" as const, required: true },
      { name: "ativo", label: "Ativo (1 ou 0)", type: "number" as const, required: true },
    ];

  return (
    <DashboardLayout>
      <CrudTable
        title="Agenda do Evento"
        description="Gerenciar agenda completa do evento"
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
