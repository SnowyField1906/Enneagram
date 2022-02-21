import './App.css'
import { React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/home'
import Type from './pages/type'
import Documents from './pages/documents'
import Information from './pages/information'
import Forum from './pages/forum'

    
function App() {
    useEffect(() => {
        document.title = "Enneagram - SnowyField";
    }, []);


    return (
        <div className='overflow-y-auto overflow-x-hidden bg-gradient-to-r from-blue-800 to-purple-800 pb-10'>
            <div>
                <Router>
                    <NavBar />
                    <div className='py-1'>
                        <Routes>
                            <Route path='Enneagram/' exact element={<Home/>}/>
                            <Route path='Enneagram/type' element={<Type />}/>
                            <Route path='Enneagram/documents' element={<Documents />}/>
                            <Route path='Enneagram/information' element={<Information />}/>
                            <Route path='Enneagram/forum' element={<Forum />}/>
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>

        
    )
}

export default App;