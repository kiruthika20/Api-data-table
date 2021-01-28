import React from 'react'


export default function ApiTable({ probs }) {

    const columns= probs[0] && Object.keys(probs[0])

    return (

        <table class="container table table-hover table-dark">
            <thead>
                <tr>{probs[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
            </thead>
            <tbody>
                {probs.map((row) => (
                    <tr>
                        {columns.map((column) => (
                            <td>{row[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}