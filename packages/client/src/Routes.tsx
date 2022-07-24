import { Routes as BrowserRoutes, Route } from "react-router-dom";
import { Home, Details } from "./pages";

export const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </BrowserRoutes>
  );
};
