import { useState, useEffect } from 'react';

// const
let arrLocation = [
    {
        id: "HCM",
        tenTP: "Hồ Chí Minh",
        danhSachQH: [
            { id: 'Q001', name: "Quận 1" },
            { id: 'Q002', name: "Quận 2" },
            { id: 'Q003', name: "Quận 3" }
        ]
    },
    {
        id: "DN",
        tenTP: "Đà Nẵng",
        danhSachQH: [
            { id: 'HC', name: "Hải Châu" },
            { id: 'LC', name: "Liên Chiểu" },
            { id: 'ST', name: "Sơn Trà" }
        ]
    }
]

export default function DemoUseEffect() {

    //! Updating => props, state change
    let [number, setNumber] = useState(0);
    let [like, setLike] = useState(0);
    let [arrQH, setQH] = useState([]);
    let [idTP, setTP] = useState("")

    //! không nên gọi setState ở componentDidMount và componentDidUpdate
    //! useEffect(hàm xử lý code theo lifecycle, mảng rỗng)
    // useEffect(() => {
    //     console.log("componentDidMount");
    // }, [])


    useEffect(() => {
        const getArrQH = () => {
            if (idTP !== "") {
                const tp = arrLocation.find(objTP => objTP.id === idTP);
                if (tp) { // Check if a matching city is found
                    setQH(tp.danhSachQH);
                } else {
                    // Handle scenario where no matching city is found (optional)
                    console.warn("City not found:", idTP);
                    setQH([]);  // Clear existing districts if no match
                }
            }
        };

        getArrQH(); // Call getArrQH on component mount and state updates
    }, [idTP]);

    let renderQH = () => {
        if (arrQH.length === 0) {
            return <option>Please choose a city first</option>
        } else {
            return arrQH.map((qh) => {
                return <option key={qh.id} value={qh.id}>{qh.name}</option>
            });
        }
    };

    return (
        <div className='container'>
            <p className='alert alert-danger'>{number}</p>
            <p className='alert alert-danger'>{like}</p>
            <button onClick={() => { 
                setNumber(number + 1)
            }} className='btn btn-success'>Increase Number</button>

            <h2>Demo choose city</h2>
            <div className='row w-50'>
                <div className='col-6'>
                    <select className="form-control" id="" onChange={(event) => {
                        let { value } = event.target;
                        console.log("Value:", value);
                        setTP(value);
                    }}>
                        <option value={""}>Choose City</option>
                        <option value={"HCM"}>Ho Chi Minh</option>
                        <option value={"DN"}>Da Nang</option>
                    </select>
                </div>

                <div className='col-6'>
                    <select className="form-control" id="">
                        { renderQH() }
                    </select>
                </div>
            </div>
        </div>
    )
}

