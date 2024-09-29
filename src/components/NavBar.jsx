import "./navbar.css"

const NavBar = () => {

    const stylesH2 = {color: "red", fontSize: "40px"}

return (

<nav className="navbar">
<h1 style= {stylesH2}>NavBar</h1> {// esto sería estilos en línea
}

</nav>
)
}

export default NavBar //est aes util para pocos componentes
//export {NavBar} //otra forma de importar util para exportar varios elementos