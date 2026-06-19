import { useState } from "react";
import { HeaderStyled, SearchContainerStyled } from "./HeaderStyled";
import { Link } from "react-router-dom";

function Header() {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(e: React.FormEvent) {
        e.preventDefault(); 
        if (!searchTerm.trim()) return; 
        console.log("O usuário pesquisou a miniatura:", searchTerm);
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
                <p>Profile</p>
                <img src="Profile.png" alt="Foto de perfil" />
            </div>
        </HeaderStyled>
    )
}

export default Header;