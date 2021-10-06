import styled from "@emotion/styled";

export const BannerContainer = styled.div`
    width: 100%;
    background-color: red;
`;

export const BannerImage = styled.div`
    background-image: url(${props => props.bg ? props.bg : ''});
    display: flex;
    height: ${ window.innerHeight-70 }px;
    width: 100%;
    background-color: #aaa;
    background-position: center;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, var(--elmoo-purple), var(--elmoo-blue), transparent);
        opacity: 0.4;
    }
    & .container {
        position: relative;
    }
`;

export const BannerCaption = styled.div`
    color: #fff;
    max-width: 600px;
`;

export const BannerTitle = styled.h3`
    font-size: 75px;
    font-family: 'Urbanist', sans-serif;
    margin-bottom: 20px;

    & b {
        color: var(--elmoo-banana);
    }
`;

export const BannerDescription = styled.div`
    font-size: 14px;
    line-height: 25px;
    color: #ddd;
    max-width: 70%;
    margin-bottom: 30px;
`;