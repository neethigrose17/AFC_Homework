import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
const initialData = {
    dummy: "That's me!"
}

const Landing = (props) => {
    const [data, setData] = useState([initialData])
    useEffect(() => {
        let endpoint = "http://localhost:3000/employee/all"
        axios.get(endpoint)
        .then(response => setData(response.data))
        .catch(err => console.error("Error in client reading data ", err))
    }, [])

    return (
        <>å
            <h1>Landing Component</h1>
            <Table employeeData={data}/>
            {/* <h2>{props.doggy}</h2> */}
        </>
    )
}

export default Landing;