const Table = (props) => {
    // console.log(props.employeeData)
    let headers = Object.keys(props.employeeData[0])
    console.log(headers);
    let headerTitles = headers.map(el => {
        return (
            <td key={el}>{el}</td>
        )
    })

    let tableData = props.employeeData.map(el => {
        return (
            <tr key={el[headers[0]]}>
                {console.log(el)}
                {headers.map((header) => (
                    <td key={header}>{el[header]}</td>
                ))}
            </tr>
        )
    })

    return (
        <>
            <h1>Table Component</h1>
            <table border="1">
                <thead>
                    <tr>
                        {headerTitles}
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </>
    )
}

export default Table;