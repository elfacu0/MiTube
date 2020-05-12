import React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    background: #111;
    border: 1px solid #303030;
    bottom: 0px;
    height: 50px;
    color: white;
    transition: 1s;
    @media (min-width: 420px) {
        display: none;
    }
`;

const FooterIconContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

const FooterText = styled.p`
    margin: 0px;
    font-size: 12px;
    font-weight: 400;
`;

const FooterIcon = styled.img`
    width: 22px;
    filter: invert(0.9);
`;

const Footer = () => {
    return (
        <FooterWrapper id="small-footer">
            <FooterIconContainer>
                <FooterIcon
                    alt="home-icon"
                    src="https://image.flaticon.com/icons/svg/20/20176.svg"
                />
                <FooterText>Home</FooterText>
            </FooterIconContainer>
            <FooterIconContainer>
                <FooterIcon
                    alt="trending-icon"
                    src="https://image.flaticon.com/icons/svg/483/483675.svg"
                />
                <FooterText>Tendring</FooterText>
            </FooterIconContainer>
            <FooterIconContainer>
                <FooterIcon
                    alt="subscriptions-icon"
                    src="https://image.flaticon.com/icons/svg/565/565285.svg"
                />
                <FooterText>Library</FooterText>
            </FooterIconContainer>
        </FooterWrapper>
    );
};

export default Footer;
