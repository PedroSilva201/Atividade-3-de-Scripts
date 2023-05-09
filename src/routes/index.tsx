import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Megasena from "../pages/Megasena";
import Quina from "../pages/Quina";
import Timemania from "../pages/Timemania";
import { ThemeProvider } from "styled-components";
import { useContexto } from "../hooks";

function Rotas() {
    const {tema} = useContexto();
    return (
        <ThemeProvider theme={tema}>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Megasena />} />
                    <Route path="/megasena" element={<Megasena />} />
                    <Route path="/quina" element={<Quina />} />
                    <Route path="/timemania" element={<Timemania />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}
export default Rotas;