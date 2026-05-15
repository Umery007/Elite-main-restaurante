import { useState, useEffect } from "react";
import {
  Headerdiv,
  NavLeft,
  NavRight,
  Logo,
  Button,
  MenuButton,
  MobileMenu,
} from "./styles";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const pdfLink = "https://drive.google.com/file/d/15EfJ9hZ1ZwIbE5bVZZ1muryJX4zeX9gY/preview";

  return (
    <Headerdiv className={`${scrolled ? "scrolled" : ""}`}>
      <MenuButton onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </MenuButton>

      <NavLeft>
      <a href="#">The restaurant</a>
      <a href={pdfLink} target="_blank" rel="noopener noreferrer">The menu</a>

      <a href="#">Main Chef</a>
    </NavLeft>

      <Logo>L'ÉLITE FRANÇAISE</Logo>

      <NavRight>
        <a href="/Galeria">Gallery</a>
        <a href="/Contato">Contact</a>
        <a href="#">News</a>

        <a href="/Reserva">
          <Button>Book now</Button>
        </a>
      </NavRight>

      <MobileMenu className={menuOpen ? "open" : ""}>
        <a href="#">The restaurant</a>
        <a href="#">The menu</a>
        <a href="#">Main Chef</a>
        <a href="/Galeria">Gallery</a>
        <a href="/Contato">Contact</a>
        <a href="#">News</a>

        <a href="/Reserva">
          <Button>Book now</Button>
        </a>
      </MobileMenu>
    </Headerdiv>
  );
}