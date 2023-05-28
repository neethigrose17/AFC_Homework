import axios from "axios";
import {useEffect, useState} from "react";
import "./Table.css";

const Table = (props) => {
    let characterInfo = props.map((el, i) => {
        return (
            <tr>
                <td>{el.name}</td>
                <td>{el.height}</td>
                <td>{el.hair_color}</td>
                <td>{el.gender}</td>
            </tr>
        )
    })

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
                {characterInfo}
            </tbody>
        </table>
    )
}

export default Table;