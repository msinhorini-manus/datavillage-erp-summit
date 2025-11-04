import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";

export default function BiSetorSection() {
  const { data: biSetores } = trpc.biSetor.list.useQuery();

  const corMap: Record<string, string> = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
  };

  const textColorMap: Record<string, string> = {
    green: "text-green-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
    red: "text-red-600",
    purple: "text-purple-600",
    indigo: "text-indigo-600",
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">BI por Setor da Economia</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Cada setor tem suas particularidades na adoção de Business Intelligence. Veja como diferentes indústrias estão aproveitando o poder dos dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {biSetores && biSetores.map((setor) => {
            const bgColor = corMap[setor.cor] || "bg-blue-500";
            const textColor = textColorMap[setor.cor] || "text-blue-600";
            
            return (
              <Card key={setor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl ${bgColor} flex items-center justify-center text-3xl text-white`}>
                      {setor.icone}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{setor.nome}</h3>
                      <div className={`text-3xl font-bold ${textColor}`}>
                        {setor.percentual}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {setor.descricao}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
