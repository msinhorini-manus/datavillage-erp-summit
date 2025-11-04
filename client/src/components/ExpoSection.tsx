import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Building2, Target, Users, Zap } from "lucide-react";

export default function ExpoSection() {
  const { data: expositores } = trpc.expositores.list.useQuery();

  const stats = [
    {
      icon: Building2,
      value: "50+",
      label: "Expositores",
      description: "Principais fornecedores de tecnologia",
      color: "text-blue-600",
    },
    {
      icon: Users,
      value: "2000+",
      label: "Visitantes",
      description: "Profissionais de dados e BI",
      color: "text-blue-600",
    },
    {
      icon: Zap,
      value: "100+",
      label: "Demos",
      description: "Demonstrações ao vivo",
      color: "text-blue-600",
    },
    {
      icon: Target,
      value: "24h",
      label: "Networking",
      description: "Oportunidades de conexão",
      color: "text-blue-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Expo & Showcase</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Conheça as mais recentes inovações em Business Intelligence, Analytics e Data Science. Interaja com fornecedores líderes e descubra soluções que podem transformar seu negócio.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <CardTitle className="text-4xl font-bold text-blue-600">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-bold mb-2">{stat.label}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Expositores em Destaque */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">
            Expositores em Destaque
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expositores && expositores.slice(0, 6).map((expositor) => (
              <Card key={expositor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center text-3xl">
                      {expositor.icone}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{expositor.nome}</CardTitle>
                      <p className="text-sm text-blue-600 font-medium">
                        {expositor.categoria}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {expositor.descricao}
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Produtos:</strong> {expositor.produtos}
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
