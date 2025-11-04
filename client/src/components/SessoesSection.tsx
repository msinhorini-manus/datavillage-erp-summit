import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { ArrowRight } from "lucide-react";

export default function SessoesSection() {
  const { data: sessoes } = trpc.sessoes.list.useQuery();

  const categoriaColorMap: Record<string, string> = {
    "BUSINESS INTELLIGENCE": "bg-blue-500",
    "DATA ANALYTICS": "bg-green-500",
    "DATA SCIENCE": "bg-purple-500",
    "CLOUD & INFRASTRUCTURE": "bg-orange-500",
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            Sessões em destaque
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-8">
            Explore as principais trilhas de conteúdo do Data Village ERP Summit 2026. Sessões práticas com especialistas renomados em Business Intelligence, Analytics e Data Science.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            VER AGENDA COMPLETA <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {sessoes && sessoes.slice(0, 4).map((sessao) => {
            const bgColor = categoriaColorMap[sessao.categoria] || "bg-blue-500";
            
            return (
              <Card key={sessao.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`${bgColor} text-white text-xs font-bold py-2 px-4 rounded-md w-fit mb-4`}>
                    {sessao.categoria}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {sessao.titulo}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    {sessao.descricao}
                  </p>
                  {sessao.palestranteId && (
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-lg">👤</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Palestrante</p>
                        <p className="text-xs text-gray-500">Empresa</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
