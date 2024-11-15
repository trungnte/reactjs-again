import React, { memo } from 'react';

function Comment(prop) {
    console.log("render Comment");

    return (
        <div>
            <p>Ahihihi</p>
            <p>{prop.number}</p>
            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <button className='btn btn-danger'>Gửi</button>
        </div>
    )
}

export default memo(Comment);