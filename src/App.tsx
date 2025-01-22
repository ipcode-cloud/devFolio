import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import Nav from "./components/Nav";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="/about" element={
          <PageWrapper>
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="/projects" element={
          <PageWrapper>
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="/contact" element={
          <PageWrapper>
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          </PageWrapper>
        } />
        <Route path="*" element={
          <PageWrapper>
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#13111C] min-h-screen">
        <Nav />
        <ScrollToTop />
        <main className="relative">
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
