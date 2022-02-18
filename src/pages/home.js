import React from 'react';
import bg from './../img/enneagram-home.png'
import Type from './../pages/type'
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    return (
        <div style={{
            backgroundImage: `url(${bg})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '93vh'
        }} className='flex mt-[50px] mb-[-44px] h-full justify-items-center justify-center'>
            <h2 className='text-[2em] text-white py-4 font-bold text-center absolute top-[50px]'>Chào mừng bạn đến với SnowyField</h2>
            <button onClick={() => navigate("./type")} class="absolute bottom-[300px] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-[1.4rem] px-5 py-2.5 mr-2 mb-2">
                Bắt đầu
            </button>
            
        </div>
    )
}

export default Home;