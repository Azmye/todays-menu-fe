import Landing from "@/pages/landing/Landing";
import { Route, Routes } from "react-router";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Landing />}></Route>
    </Routes>
  );
}
