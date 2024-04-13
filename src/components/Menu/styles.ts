import { colors } from "@/app/styles/colors";
import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  div svg {
    font-size: 4rem;
    cursor: pointer;
    transition: all ease-in-out 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  div.sidebar ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    font-size: 1.2rem;

    li{
      font-size: 1.2rem;
    }

    li,
    svg {
      cursor: pointer;
      transition: all ease-in-out 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 900px) {
    div.sidebar ul li {
      color: white;
      font-size: 1.2rem;
      padding: 2.5rem 0;
      width: 100%;
      /* display: none; */
    }

    div.sidebar ul{
      display: flex;
      text-align: center;
      flex-direction: column;
      width: 250px;
      gap: 0;
    }

    div.sidebar{
      background-color: ${colors.gray_2};
      transition: all 0.3s ease-in-out;
      position: absolute;
      right: 0;
      bottom: 0;
      min-height: 100vh;
    }
  }
`;