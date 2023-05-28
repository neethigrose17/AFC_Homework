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
                {/* This took FOREVER for me to figure out. I had so many errors, from "data is not defined" to ".map is not a function" and finally realized that props is an object and I had to destructure it into "info" for this to work. I also forgot the return statement at first. */}
                {info.map((el, i) => {
                    return (
                        <tr>
                            <td>{el.name}</td>
                            <td>{el.height} cm</td>
                            {/* I am assuming this is cm */}
                            <td>{el.hair_color}</td>
                            <td>{el.gender}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;