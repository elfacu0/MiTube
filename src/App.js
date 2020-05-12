import React from 'react';
import styled from '@emotion/styled';
import './App.css';
import VideosContainer from './components/VideosContainer';
import LeftNav from './components/LeftNav';
import Footer from './components/Footer';
import Header from './components/Header';

const Container = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
`;
function App() {
    return (
        <div className="App">
            <Header />
            <Container>
                <LeftNav />
                <VideosContainer />
            </Container>
            <Footer />
        </div>
    );
}

export default App;
