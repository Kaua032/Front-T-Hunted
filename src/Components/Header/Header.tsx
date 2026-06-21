import { useState, useEffect } from "react";
import { HeaderStyled, SearchContainerStyled } from "./HeaderStyled";
import { Link } from "react-router-dom";
import { searchCar } from "../../services/carService";

// Importações para ler o token (Descomente se for usar a Opção 2)
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { decode } from "zod";

interface HeaderProps {
  onCarFound: (car: any) => void;
}

function Header({ onCarFound }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const [userName, setUserName] = useState("Profile");

  useEffect(() => {
    if (searchTerm.trim() === "") {
      onCarFound(null);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      try {
        const response = await searchCar(searchTerm);
        onCarFound(response.data);
      } catch (error) {
        console.log(error);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onCarFound]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);

        setUserName(decoded.email);
      } catch (error) {
        console.error("Erro ao decodificar o token JWT", error);
      }
    }
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <HeaderStyled>
      <Link to="/home" id="logo">
        <img src="Logo.png" alt="Logo T-Hunted" />
      </Link>

      <SearchContainerStyled onSubmit={handleSearch}>
        <input
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <img src="Search_icon.png" alt="Pesquisar" className="search-icon" />
        </button>
      </SearchContainerStyled>

      <div className="profile-container">
        {/* 3. Trocamos o texto fixo pela variável de estado */}
        <p>{userName}</p>
        <img src="Profile.png" alt="Foto de perfil" />
      </div>
    </HeaderStyled>
  );
}

export default Header;
