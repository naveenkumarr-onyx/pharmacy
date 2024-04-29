import React, { useEffect, useState } from "react";
import Heading from "../typography/Heading";
import Filters from "../typography/Filters";
import CheckBox from "../typography/CheckBox";
import { ordersFilter } from "../data";
import axios from "axios";
import { Triangle } from "react-loader-spinner";

const Orders = () => {
  const [data, setData] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders";

        if (selectedFilter !== null) {
          const filterValue = ordersFilter[selectedFilter].filter;
          url += `?orderStatus=${filterValue}`;
        }

        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedFilter]);

  function handleCheck(index) {
    setSelectedFilter(index);
  }

  function handleAllFilters() {
    const allChecked = ordersFilter.every((value, index) => {
      return document.getElementById(`checkbox-${index}`).checked;
    });

    if (allChecked) {
      setSelectedFilter(null);
    }
  }

  function getFilteredCount() {
    if (!data) return 0;
    if (selectedFilter === null) return data.length;

    const filterValue = ordersFilter[selectedFilter].filter;
    return data.filter((order) => order.orderStatus === filterValue).length;
  }

  const filteredCount = getFilteredCount();

  return (
    <div className="Orders-Main-Container">
      <div className="Orders-Container">
        <Heading title="Orders" />
        <div className="Orders-Container-Left">
          <div className="Orders-Container-Left1">
            <div className="Orders-left-filter">
              <Filters />
              <h4>Count: {filteredCount}</h4>
            </div>
            <div className="Orders-Checkbox-Div">
              {ordersFilter.map((value, index) => (
                <div key={index} onClick={() => handleCheck(index)}>
                  <CheckBox
                    title={value.filter}
                    id={`checkbox-${index}`}
                    onChange={handleAllFilters}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="orders-container-right">
            {loading ? (
              <Triangle
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : error ? (
              <div>Error: {error.message}</div>
            ) : (
              <table className="orders-table">
                <thead>
                  <tr className="Table-Heading">
                    <td>ID</td>
                    <td>Customer</td>
                    <td>Date</td>
                    <td>Amount</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((value, index) => (
                      <tr key={index}>
                        <td className="c1">{value.id}</td>
                        <td className="c0">{value.customerName}</td>
                        <td className="c0 d">
                          {value.orderDate}
                          <span className="c1">{value.orderTime}</span>
                        </td>
                        <td className="c1">${value.amount}</td>
                        <td className="c0">{value.orderStatus}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
