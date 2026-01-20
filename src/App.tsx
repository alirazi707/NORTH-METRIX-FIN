import { ScrollToTop } from "@/components/layout/ScrollToTop";

// ... imports

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        import Index from "./pages/Index";
        import Platform from "./pages/Platform";
        import Services from "./pages/Services";
        import Industries from "./pages/Industries";
        import Insights from "./pages/Insights";
        import Trust from "./pages/Trust";
        import About from "./pages/About";
        import Contact from "./pages/Contact";
        import Privacy from "./pages/Privacy";
        import Terms from "./pages/Terms";
        import Demo from "./pages/Demo";
        import ScrollDemo from "./pages/ScrollDemo";
        import NotFound from "./pages/NotFound";

        const queryClient = new QueryClient();

const App = () => (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/platform" element={<Platform />} />
                <Route path="/services" element={<Services />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/trust" element={<Trust />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/scroll-demo" element={<ScrollDemo />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
        );

        export default App;
