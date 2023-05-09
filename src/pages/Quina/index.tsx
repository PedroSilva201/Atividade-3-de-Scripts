import trevoQuina from "../../assets/trevo-quina.png"
import { useContexto } from "../../hooks";
import{ ThemeProvider } from"styled-components";
import { quinastyle } from "../../styles/theme";
import { PrincipalComponente } from "../../components/Principal/Principal";

export default function Quina(){
    const {quina} = useContexto()
    return(
      <ThemeProvider theme={quinastyle}>
        <PrincipalComponente contexto={quina} trevo={trevoQuina} titulo={"Quina"}></PrincipalComponente>
      </ThemeProvider>
    )
}