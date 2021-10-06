import styled from "@emotion/styled";

export const UpperFooterOuter = styled.div`
    .container {
        position: relative;
    }
`;
export const UpperFooterContent = styled.div`
    width: 90%;
    padding: 50px 30px;
    background-color: #fff;
    /* box-shadow: 0px 5px 5px #555; */
    border-radius: 20px;
    position: absolute;
    top: -150px;
    left: 0px;
    right: 0px;
    margin: auto;
`;
export const UpperFooterBigText = styled.h4`
    font-size: 25px;
    text-align: center;
    line-height: 35px;
`;
export const UpperFooterButtons = styled.div`
    margin-top: 30px;
    text-align: center;

    a {
        display: inline-flex;
        width: 200px;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border: 2px solid var(--elmoo-blue);
        color: var(--elmoo-blue);
        border-radius: 10px;
        text-decoration: none;
        transition: 200ms ease-in;
        margin: 0px 10px;

        &:hover {
            background-color: var(--elmoo-blue);
            color: #fff;
        }
    }
`;