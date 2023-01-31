import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { Home } from "../components/Home";
import { Portfolio } from "../components/Portfolio";
import { Error404 } from "../components/404";
import { Contact } from "../components/Contact";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
