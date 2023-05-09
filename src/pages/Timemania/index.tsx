import { useContexto } from "../../hooks";
import{ ThemeProvider } from"styled-components";
import { timemaniastyle } from "../../styles/theme";
import trevotimemania from "../../assets/trevo-timemania.png"
import { PrincipalComponente } from "../../components/Principal/Principal";



export default function Timemania(){
    
  const {timemania} = useContexto()

  return (
    <ThemeProvider theme={timemaniastyle}>
      <PrincipalComponente contexto={timemania} trevo={trevotimemania} titulo={"timemania"}></PrincipalComponente>
    </ThemeProvider>
  )

}