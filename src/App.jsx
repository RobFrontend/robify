import GlobalStyles from "./styles/GlobalComponents.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Info from "./pages/Info.jsx";
import AnimatedCursor from "react-animated-cursor";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />

      {window.innerWidth > 768 && (
        <AnimatedCursor
          innerSize={16}
          outerSize={8}
          color="255, 244, 244"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={3}
          innerStyle={{
            border: "2px solid var(--body-background-color)",
            filter: "drop-shadow(0px 0px 8px #151515)",
            zIndex: "10",
          }}
          outerStyle={{
            filter: "drop-shadow(0px 0px 15px #151515)",
            zIndex: "10",
          }}
          clickables={[
            "a",
            "input",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            ".song-box",
            "audio",
            "iframe",
          ]}
        />
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="info" element={<Info />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
