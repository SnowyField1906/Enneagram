import React from 'react';
import bg from './../img/enneagram-home.png'

function Home() {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '93vh'}} className='mt-[50px] mb-[-44px] h-full'>
            <h2 className='text-lg text-white w-[50%]'>Chào mừng bạn đến với SnowyField</h2>
        </div>
    )
}

export default Home;