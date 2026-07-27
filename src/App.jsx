import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';

function App() {
    return (
        <>
            <MainLayout>
                <MyHeader />
                Content
                <MyFooter />
            </MainLayout>
        </>
    );
}

export default App;
