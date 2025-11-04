import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RoiSection from "@/components/RoiSection";
import BiSetorSection from "@/components/BiSetorSection";
import DesafiosSection from "@/components/DesafiosSection";
import SessoesSection from "@/components/SessoesSection";
import AgendaSection from "@/components/AgendaSection";
import ExpoSection from "@/components/ExpoSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";

export default function Home() {
  // Buscar dados de todas as seções
  const { data: setorNumeros } = trpc.setorNumeros.list.useQuery();
  const { data: tendencias } = trpc.tendencias.list.useQuery();
  const { data: roiBeneficios } = trpc.roiBeneficio.list.useQuery();
  const { data: biSetores } = trpc.biSetor.list.useQuery();
  const { data: desafios } = trpc.desafiosMercado.list.useQuery();
  const { data: projecoes } = trpc.projecoes.list.useQuery();
  const { data: palestrantes } = trpc.palestrantes.list.useQuery();
  const { data: sessoes } = trpc.sessoes.list.useQuery();
  const { data: expositores } = trpc.expositores.list.useQuery();
  const { data: passes } = trpc.passes.list.useQuery();
  const { data: faqs } = trpc.faq.list.useQuery();
  const { data: patrocinadores } = trpc.patrocinadores.list.useQuery();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Setor em Números */}
      {setorNumeros && setorNumeros.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">O Setor em Números</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {setorNumeros.map((item) => (
                <Card key={item.id} className="text-center">
                  <CardHeader>
                    <div className="text-5xl mb-4">{item.icone}</div>
                    <CardTitle className="text-3xl font-bold text-primary">{item.valor}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-2">{item.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{item.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tendências */}
      {tendencias && tendencias.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Tendências que Moldam o Futuro</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tendencias.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <div className="text-4xl mb-2">{item.icone}</div>
                    <CardTitle className="text-2xl font-bold text-primary">{item.percentual}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold mb-2">{item.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{item.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ROI em Business Intelligence */}
      <RoiSection />

      {/* BI por Setor da Economia */}
      <BiSetorSection />

      {/* Desafios do Mercado */}
      <DesafiosSection />

      {/* Palestrantes */}
      {palestrantes && palestrantes.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Especialistas em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {palestrantes.slice(0, 8).map((palestrante) => (
                <Card key={palestrante.id} className="text-center">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      {palestrante.foto ? (
                        <img src={palestrante.foto} alt={palestrante.nome} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <span className="text-4xl">👤</span>
                      )}
                    </div>
                    <CardTitle className="text-lg">{palestrante.nome}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-primary">{palestrante.cargo}</p>
                    <p className="text-sm text-muted-foreground">{palestrante.empresa}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sessões em Destaque */}
      <SessoesSection />

      {/* Agenda do Evento */}
      <AgendaSection />

      {/* Expo & Showcase */}
      <ExpoSection />

      {/* Passes */}
      {passes && passes.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Escolha Seu Passe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {passes.map((passe) => {
                const beneficiosList = JSON.parse(passe.beneficios || "[]");
                return (
                  <Card key={passe.id} className={passe.destaque ? "border-primary border-2" : ""}>
                    <CardHeader>
                      {passe.destaque && (
                        <div className="bg-primary text-primary-foreground text-xs font-bold py-1 px-3 rounded-full w-fit mb-2">
                          MAIS POPULAR
                        </div>
                      )}
                      <CardTitle className="text-2xl">{passe.nome}</CardTitle>
                      <div className="mt-4">
                        <div className="text-sm text-muted-foreground line-through">
                          R$ {(passe.precoOriginal / 100).toFixed(2)}
                        </div>
                        <div className="text-4xl font-bold text-primary">
                          R$ {(passe.preco / 100).toFixed(2)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{passe.descricao}</p>
                      <ul className="space-y-2 mb-6">
                        {beneficiosList.map((beneficio: string, idx: number) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="text-green-600">✓</span>
                            <span>{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={passe.destaque ? "default" : "outline"}>
                        Selecionar Passe
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.pergunta}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.resposta}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Patrocinadores */}
      {patrocinadores && patrocinadores.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Patrocinadores</h2>
            
            {["diamond", "gold", "silver", "bronze"].map((nivel) => {
              const patrocinadoresNivel = patrocinadores.filter((p) => p.nivel === nivel);
              if (patrocinadoresNivel.length === 0) return null;
              
              const nivelTitulos: Record<string, string> = {
                diamond: "Patrocinadores Diamond",
                gold: "Patrocinadores Gold",
                silver: "Patrocinadores Silver",
                bronze: "Patrocinadores Bronze",
              };

              return (
                <div key={nivel} className="mb-12">
                  <h3 className="text-2xl font-bold text-center mb-6">{nivelTitulos[nivel]}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {patrocinadoresNivel.map((patrocinador) => (
                      <Card key={patrocinador.id} className="flex items-center justify-center p-6">
                        {patrocinador.logo ? (
                          <img src={patrocinador.logo} alt={patrocinador.nome} className="max-h-16" />
                        ) : (
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{patrocinador.sigla}</div>
                            <div className="text-sm text-muted-foreground">{patrocinador.nome}</div>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#1a1f3a] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold">DATA VILLAGE</div>
                  <div className="text-xs text-emerald-400">ERP SUMMIT</div>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                O maior evento de Business Intelligence e Analytics do Brasil, conectando especialistas e
                impulsionando a transformação digital através de dados e inovação.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#palestrantes" className="text-gray-300 hover:text-white">Palestrantes</a></li>
                <li><a href="#sessoes" className="text-gray-300 hover:text-white">Sessões</a></li>
                <li><a href="#patrocinadores" className="text-gray-300 hover:text-white">Patrocinadores</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📧 erpsummit@datavillage.com.br</li>
                <li>📞 +55 (11) 9999-8888</li>
                <li>📍 São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2026 Data Village ERP Summit. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
