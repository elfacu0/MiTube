import React, { useState } from 'react';
import Video from './Video';
import styled from '@emotion/styled';
import { getImage } from '../data/images';
import {
    getTitle,
    getChannelName,
    getVideoViews,
    getVideoAge,
    getVideoDuration,
} from '../data/titles';

const Recommended = styled.p`
    display: flex;
    width: 100%;
    max-height: 40px;
    padding: 0px;
    font-size: 24px;
    font-weight: 600;
    margin: 40px 0px 15px 0px;
    color: white;
    @media (max-width: 420px) {
        display: none;
    }
`;

const VideosWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 10px 0px 30px;
    overflow-y: scroll;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 420px) {
        padding: 0px;
    }
    /* width */
    @media (min-width: 420px) {
        ::-webkit-scrollbar {
            width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
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
let videos = [];
for (let i = 0; i < 120; i++) {
    videos.push(
        <Video
            key={i}
            image_url={getImage()}
            profile_url={getImage()}
            title={getTitle()}
            channelName={getChannelName()}
            videoAge={getVideoAge()}
            videoViews={getVideoViews()}
            videoDuration={getVideoDuration()}
        />
    );
}

const VideosContainer = () => {
    const [videosShowed, setVideosShowed] = useState(20);
    const scrollCheck = (event) => {
        const bottom =
            event.target.scrollHeight - event.target.scrollTop ===
            event.target.clientHeight;
        if (bottom) {
            setVideosShowed(videosShowed + 8);
        }
    };
    return (
        <VideosWrapper onScroll={scrollCheck}>
            <Recommended>Recommended</Recommended>
            {videos.slice(0, videosShowed).map((video) => video)}
        </VideosWrapper>
    );
};

export default VideosContainer;
