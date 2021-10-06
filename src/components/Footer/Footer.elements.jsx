import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
    padding: 180px 0px 100px 0px;
    background: linear-gradient(270deg, #5C1BD9 0%, #43005E 150.56%);
    color: #fff;
`;
export const FooterRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    margin-right: -30px;
`;
export const FooterCol = styled.div`
    width: 33.333%;
    padding: 0px 30px;

    .logo {
        width: 150px;
        height: 58px;
        margin-bottom: 30px;
    }
    .text {
        font-size: 14px;
        line-height: 24px;
        color: #eee;
    }
`;
export const WidgetTitle = styled.h3`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--elmoo-banana);
`;
export const SocmedList = styled.div`
    margin: 20px -5px;
`;
export const SocmedItem = styled.a`
    width: 60px;
    height: 60px;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px solid #fff;
    font-size: 26px;
    color: #fff;
    transition: 200ms ease-in;
    margin: 0px 5px;

    &:hover {
        background-color: #fff;
        color: var(--elmoo-purple);
    }
`;
export const LinkList = styled.ul`
    margin: 0px;
    list-style: none;
    padding-left: 30px;
`;
export const LinkItem = styled.li`
    margin-bottom: 10px;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #fff;
        left: -20px;
        top: 8px;
        transition: 200ms ease-in;
    }
    &:hover {
        &:before {
            width: 15px;
            background-color: var(--elmoo-banana);
        }
        a {
            padding-left: 5px;
        }
    }
    a {
        text-decoration: none;
        color: #fff;
        transition: 200ms ease-in;
    }
`;