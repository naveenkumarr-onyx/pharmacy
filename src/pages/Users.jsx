import React, { useEffect, useState } from "react";
import Heading from "../typography/Heading";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
const Users = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="users-main-container">
      <div className="users-sub-container">
        <Heading title="Users" />
        <div className="user-input-div ">
          <input type="text" placeholder="Search by name" />
          <button>Reset</button>
        </div>
      </div>
      <div className="users-table-container">
        {!data ? (
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          ""
        )}
        {data && (
          <table className="users-table">
            <thead>
              <tr className="Table-Heading">
                <th>ID</th>
                <th>User Avatar</th>
                <th>Full Name</th>
                <th>DoB</th>
                <th>Gender</th>
                <th>Current Location</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => {
                return (
                  <tr key={index}>
                    <td className="c0">{value.id}</td>
                    <td>
                      <img src={value.profilePic} alt="" />
                    </td>
                    <td className="c1">{value.fullName}</td>
                    <td className="c0">{value.dob}</td>
                    <td className="c1">{value.gender}</td>
                    <td className="c1">
                      {value.currentCity},{value.currentCountry}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Users;
