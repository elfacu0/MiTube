import React from 'react';
import styled from '@emotion/styled';

const VideoWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 320px;
    min-width: 240px;
    min-height: 150px;
    margin-right: 20px;
    padding-bottom: 50px;
    @media (max-width: 420px) {
        margin-right: 0px;
        margin-top: 40px;
    }
    cursor: pointer;
`;
const VideoImage = styled.img`
    width: 100%;
    max-height: 200px;
`;

const DetailsContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: left;
    font-size: 16.5px;
    @media (max-width: 420px) {
        font-size: 16px;
    }
`;

const ProfileImage = styled.img`
    width: 35px;
    height: 35px;
    max-height: 36px;
    max-width: 36px;
    width: 15%;
    border-radius: 50%;
    margin-right: 20px;
`;

const VideoDetails = styled.div`
    color: white;
    width: 85%;
`;

const VideoTitle = styled.div`
    font-weight: 500;
    font-size: 1em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const ChannelName = styled.div`
    margin-top: 6px;
    filter: brightness(65%);
    &:hover {
        filter: brightness(120%);
    }
`;

const VideoInfo = styled.div`
    font-size: 0.9em;
    filter: brightness(65%);
`;
const Video = (props) => {
    const {
        image_url,
        profile_url,
        title,
        channelName,
        videoViews,
        videoAge,
    } = props;
    return (
        <VideoWrapper>
            <VideoImage src={image_url} alt={image_url} />
            <DetailsContainer>
                <ProfileImage src={profile_url} alt={profile_url} />
                <VideoDetails>
                    <VideoTitle>{title}</VideoTitle>
                    <ChannelName>{channelName}</ChannelName>
                    <VideoInfo>
                        {videoViews} • {videoAge}
                    </VideoInfo>
                </VideoDetails>
            </DetailsContainer>
        </VideoWrapper>
    );
};

export default Video;
