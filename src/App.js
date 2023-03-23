import Layout from "./components/Layouts/Layouts";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/register";
import Translator from "./pages/Translator";
import Text2Image from "./pages/Text2Image";

function App() {
  return (
    <Layout className="App">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/text2img" element={<Text2Image />} />
      </Routes>
    </Layout>
  );
}

export default App;
