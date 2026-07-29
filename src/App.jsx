import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import MyFooter from '@components/Footer/Footer';
import MainLayout from '@components/Layout/Layout';
import MyButton from '@components/Button/Button';
import MyHeader from '@components/Header/Header';

function App() {
    return (
        <>
            <MainLayout>
                <MyHeader />
                Content
                {/* <MyFooter /> */}
            </MainLayout>
        </>
    );
}

export default App;
