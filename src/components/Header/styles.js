import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Header

export const Container = styled.header`
    height: 140px;
`;

// Menu

export const Menu = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 3px;
    padding: 25px 55px 0 55px;
`;

export const TaskInput = styled.div`
    div {
        height: 40px;
        width: 600px;
        border: 1px solid #ddd;
        border-radius: 8px;
        display: flex;
        align-items: center;

        input {
            padding-left: 20px;
            border: none;
            width: 550px;
            height: 38px;
            border-radius: 8px 0 0 8px;
            ::placeholder {
                color: #999;
            }
        }
        button {
            padding-left: 10px;
            height: 38px;
            width: 48px;
            border: none;
            background: #fff;
            border-radius: 0 8px 8px 0;
        }
    }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;

    div {
        transition: opacity 0.2s;
        color: #000;
        margin-left: 11px;

        &:hover {
            opacity: 0.7;
            color: green;
        }

        span {
            font-size: 11px;
        }
    }
`;

// Navbar

export const NavBar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 3px;
    list-style: none;
    font-size: 13px;
    text-transform: uppercase;
    padding: 40px 25px 0 25px;
`;

// Article

export const Shoes = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 10px;

    &:hover {
        color: blue;
    }
`;

export const Tshirt = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 10px;

    &:hover {
        color: blue;
    }
`;

export const Short = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 10px;

    &:hover {
        color: blue;
    }
`;

export const Hat = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 10px;

    &:hover {
        color: blue;
    }
`;

export const Clock = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 10px;

    &:hover {
        color: blue;
    }
`;
