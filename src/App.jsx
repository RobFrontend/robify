import GlobalStyles from "./styles/GlobalComponents.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SongIdProvider } from "./components/SongIdContext.jsx";
import Info from "./pages/Info.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SongIdProvider>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/info" element={<Info />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </SongIdProvider>
    </>
  );
}

export default App;
