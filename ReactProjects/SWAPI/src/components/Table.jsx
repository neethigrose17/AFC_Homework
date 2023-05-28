import "./Table.css";

const Table = (props) => {
    const {info} = props;
    return (
        <table id="main_table">
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
                {info.map((el, i) => {
                    {console.log(el)}
                    <tr>
                        <td>{el.name}</td>
                        <td>{el.height}</td>
                        <td>{el.hair_color}</td>
                        <td>{el.gender}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Table;