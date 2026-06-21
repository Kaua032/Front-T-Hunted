import styled from "styled-components";

export const BackgroundHomeStyled = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url("Background_Logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  #results_layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #results_layout #choose_layout {
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

  #your_collection {
    width: 60%;
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  #your_collection h2 {
    font-size: 48px;
    font-weight: 500;
    color: #5e5d5d;

    margin-top: 100px;
    margin-bottom: 33px;

    align-self: flex-start;
  }

  #your_collection #cards {
    display: flex;
    gap: 32px;
  }
  #your_collection #cards .cards {
    display: flex;
    width: 350px;
    height: 200px;

    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    border-radius: 10px;
  }

  #your_collection #cards .cards .border_card {
    width: 30px;
    height: 200px;

    border-radius: 10px 0px 0px 10px;

    background: #e56750;
    background: linear-gradient(
      135deg,
      rgba(229, 103, 80, 1) 15%,
      rgba(231, 155, 80, 1) 85%
    );
  }

  .title_card {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  .title_card img {
    width: 50px;
  }
  .title_card p {
    font-size: 26px;
    color: #5e5d5d;
    font-weight: 400;
  }

  #your_collection #cards .cards .card_layout_2 {
    display: flex;
    flex-direction: column;
    gap: 35px;

    padding: 25px 0px 0px 15px;
  }

  #your_collection #cards .cards .card_layout_2 img {
    width: 60px;
  }

  .card_value {
    font-size: 48px;
    color: #5e5d5d;
    font-weight: 500;
  }

  #part2_rare_piece {
    display: flex;
    gap: 30px;
  }

  #choose_layout_collection {
    width: 650px;
    display: flex;
    gap: 20px;
    margin-top: 50px;
    margin-bottom: 30px;

    justify-content: flex-end;
  }

  #collection {
    display: flex;
    gap: 25px;
    width: 650px;

    padding-bottom: 50px;

    &.list {
      flex-direction: column;
      align-items: center;
    }

    &.grid {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
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
      return props.$isActive
        ? "url('./list_selected.png')"
        : "url('./no_list.png')";
    }

    return props.$isActive
      ? "url('./grid_selected.png')"
      : "url('./no_grid.png')";
  }};
`;
