import React from 'react';
import styled from '@emotion/styled';

const LeftNavCollapseWrapper = styled.div`
    z-index: 2;
    width: 250px;
    top: 56px;
    height: calc(100vh - 56px);
    position: absolute;
    transition-duration: 0.5s;
    overflow-y: scroll;
    background-color: #212121;
    color: white;
    left: ${(props) => (props.show === true ? '0px' : '-250px')};
    @media (max-width: 420px) {
        display: none;
    }
    /* width */
    @media (min-width: 420px) {
        ::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #212121;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }
`;

const OptionsContainer = styled.div`
    border: 1px solid #565656;
    border-right: 0px;
    border-left: 0px;
    padding: 15px 0px 15px 0px;
`;

const Option = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 30px 0px 30px;
    height: 45px;
    filter: brightness(0.8);
    cursor: pointer;
    &:hover {
        background: #383838;
        filter: brightness(1);
    }
`;

const OptionIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-right: 24px;
    filter: invert(1);
`;

const OptionText = styled.span`
    margin: 0px;
    font-size: 16px;
    font-weight: 450;
`;

const SignInContainer = styled.div`
    padding: 16px 32px;
`;

const SignIn = styled.div`
    height: 36px;
    width: 105px;
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

const SignInTexto = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin: 0px 0px 20px 0px;
`;

const CatergoryText = styled.p`
    margin: 0px 0px 10px 30px;
    color: #aaaaaa;
    font-weight: 650;
    text-transform: uppercase;
`;

const CategoryIcons = styled.div`
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 24px;
    width: 30px;
    height: 30px;
`;

const CategoryIcon = styled.img`
    filter: invert(1);
    width: 16px;
    height: 16px;
`;

const LeftNavCollapse = (props) => {
    return (
        <LeftNavCollapseWrapper show={props.show}>
            <OptionsContainer>
                <Option>
                    <OptionIcon
                        alt="Home"
                        src="https://image.flaticon.com/icons/svg/20/20176.svg"
                    />
                    <OptionText>Home</OptionText>
                </Option>
                <Option>
                    <OptionIcon
                        alt="trending-icon"
                        src="https://image.flaticon.com/icons/svg/483/483675.svg"
                    />
                    <OptionText>Trending</OptionText>
                </Option>
                <Option>
                    <OptionIcon
                        alt="subscriptions-icon"
                        src="https://image.flaticon.com/icons/svg/565/565285.svg"
                    />
                    <OptionText>Subscriptions</OptionText>
                </Option>
            </OptionsContainer>
            <OptionsContainer>
                <Option>
                    <OptionIcon
                        alt="library-icon"
                        src="https://image.flaticon.com/icons/svg/1051/1051299.svg"
                    />
                    <OptionText>Library</OptionText>
                </Option>
                <Option>
                    <OptionIcon
                        alt="history-icon"
                        src="https://image.flaticon.com/icons/svg/565/565526.svg"
                    />
                    <OptionText>History</OptionText>
                </Option>
            </OptionsContainer>
            <SignInContainer>
                <SignInTexto>
                    Sign in to like videos, comment, and subscribe.
                </SignInTexto>
                <SignIn>
                    <SignInIcon
                        alt="sing-icon"
                        src="https://image.flaticon.com/icons/svg/483/483361.svg"
                    />
                    <SignInText>SIGN IN</SignInText>
                </SignIn>
            </SignInContainer>
            <OptionsContainer>
                <CatergoryText>BEST OF YOUTUBE</CatergoryText>
                <Option>
                    <CategoryIcons>
                        <CategoryIcon
                            alt="music-icon"
                            src="https://image.flaticon.com/icons/svg/727/727204.svg"
                        />
                    </CategoryIcons>
                    <OptionText>Music</OptionText>
                </Option>
                <Option>
                    <CategoryIcons>
                        <CategoryIcon
                            alt="sport-icon"
                            src="https://image.flaticon.com/icons/svg/731/731944.svg"
                        />
                    </CategoryIcons>
                    <OptionText>Sport</OptionText>
                </Option>
                <Option>
                    <CategoryIcons>
                        <CategoryIcon
                            alt="gaming-icon"
                            src="https://image.flaticon.com/icons/svg/1687/1687566.svg"
                        />
                    </CategoryIcons>
                    <OptionText>Gaming</OptionText>
                </Option>
                <Option>
                    <CategoryIcons>
                        <CategoryIcon
                            alt="movies-icon"
                            src="https://www.flaticon.com/premium-icon/icons/svg/2064/2064452.svg"
                        />
                    </CategoryIcons>
                    <OptionText>Movies</OptionText>
                </Option>
                <Option>
                    <CategoryIcons>
                        <CategoryIcon
                            alt="news-icon"
                            src="https://image.flaticon.com/icons/svg/1483/1483206.svg"
                        />
                    </CategoryIcons>
                    <OptionText>News</OptionText>
                </Option>
                <Option>
                    <CategoryIcons>
                        <CategoryIcon
                            alt="live-icon"
                            src="https://image.flaticon.com/icons/svg/1340/1340130.svg"
                        />
                    </CategoryIcons>
                    <OptionText>Live</OptionText>
                </Option>
                <Option>
                    <CategoryIcons>
                        <CategoryIcon
                            alt="360-icon"
                            src="https://www.flaticon.com/premium-icon/icons/svg/2204/2204895.svg"
                        />
                    </CategoryIcons>
                    <OptionText>360° Video</OptionText>
                </Option>
            </OptionsContainer>
        </LeftNavCollapseWrapper>
    );
};
export default LeftNavCollapse;
