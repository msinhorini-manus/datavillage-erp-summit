import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/_core/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calendar, FileQuestion, Globe, Megaphone, TrendingUp, Users, Ticket, Building2 } from "lucide-react";
import { Link } from "wouter";

export default function Admin() {
  const { user } = useAuth();

  const sections = [
    {
      title: "Setor em Números",
      description: "Gerenciar estatísticas do setor",
      icon: BarChart3,
      href: "/admin/setor-numeros",
      color: "text-blue-600",
    },
    {
      title: "Tendências",
      description: "Gerenciar tendências do mercado",
      icon: TrendingUp,
      href: "/admin/tendencias",
      color: "text-purple-600",
    },
    {
      title: "ROI em BI",
      description: "Gerenciar benefícios de ROI",
      icon: Globe,
      href: "/admin/roi-beneficio",
      color: "text-green-600",
    },
    {
      title: "BI por Setor",
      description: "Gerenciar BI por setor da economia",
      icon: Building2,
      href: "/admin/bi-setor",
      color: "text-orange-600",
    },
    {
      title: "Desafios do Mercado",
      description: "Gerenciar desafios do mercado",
      icon: Megaphone,
      href: "/admin/desafios-mercado",
      color: "text-red-600",
    },
    {
      title: "Projeções 2027",
      description: "Gerenciar projeções futuras",
      icon: TrendingUp,
      href: "/admin/projecoes",
      color: "text-indigo-600",
    },
    {
      title: "Palestrantes",
      description: "Gerenciar palestrantes do evento",
      icon: Users,
      href: "/admin/palestrantes",
      color: "text-pink-600",
    },
    {
      title: "Sessões",
      description: "Gerenciar sessões do evento",
      icon: Calendar,
      href: "/admin/sessoes",
      color: "text-cyan-600",
    },
    {
      title: "Agenda",
      description: "Gerenciar agenda do evento",
      icon: Calendar,
      href: "/admin/agenda",
      color: "text-teal-600",
    },
    {
      title: "Expositores",
      description: "Gerenciar expositores",
      icon: Building2,
      href: "/admin/expositores",
      color: "text-yellow-600",
    },
    {
      title: "Passes",
      description: "Gerenciar passes e ingressos",
      icon: Ticket,
      href: "/admin/passes",
      color: "text-emerald-600",
    },
    {
      title: "FAQ",
      description: "Gerenciar perguntas frequentes",
      icon: FileQuestion,
      href: "/admin/faq",
      color: "text-violet-600",
    },
    {
      title: "Patrocinadores",
      description: "Gerenciar patrocinadores",
      icon: Building2,
      href: "/admin/patrocinadores",
      color: "text-rose-600",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Painel Administrativo</h1>
          <p className="text-muted-foreground mt-2">
            Bem-vindo, {user?.name}! Gerencie todo o conteúdo do site Data Village ERP Summit 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link key={section.href} href={section.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-muted ${section.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{section.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
