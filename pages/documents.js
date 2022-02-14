import './App.css'
import React, { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import Introduce from './components/Introduce';


function App() {
    useEffect(() => {
        document.title = "SnowyField - Eneagram";
    }, []);


    return (
        <div className='overflow-y-auto overflow-x-hidden bg-gradient-to-r from-blue-800 to-purple-800 pb-10'>
            <div className='fixed top-0 left-0 right-0'>
                <NavBar/>
            </div>
            <div className='mx-8 my-20 bg-white rounded-2xl h-screen'>
            <div>
                <Introduce/>
            </div>
            </div>
        </div>
    )
}

export default App;