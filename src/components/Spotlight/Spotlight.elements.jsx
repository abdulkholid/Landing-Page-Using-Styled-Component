import styled from '@emotion/styled';

export const SpotlightContainer = styled.div`
	background-color: #fff;
	padding: 30px 0px;

	@media (min-width: 768px) {
		.container {
			padding: 0px 100px;
		}
	}
`;

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Column = styled.div`
	width: ${(props) => props.width}%;
	padding: 30px;
`;

export const Image = styled.img`
	width: 100%;
	display: block;
	margin-top: -150px;
	box-shadow: 0px 10px 20px #ddd;
    border-radius: 10px;
`;

export const ImageHolder = styled.div`
    position: relative;
    border-radius: 15px;
    /* overflow: hidden; */

    &:after {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, var(--elmoo-purple), var(--elmoo-blue));
        opacity: 0.3;
        border-radius: 10px;
    }
`;

export const SmallText = styled.span`
	display: inline-block;
	margin-bottom: 10px;
	color: var(--elmoo-blue);
	font-weight: 600;
    font-family: 'Urbanist', sans-serif;
    text-transform: uppercase;
`;

export const Name = styled.h3`
	margin-bottom: 15px;
	font-family: 'Urbanist', sans-serif;
	font-size: 30px;
`;

export const Desciption = styled.div`
	margin-bottom: 15px;
	font-size: 14px;
	color: #777;
	line-height: 22px;
`;

export const Location = styled.div`
	margin-bottom: 30px;
    color: var(--elmoo-blue);
    font-size: 13px;

	svg {
        display: inline-block;
        vertical-align: -2px;
        margin-right: 5px;
	}
`;
