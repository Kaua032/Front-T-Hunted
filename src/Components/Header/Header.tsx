import { useState, useEffect } from "react";
import { HeaderStyled, SearchContainerStyled } from "./HeaderStyled";
import { Link, useNavigate } from "react-router-dom";
import { searchCar } from "../../services/carService";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { decode } from "zod";

interface HeaderProps {
  onCarFound: (car: any) => void;
}

function Header({ onCarFound }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const [userName, setUserName] = useState("Profile");

  const navigate = useNavigate();

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

  function handleLogout() {
    Cookies.remove("token");
    navigate("/");
  }

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
        <p>{userName}</p>
        <img src="Profile.png" alt="Foto de perfil" />
        <button id="logout" onClick={handleLogout}></button>
      </div>
    </HeaderStyled>
  );
}

export default Header;
