import React from 'react';
import bg from './../img/enneagram-home.png'

function Home() {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '95vh'}} className='px-5 py-10 mt-[45px] mb-[-45px]'>
            <h2 className='text-[4rem] text-white w-[30%]'>Chào mừng bạn đến với SnowyField</h2>
        </div>
    )
}

export default Home;