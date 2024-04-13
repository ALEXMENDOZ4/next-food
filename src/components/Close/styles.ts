import { colors } from '@/app/styles/colors';
import styled from 'styled-components';

const barsX = "8px";
const height = `calc((${barsX}) * 3 + (6px) * 2)`;
const totalHeight = `calc(${height} * 1.41421356237)`;

export const Container = styled.div`

    .hamburger-menu{
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: max-content;
        cursor: pointer;
        transition: all .2s ease-in-out;
        position: absolute;
        right: .5rem;
        top: 8px;
        visibility: hidden;


        &:hover{
            opacity: .7;
        }

        @media(max-width: 900px){
            visibility: visible;
        }
    }

    .hamburger-menu::before,.hamburger-menu::after, .hamburger-menu input{
        content: "";
        width: 60px;
        height: ${barsX};
        background-color: #7f8c8d;
        border-radius: 10px;
        transform-origin: left center;
        transition: all .2s ease-in-out;
    }

    .hamburger-menu input{
        appearance: none;
        padding: 0;
        margin: 0;
        outline: none;
        pointer-events: none;
    }

    .hamburger-menu:has(input:checked)::before{
        rotate: 45deg;
        width: ${totalHeight};
        translate: 0 calc(${barsX} / -2);
    }

    .hamburger-menu:has(input:checked)::after{
        rotate: -45deg;
        width: ${totalHeight};
        translate: 0 calc(${barsX} / 2);
    }

    .hamburger-menu input:checked{
        opacity: 0;
        width: 0;
    }
`;