import "./Table.css";

const Table = (props) => {
    return (
        <table id="maintable">
            {/* dev tools told me I have to add these thead and tbody tags */}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Hair Color</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                    <td>Data</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;