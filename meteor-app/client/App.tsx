import React from "react";
import { useCustomers } from "/imports/hooks/useCustomers";

export const App = () => {
    const customers = useCustomers();

    return (
        <table className="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Full name</th>
                <th>Position</th>
            </tr>
            </thead>
            <tbody>
            {customers.map((c) => (
                <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.full_name}</td>
                    <td className="__t">{c.position}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};