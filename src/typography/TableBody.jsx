import React from "react";

const TableBody = ({ data }) => {
  return (
    <div className="Table-Body-Div">
      <table>
        <tbody>
          <tr>
            <td className="c1">{data.id}</td>
            <td className="c2">{data.customer}</td>
            <td className="c3">
              {data.date} <span>{data.time}</span>
            </td>
            <td className="c4">${data.Amount}</td>
            <td className="c5">{data.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
