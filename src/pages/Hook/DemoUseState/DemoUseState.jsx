import React, { useState } from 'react';

export default function DemoUseState(props) {

    let [fontSize, setFontSize] = useState(16);
    let [userInfo, setUserInfo] = useState({
        name: "Donal Trump",
        avatar: "https://i.pravatar.cc",
        vote: 0
    })


    return (
        <div className='container'>
            <div>
                <h2>Demo increase/decrease font size</h2>
                <p style={{ fontSize: `${fontSize}px` }}>Lorem ipsum dolor sit amet</p>

                <button onClick={() => {
                    setFontSize(fontSize + 2);
                }} className='btn btn-success mx-1'>+</button>
                
                <button onClick={() => {
                    setFontSize(fontSize - 2);
                }} className='btn btn-danger mx-1'>-</button>

                <h2 className='py-5'>Demo Vote</h2>

                <div className="card w-25">
                    <img style={{ width: "100%" }} className="card-img-top" src={userInfo.avatar} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{userInfo.name}</h5>
                        <p className="card-text">{userInfo.vote}</p>

                        <button onClick={() => {
                            setUserInfo({...userInfo, vote: userInfo.vote + 1})
                        }} className='btn btn-success'>Vote</button>

                    </div>
                </div>

            </div>
        </div>
    );
}

