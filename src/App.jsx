import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"; // Ensure this path matches where you saved Navigation.jsx

import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import WeOffer from "./pages/WeOffer";
import JoinTheCrew from "./pages/JoinTheCrew";
import Blogs from "./pages/Blogs";
import TalkToUs from "./pages/TalkToUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      
      {/* 1. The Global Animated Background System */}
      <div className="animated-bg">
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
      </div>

      {/* 2. The Global Floating Navigation Pill */}
      <Navigation />

      {/* 3. Main Content Wrapper */}
      {/* We add pt-24 (padding-top) so your page content doesn't load hidden underneath the fixed navigation pill */}
      <main className="relative flex flex-col min-h-screen pt-24 lg:pt-32">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/story" element={<OurStory />} />
          {/* <Route path="/services" element={<WeOffer />} /> */}
          <Route path="/careers" element={<JoinTheCrew />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<TalkToUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </BrowserRouter>
  </QueryClientProvider>
);

export default App;