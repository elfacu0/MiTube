import React, { useState } from 'react';
import styled from '@emotion/styled';
import LeftNavCollapse from './LeftNavCollapse';

const SmallHeader = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    max-height: 56px;
    height: 8%;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: #202020;
    transition: 1s;
    @media (min-width: 425px) {
        display: none;
    }
`;

const HeaderWrapper = styled.div`
    width: 100%;
    max-height: 56px;
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #202020;
    @media (max-width: 425px) {
        display: none;
    }
`;
const HeaderIcon = styled.img`
    filter: invert(0.8);
    width: 22px;
    height: 22px;
    padding: 8px;
    margin: 0px 16px 0px 20px;
    cursor: pointer;
`;

const YoutubeLogo = styled.img`
    width: 80px;
    height: 100%;
    margin-right: 100px;
    filter: invert(0.8);
    cursor: pointer;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65%;
    height: 30px;
`;

const SearchInput = styled.input`
    height: 100%;
    width: 70%;
    padding-left: 10px;
    color: white;
    font-size: 20px;
    background: #000000;
    border: 1px solid #303030;
    border-radius: 0 2px 2px 0;
    outline: none;
    box-shadow: none;
`;

const SearchButton = styled.button`
    height: 112%;
    border: 0;
    width: 80px;
    -webkit-appearance: none;
    background: #303030;
    background-image: url('https://image.flaticon.com/icons/svg/483/483356.svg');
    background-repeat: no-repeat;
    background-size: 26px;
    background-position: center;
    cursor: pointer;
    outline: none;
    box-shadow: none;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    right: 0;
    width: 30%;
`;

const Icon = styled.img`
    filter: invert(1.1);
    width: 22px;
    height: 22px;
    padding: 12px;
    cursor: pointer;
`;

const SignIn = styled.div`
    background: #202020;
    padding: 0px 10px 0px 10px;
    border: 2px solid #3ea6ff;
    color: #3ea6ff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
`;

const SignInIcon = styled.img`
    height: 20px;
    width: 20px;
    padding-right: 10px;
    filter: invert(55%) sepia(84%) saturate(2261%) hue-rotate(186deg)
        brightness(103%) contrast(101%);
`;

const SignInText = styled.p`
    font-size: 14px;
    font-weight: 700;
    margin: 0px;
`;

const ScreenBlur = styled.div`
    position: absolute;
    display: ${(props) => (props.show === true ? 'block' : 'none')};
    z-index: 1;
    backdrop-filter: grayscale(60%);
    width: 100vw;
    height: 100vh;
`;

const Header = () => {
    const [showCollapse, setShowCollapse] = useState(false);
    return (
        <React.Fragment>
            <LeftNavCollapse show={showCollapse} />
            <ScreenBlur
                show={showCollapse}
                onClick={() => {
                    setShowCollapse(false);
                }}
            />
            <HeaderWrapper>
                <HeaderIcon
                    src="https://image.flaticon.com/icons/svg/36/36775.svg"
                    alt="more-icon"
                    onClick={() => {
                        setShowCollapse(!showCollapse);
                    }}
                ></HeaderIcon>
                <YoutubeLogo
                    src="https://logos-marcas.com/wp-content/uploads/2020/04/YouTube-Logo.png"
                    alt="youtube-log"
                />
                <Search>
                    <SearchInput type="text" placeholder="Search" />
                    <SearchButton />
                </Search>
                <SocialIcons>
                    <Icon
                        alt="upload-icon"
                        src="https://image.flaticon.com/icons/svg/1160/1160041.svg"
                    />
                    <Icon
                        alt="squares-icon"
                        src="https://static.thenounproject.com/png/667412-200.png"
                    />
                    <Icon
                        alt="three-icon"
                        src="https://image.flaticon.com/icons/svg/483/483345.svg"
                    />
                    <SignIn>
                        <SignInIcon
                            alt="sing-icon"
                            src="https://image.flaticon.com/icons/svg/483/483361.svg"
                        />
                        <SignInText>SIGN IN</SignInText>
                    </SignIn>
                </SocialIcons>
            </HeaderWrapper>
            <SmallHeader id="small-header">
                <YoutubeLogo
                    src="https://logos-marcas.com/wp-content/uploads/2020/04/YouTube-Logo.png"
                    alt="youtube-log"
                />
                <Icon
                    alt="search-icon"
                    src="https://image.flaticon.com/icons/svg/483/483356.svg"
                />
                <Icon
                    alt="sing-icon"
                    src="https://image.flaticon.com/icons/svg/483/483361.svg"
                />
            </SmallHeader>
        </React.Fragment>
    );
};

export default Header;
