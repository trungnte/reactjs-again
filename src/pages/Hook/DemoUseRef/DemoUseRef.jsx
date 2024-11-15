import React, { useRef, useState } from 'react';

export default function DemoUseRef() {
    // set at background, dont render UI
    let useRefLogin = useRef({
        username: "",
        password: ""
    })

    let inputRef = useRef(null)

    let handleChange = (event) => {
        let { value, id } = event.target;

        useRefLogin.current[id] = value;
        console.log(useRefLogin.current);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(useRefLogin.current);
        inputRef.current.style.color = "red";
    }

    console.log("render form")

    return (
        <div className='container' onSubmit={handleSubmit}>
            <form className='w-50'>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input ref={inputRef} type="text" className="form-control" id="username" onChange={handleChange} />

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}