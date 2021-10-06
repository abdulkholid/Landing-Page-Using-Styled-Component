import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

export const CtaButton = styled(Link)`
    display: inline-flex;
    height: 35px;
    align-items: center;
    justify-content: center;
    line-height: 0px;
    border-radius: 25px;
    text-decoration: none;
    font-family: 'Urbanist', sans-serif;
    transition: 300ms ease-out;
    background-color: var(--elmoo-blue);
    color: #fff;
    padding: 0px 20px;
    font-weight: 500;


    ${(props) => props.type === 'outline' && `
        background-color: transparent;
        color: var(--elmoo-blue);
        border: 1px solid var(--elmoo-blue);
    `}

    ${(props) => props.size === 'big' && `
        height: 50px;
        padding: 0px 35px;
        font-size: 16px;
    `}

    &:hover {
        background: var(--elmoo-purple);
        ${(props) => props.type === 'outline' && `
            background-color: var(--elmoo-blue);
            color: #fff;
        `}
    }
`;

export const SpanAfter = styled.span`
    margin-left: 10px;
    transform: translateY(1px);
    transition: 200ms ease-in;

    ${CtaButton}:hover & {
        transform: translateY(1px) translateX(5px);
    }
`;