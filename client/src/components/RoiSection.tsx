import { Card, CardContent } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";

export default function RoiSection() {
  const { data: roiBeneficios } = trpc.roiBeneficio.list.useQuery();

  return (
    <section className="py-20 bg-[#1e293b]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lado esquerdo - Benefícios */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              ROI em Business Intelligence
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Empresas que investem em BI obtêm retornos significativos em produtividade, tomada de decisão e competitividade no mercado.
            </p>

            <div className="space-y-4">
              {roiBeneficios && roiBeneficios.map((beneficio) => (
                <div key={beneficio.id} className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0 bg-${beneficio.cor}-500`}>
                    {beneficio.icone}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {beneficio.titulo}
                    </h3>
                    <p className="text-gray-400">
                      {beneficio.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado direito - Investimento Global */}
          <div className="flex items-center">
            <Card className="w-full bg-[#2d3748] border-0">
              <CardContent className="p-12 text-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Investimento Global em BI
                </h3>
                <div className="text-7xl font-bold text-emerald-400 mb-4">
                  $33Bi
                </div>
                <p className="text-gray-300 text-lg mb-8">
                  Mercado global de BI em 2024
                </p>
                <div className="border-t border-gray-600 pt-6">
                  <div className="text-3xl font-bold text-emerald-400">
                    +11.9%
                  </div>
                  <p className="text-gray-400 mt-2">
                    crescimento anual
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
