import { Card, CardContent } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";

export default function DesafiosSection() {
  const { data: desafios } = trpc.desafiosMercado.list.useQuery();

  return (
    <section className="py-20 bg-[#1e293b]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lado esquerdo - Título e Box Oportunidade */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Principais Desafios do Mercado
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Apesar do crescimento, o setor de BI ainda enfrenta obstáculos. Conhecer esses desafios é fundamental para superá-los.
            </p>

            <Card className="bg-red-500 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Oportunidade de Mercado
                </h3>
                <p className="text-white text-lg">
                  Empresas que superam esses desafios têm vantagem competitiva significativa e crescem 2.3x mais rápido que a concorrência.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Lado direito - Cards de Desafios */}
          <div className="space-y-4">
            {desafios && desafios.map((desafio) => (
              <Card key={desafio.id} className="bg-[#2d3748] border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {desafio.titulo}
                    </h3>
                    <span className="text-2xl font-bold text-red-400">
                      {desafio.percentual}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    {desafio.descricao}
                  </p>
                  {/* Barra de progresso */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full transition-all"
                      style={{ width: desafio.percentual }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
