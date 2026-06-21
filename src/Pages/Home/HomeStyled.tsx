import styled from "styled-components";

export const BackgroundHomeStyled = styled.div`
  min-height: 100vh;
  min-width: 100vw;

  background-image: url("Background_Logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  #results_layout{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #results_layout #chosse_layout {
    width: 650px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    margin-top: 50px;
    margin-bottom: 30px;
  }

  #results {
    display: flex;
    justify-content: center;
  }
`;

interface ButtonChooseLayoutProps {
  $mode: "list" | "grid";
  $isActive: boolean;
}

export const ButtonChooseLayout = styled.button<ButtonChooseLayoutProps>`
  width: ${(props) => (props.$mode === "list" ? "23px" : "28px")};
  height: 20px;

  ackground-color: transparent;
  cursor: pointer;

  border: none;
  background-image: ${(props) => {
    if (props.$mode === "list") {
      return props.$isActive ? "url('./list_selected.png')" : "url('./no_list.png')";
    }
    
    return props.$isActive ? "url('./grid_selected.png')" : "url('./no_grid.png')";
  }};
`
