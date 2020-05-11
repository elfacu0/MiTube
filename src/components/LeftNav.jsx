import React from 'react';
import styled from '@emotion/styled';

const NavContainer = styled.div`
    height: 100%;
    width: 90px;
    background-color: #212121;
    @media (max-width: 420px) {
        display: none;
    }
`;

const NavIconContainer = styled.div`
    height: 75px;
    width: 100%;
    display: flex;
    padding: 5px 0px 5px 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        backdrop-filter: brightness(2);
    }
`;

const NavIcon = styled.img`
    width: 20px;
    height: 20px;
    filter: invert(0.6);
`;

const IconText = styled.span`
    font-size: 12px;
    font-weight: 300;
    margin-top: 8px;
    color: white;
    filter: invert(0.2);
`;

const LeftNav = () => {
    return (
        <NavContainer>
            <NavIconContainer>
                <NavIcon
                    alt="home-icon"
                    src="https://image.flaticon.com/icons/svg/20/20176.svg"
                />
                <IconText>Home</IconText>
            </NavIconContainer>
            <NavIconContainer>
                <NavIcon
                    alt="trending-icon"
                    src="https://image.flaticon.com/icons/svg/483/483675.svg"
                />
                <IconText>Trending</IconText>
            </NavIconContainer>
            <NavIconContainer>
                <NavIcon
                    alt="subscriptions-icon"
                    src="https://image.flaticon.com/icons/svg/565/565285.svg"
                />
                <IconText>Subscriptions</IconText>
            </NavIconContainer>
            <NavIconContainer>
                <NavIcon
                    alt="library-icon"
                    src="https://image.flaticon.com/icons/svg/1051/1051299.svg"
                />
                <IconText>Library</IconText>
            </NavIconContainer>
            <NavIconContainer>
                <NavIcon
                    alt="history-icon"
                    src="https://image.flaticon.com/icons/svg/565/565526.svg"
                />
                <IconText>History</IconText>
            </NavIconContainer>
        </NavContainer>
    );
};

export default LeftNav;
