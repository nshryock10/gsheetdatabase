import React from 'react';

export default function TableLine (props) {
    const name = props.name;
    const score = props.score;
    const payout = props.payout;
        return (
            <div className="table-line">
                <table>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{score}</td>
                            <td>{payout}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
}