import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Clock, MapPin, Users } from "lucide-react";

export default function AgendaSection() {
  const [diaAtivo, setDiaAtivo] = useState(1);
  const { data: agendaDia1 } = trpc.agendaEvento.byDay.useQuery(1);
  const { data: agendaDia2 } = trpc.agendaEvento.byDay.useQuery(2);

  const agendaAtual = diaAtivo === 1 ? agendaDia1 : agendaDia2;

  const tipoColorMap: Record<string, string> = {
    "Networking": "bg-orange-100 text-orange-700",
    "Keynote": "bg-red-100 text-red-700",
    "Palestra": "bg-blue-100 text-blue-700",
    "Workshop": "bg-green-100 text-green-700",
    "Painel": "bg-purple-100 text-purple-700",
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Agenda do Evento</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Dois dias intensivos de conteúdo, networking e aprendizado com os maiores especialistas em Business Intelligence e Analytics do Brasil.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            size="lg"
            variant={diaAtivo === 1 ? "default" : "outline"}
            onClick={() => setDiaAtivo(1)}
            className={diaAtivo === 1 ? "bg-blue-600" : ""}
          >
            17 de Março - Dia 1
          </Button>
          <Button
            size="lg"
            variant={diaAtivo === 2 ? "default" : "outline"}
            onClick={() => setDiaAtivo(2)}
            className={diaAtivo === 2 ? "bg-blue-600" : ""}
          >
            18 de Março - Dia 2
          </Button>
        </div>

        {/* Itens da Agenda */}
        <div className="max-w-5xl mx-auto space-y-4">
          {agendaAtual && agendaAtual.map((item) => {
            const badgeColor = tipoColorMap[item.tipo] || "bg-gray-100 text-gray-700";
            
            return (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    {/* Horário */}
                    <div className="flex items-start gap-2 text-blue-600 min-w-[120px]">
                      <Clock className="w-5 h-5 mt-1" />
                      <div className="font-bold">
                        <div>{item.horarioInicio} -</div>
                        <div>{item.horarioFim}</div>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold">
                          {item.titulo}
                        </h3>
                        <span className={`text-xs font-bold py-1 px-3 rounded-full ${badgeColor}`}>
                          {item.tipo}
                        </span>
                      </div>

                      {item.palestrante && (
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{item.palestrante}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{item.local}</span>
                      </div>

                      <p className="text-gray-600 text-sm">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
