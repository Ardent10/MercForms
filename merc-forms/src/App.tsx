import { Login, Signup } from "@modules/auth/pages";
import { Error404 } from "@modules/error";
import { Forms } from "@modules/forms/page";
import { NewForm } from "@modules/forms/page/createNewForm";
import { TemplateForms } from "@modules/forms/page/templateForms";
import { Home } from "@modules/home/page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/forms" element={<Forms />}>
        <Route path="/forms/create/:id" element={<NewForm />} />
        <Route path="/forms/templates/:templateName/:id" element={<TemplateForms />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
