import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AdminSetorNumeros from "./pages/admin/SetorNumeros";
import AdminTendencias from "./pages/admin/Tendencias";
import AdminRoiBeneficio from "./pages/admin/RoiBeneficio";
import AdminBiSetor from "./pages/admin/BiSetor";
import AdminDesafiosMercado from "./pages/admin/DesafiosMercado";
import AdminPalestrantes from "./pages/admin/Palestrantes";
import AdminSessoes from "./pages/admin/Sessoes";
import AdminAgendaEvento from "./pages/admin/AgendaEvento";
import AdminExpositores from "./pages/admin/Expositores";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin/setor-numeros" component={AdminSetorNumeros} />
      <Route path="/admin/tendencias" component={AdminTendencias} />
      <Route path="/admin/roi-beneficio" component={AdminRoiBeneficio} />
      <Route path="/admin/bi-setor" component={AdminBiSetor} />
      <Route path="/admin/desafios-mercado" component={AdminDesafiosMercado} />
      <Route path="/admin/palestrantes" component={AdminPalestrantes} />
      <Route path="/admin/sessoes" component={AdminSessoes} />
      <Route path="/admin/agenda-evento" component={AdminAgendaEvento} />
      <Route path="/admin/expositores" component={AdminExpositores} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
