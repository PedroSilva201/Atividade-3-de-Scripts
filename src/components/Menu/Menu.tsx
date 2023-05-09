import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const mega = {
    cor: "#209869"
}
const quina = {
    cor: "#260085"
}
const time = {
    cor: "#00ff48"
}

const Props = {
    cor: "#ddd"
}

export default function Menu() {
    const linkAtual = useLocation()
    return(
        <MenuSld>
            <LinkSld theme={linkAtual.pathname === "/timemania"? Props: time} to={"/timemania"}> Timemania</LinkSld>
            <LinkSld  theme={linkAtual.pathname === "/megasena"? Props: mega} to={"/megasena"} > Megasena</LinkSld>
            <LinkSld  theme={linkAtual.pathname === "/quina"? Props: quina} to={"/quina"} > Quina</LinkSld>
        </MenuSld>
    )
}

const MenuSld = styled.div`
    margin-top: 1%;
    margin-left: 5.5%;
`

const LinkSld = styled(Link)`
text-decoration: none;
color: ${props =>props.theme.cor};
padding: 12px;
font-size: 18px;
font-weight: bold;
`