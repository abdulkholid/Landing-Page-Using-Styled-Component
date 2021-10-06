import styled from "@emotion/styled";
import QuoteIcon from '../../images/review-quote.png';

export const Outer = styled.div`
    padding-top: 100px;
    padding-bottom: 250px;
    background-color: var(--elmoo-gray);

    .container {
        padding: 0px 60px;
    }
`;
export const Title = styled.h3`
    font-size: 40px;
    text-align: center;
    margin-bottom: 60px;
`;
export const Reviews = styled.div`
    
`;
export const ReviewItem = styled.div`
    border-radius: 10px;
    padding: 40px;
    background-color: #fff;
    width: 50%;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: -15px;
        right: 20px;
        width: 35px;
        height: 35px;
        background-image: url(${QuoteIcon});
        background-position: center;
        background-size: 100% auto;
        background-repeat: no-repeat;
    }
`;
export const PersonName = styled.div`
    display: flex;
`;
export const Photo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #eee;
    border: none;
    flex: none;
`;
export const Name = styled.div`
    font-size: 20px;
    flex-grow: 1;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: normal;
    font-size: 18px;
    font-weight: 600;
    color: #666;

    small {
        font-weight: normal;
        color: #aaa;
        margin-top: 3px;
        font-size: 13px;
    }
`;
export const Content = styled.div`
    font-size: 17px;
    margin-top: 20px;
    line-height: 27px;
    color: #333;
    min-height: 100px;
`;