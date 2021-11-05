import React from "react";
import "./PriceTable.css";

const PriceTable = ({ pColor, lv, lvColor }) => {
  const arrayOfValues = [10, 3.8, 9, 1, 7.5, 2];
  return (
    <div className="price-table">
      <thead>
        <th>lorem</th>
        <th>lorem</th>
        <th>lorem</th>
      </thead>
      <tbody style={{ borderColor: pColor }}>
        {arrayOfValues.map((value) => {
          return (
            <div>
              <td style={{ color: pColor }}>{lv}</td>
              <td>{value}</td>
              <td
                className="td"
                style={{
                  width: "35%",
                  textAlign: "right",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  className="td-div"
                  style={{
                    width: `${value * 10}%`,
                    backgroundColor: lvColor,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {value}
                </div>
              </td>
            </div>
          );
        })}
        {/* <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div>
        <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div>
        <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div>
        <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div>
        <div>
          <td style={{ color: pColor }}>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </div> */}
      </tbody>
    </div>
  );
};

export default PriceTable;
