import styled from '@emotion/styled';

export const FactContainer = styled.div`
	background-color: var(--elmoo-gray);
	padding: 100px 0px 150px;
`;

export const FactTitle = styled.h2`
	font-size: 40px;
	text-align: center;
    display: block;
    width: 100%;
    margin-bottom: 20px;
    font-weight: 600;
    color: #333;
`;

export const FactDesc = styled.div`
	text-align: center;
	width: 760px;
	max-width: 100%;
	font-size: 14px;
    margin: auto;
    line-height: 25px;
    color: #777;
`;

export const FactRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
    justify-content: center;
`;
