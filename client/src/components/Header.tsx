import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f3a] text-white">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold leading-tight">DATA VILLAGE</div>
              <div className="text-xs text-emerald-400 leading-tight">ERP SUMMIT</div>
            </div>
          </div>

          {/* Data e Local */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="text-emerald-400 font-medium">Março 17-18, 2026</div>
            <div className="text-gray-300">São Paulo</div>
          </div>

          {/* Botão CTA */}
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6">
            INSCREVA-SE
          </Button>
        </div>
      </div>
    </header>
  );
}
