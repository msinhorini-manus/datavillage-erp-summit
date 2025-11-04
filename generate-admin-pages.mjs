import fs from 'fs';
import path from 'path';

const adminPages = [
  {
    name: 'Tendencias',
    route: 'tendencias',
    title: 'Tendências',
    description: 'Gerenciar tendências do mercado',
    fields: [
      { name: 'titulo', label: 'Título', type: 'text', required: true },
      { name: 'percentual', label: 'Percentual', type: 'text', required: true },
      { name: 'descricao', label: 'Descrição', type: 'textarea', required: true },
      { name: 'icone', label: 'Ícone (emoji)', type: 'text', required: true },
      { name: 'cor', label: 'Cor', type: 'text', required: true },
      { name: 'ordem', label: 'Ordem', type: 'number', required: true },
      { name: 'ativo', label: 'Ativo (1 ou 0)', type: 'number', required: true },
    ]
  },
  {
    name: 'RoiBeneficio',
    route: 'roiBeneficio',
    title: 'ROI em Business Intelligence',
    description: 'Gerenciar benefícios de ROI',
    fields: [
      { name: 'titulo', label: 'Título', type: 'text', required: true },
      { name: 'descricao', label: 'Descrição', type: 'textarea', required: true },
      { name: 'icone', label: 'Ícone (emoji)', type: 'text', required: true },
      { name: 'cor', label: 'Cor', type: 'text', required: true },
      { name: 'ordem', label: 'Ordem', type: 'number', required: true },
      { name: 'ativo', label: 'Ativo (1 ou 0)', type: 'number', required: true },
    ]
  },
  {
    name: 'BiSetor',
    route: 'biSetor',
    title: 'BI por Setor da Economia',
    description: 'Gerenciar BI por setor',
    fields: [
      { name: 'nome', label: 'Nome do Setor', type: 'text', required: true },
      { name: 'percentual', label: 'Percentual', type: 'text', required: true },
      { name: 'descricao', label: 'Descrição', type: 'textarea', required: true },
      { name: 'icone', label: 'Ícone (emoji)', type: 'text', required: true },
      { name: 'cor', label: 'Cor', type: 'text', required: true },
      { name: 'ordem', label: 'Ordem', type: 'number', required: true },
      { name: 'ativo', label: 'Ativo (1 ou 0)', type: 'number', required: true },
    ]
  },
  {
    name: 'DesafiosMercado',
    route: 'desafiosMercado',
    title: 'Desafios do Mercado',
    description: 'Gerenciar desafios do mercado de BI',
    fields: [
      { name: 'titulo', label: 'Título', type: 'text', required: true },
      { name: 'percentual', label: 'Percentual', type: 'text', required: true },
      { name: 'descricao', label: 'Descrição', type: 'textarea', required: true },
      { name: 'ordem', label: 'Ordem', type: 'number', required: true },
      { name: 'ativo', label: 'Ativo (1 ou 0)', type: 'number', required: true },
    ]
  },
  {
    name: 'Palestrantes',
    route: 'palestrantes',
    title: 'Palestrantes',
    description: 'Gerenciar palestrantes do evento',
    fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true },
      { name: 'cargo', label: 'Cargo', type: 'text', required: true },
      { name: 'empresa', label: 'Empresa', type: 'text', required: true },
      { name: 'foto', label: 'URL da Foto', type: 'text', required: false },
      { name: 'bio', label: 'Biografia', type: 'textarea', required: false },
      { name: 'ordem', label: 'Ordem', type: 'number', required: true },
      { name: 'ativo', label: 'Ativo (1 ou 0)', type: 'number', required: true },
    ]
  },
  {
    name: 'Sessoes',
    route: 'sessoes',
    title: 'Sessões',
    description: 'Gerenciar sessões do evento',
    fields: [
      { name: 'titulo', label: 'Título', type: 'text', required: true },
      { name: 'categoria', label: 'Categoria', type: 'text', required: true },
      { name: 'corCategoria', label: 'Cor da Categoria', type: 'text', required: true },
      { name: 'descricao', label: 'Descrição', type: 'textarea', required: true },
      { name: 'palestranteId', label: 'ID do Palestrante', type: 'number', required: false },
      { name: 'ordem', label: 'Ordem', type: 'number', required: true },
      { name: 'ativo', label: 'Ativo (1 ou 0)', type: 'number', required: true },
    ]
  },
  {
    name: 'AgendaEvento',
    route: 'agendaEvento',
    title: 'Agenda do Evento',
    description: 'Gerenciar agenda completa do evento',
    fields: [
      { name: 'dia', label: 'Dia (1 ou 2)', type: 'number', required: true },
      { name: 'horarioInicio', label: 'Horário Início', type: 'text', required: true },
      { name: 'horarioFim', label: 'Horário Fim', type: 'text', required: true },
      { name: 'titulo', label: 'Título', type: 'text', required: true },
      { name: 'tipo', label: 'Tipo', type: 'text', required: true },
      { name: 'palestrante', label: 'Palestrante', type: 'text', required: false },
      { name: 'local', label: 'Local', type: 'text', required: true },
      { name: 'descricao', label: 'Descrição', type: 'textarea', required: true },
      { name: 'ordem', label: 'Ordem', type: 'number', required: true },
      { name: 'ativo', label: 'Ativo (1 ou 0)', type: 'number', required: true },
    ]
  },
  {
    name: 'Expositores',
    route: 'expositores',
    title: 'Expositores',
    description: 'Gerenciar expositores da expo',
    fields: [
      { name: 'nome', label: 'Nome', type: 'text', required: true },
      { name: 'categoria', label: 'Categoria', type: 'text', required: true },
      { name: 'descricao', label: 'Descrição', type: 'textarea', required: true },
      { name: 'icone', label: 'Ícone (emoji)', type: 'text', required: true },
      { name: 'produtos', label: 'Produtos', type: 'text', required: true },
      { name: 'ordem', label: 'Ordem', type: 'number', required: true },
      { name: 'ativo', label: 'Ativo (1 ou 0)', type: 'number', required: true },
    ]
  },
];

const template = (config) => `import DashboardLayout from "@/components/DashboardLayout";
import CrudTable from "@/components/admin/CrudTable";
import { trpc } from "@/lib/trpc";

export default function Admin${config.name}() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.${config.route}.listAll.useQuery();
  const createMutation = trpc.${config.route}.create.useMutation({
    onSuccess: () => utils.${config.route}.invalidate(),
  });
  const updateMutation = trpc.${config.route}.update.useMutation({
    onSuccess: () => utils.${config.route}.invalidate(),
  });
  const deleteMutation = trpc.${config.route}.delete.useMutation({
    onSuccess: () => utils.${config.route}.invalidate(),
  });

  const fields = ${JSON.stringify(config.fields, null, 4)};

  return (
    <DashboardLayout>
      <CrudTable
        title="${config.title}"
        description="${config.description}"
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
`;

const basePath = '/home/ubuntu/datavillage-erp-summit/client/src/pages/admin';

adminPages.forEach(config => {
  const content = template(config);
  const filePath = path.join(basePath, `${config.name}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`✅ Criado: ${config.name}.tsx`);
});

console.log('🎉 Todas as páginas admin foram criadas!');
