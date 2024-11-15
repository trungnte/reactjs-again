import React, { useCallback, useState } from 'react';
import Comment from './Comment';

export default function DemoUseCallback() {
    let [like, setLike] = useState(0);
    let [number, setNumber] = useState(0);

    let notifyMsg = () => {
        console.log(`You have increased number: ${number}`);
        return number
    }

    let notifyMsgCallback = useCallback(notifyMsg, [number])

    return (
        <div className='container'>
            <button className='btn btn-danger' onClick={() => { 
                setLike(like + 1)
            }}>Tăng Like</button>

            <button className='btn btn-info' onClick={() => { 
                setNumber(number + 1)
            }}>Tăng Number</button>

            <div className="card w-25">
                <img style={{ width: "100%" }} className="card-img-top" src="https://i.pravatar.cc/?u=77" alt="" />
                <div className="card-body">
                    <p className="card-text">Like: {like} </p>
                    <p className="card-text">Number: {number} </p>
                </div>
            </div>

            {/* => props truyền xuống sẽ đổi dịa chỉ => memo render lại UI do nhầm giá trị thay dổi */}
            {/* number={number}   */}
            <Comment notifyMsg={ notifyMsgCallback }/>
        </div>
    )
}