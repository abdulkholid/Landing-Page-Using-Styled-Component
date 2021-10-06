import styled from "@emotion/styled/macro";
import { NavLink, Link } from "react-router-dom";

export const MenuOuter = styled.ul`
    list-style: none;
    display: flex;
    font-family: 'Urbanist', sans-serif;
`;

export const MenuLink = styled(NavLink)`
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #707574;
    transition: 200ms ease-in ;
    
    &.active {
        font-weight: 600;
        color: #000;
    }

    &.active:before {
        content: "";
        position: absolute;
        left: 0px;
        right: 0px;
        margin: auto;
        top: -5px;
        width: 20px;
        height: 5px;
        border-radius: 10px;
        background-color: var(--elmoo-blue);
    }

    &:hover {
        color: #000;
    }

    svg {
        margin-left: 10px;
    }
`;

export const MenuLinkDisbaled = styled.a`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #707574;
    cursor: pointer;

    &:hover {
        color: #000;
    }

    svg {
        margin-left: 10px;
    }
`;

export const Dropdown = styled.ul`
    position: absolute;
    display: none;
    left: 0px;
    right: 0px;
    margin: auto;
    top: 40px;
    width: 230px;
    list-style: none;
    background-color: var(--elmoo-purple);
    padding: 15px 20px;
    font-size: 14px;
    border-radius: var(--radius-md);
`;

export const MenuItem = styled.li`
    margin: 0px 20px;
    position: relative;

    &:hover ${Dropdown} {
        display: block;
    }
`;

export const DropdownMenuItem = styled.li`
    
`;
export const DropdownMenuLink = styled(Link)`
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 10px 0px;
    transition: 300ms ease-out;

    &:hover {
        color: var(--elmoo-banana);
    }
`;