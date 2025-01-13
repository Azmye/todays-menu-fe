import { AuthGuard } from "@/components/auth";
import Index from "@/pages/Index";
import Landing from "@/pages/landing/Landing";
import Layout from "@/pages/Layout";
import { Route, Routes } from "react-router";

export default function Router() {
  return (
    <Routes>
      <Route
        element={
          <AuthGuard>
            <Layout />
          </AuthGuard>
        }
      >
        <Route index element={<Index />} />
      </Route>

      <Route path="/welcome" element={<Landing />} />
    </Routes>
  );
}
