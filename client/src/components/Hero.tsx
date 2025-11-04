import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-blue-purple text-white pt-16">
      <div className="container text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
          <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
            <span className="text-sm">📊</span>
          </div>
          <span className="text-sm font-medium">ERP Summit</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
          O FUTURO DOS
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
          <span className="text-gradient-orange">DADOS</span>
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
          ESTÁ AQUI!
        </h1>

        {/* Data e Local */}
        <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
          MARÇO 17-18, 2026
        </div>
        <div className="text-xl md:text-2xl text-purple-200 mb-12">
          SÃO PAULO
        </div>

        {/* CTA Principal */}
        <Button 
          size="lg" 
          className="gradient-green hover:opacity-90 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-lg border-2 border-yellow-400"
        >
          <Play className="w-5 h-5 mr-2 fill-white" />
          INSCREVA-SE AGORA
        </Button>

        {/* Link Secundário */}
        <div className="mt-8">
          <a href="#" className="text-sm text-purple-200 hover:text-white underline">
            Assista ao recap do summit 2025
          </a>
        </div>
      </div>

      {/* Badge "Made with Manus" */}
      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white/80 flex items-center gap-1">
        <span>⚡</span>
        Made with Manus
      </div>
    </section>
  );
}
