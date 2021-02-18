import React, { Suspense } from 'react';
import Carousel from './pages/carousel';
import './styles/scss/index.scss';
import './styles/css/style.css';

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Carousel />
        </Suspense>
    );
};

export default App;
