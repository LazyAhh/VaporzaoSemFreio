import NavItem from "./NavItem"

const Navigation = () => {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      <NavItem label="Loja" active />
      <NavItem label="Biblioteca" />
      <NavItem label="Comunidade" />
    </nav>
  )
}

export default Navigation