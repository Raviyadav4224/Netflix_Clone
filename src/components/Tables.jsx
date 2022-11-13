import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Tables.scss";
const Tables = ({ allUsersInfo,handleDelete }) => {  
  return (
    <div className="adminOnly">
      <span>All Users Details</span>
      <table>
        <tr>
          <th>No</th>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {allUsersInfo &&
          allUsersInfo
            .filter((value) => {
              return value.role !== "admin";
            })
            .map((value, index) => {
                return (
                    <tr>
                    <td>{index+1}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>{value.role}</td>
                    <td onClick={() => handleDelete(value._id)}>
                      <MdDeleteForever />
                    </td>
                  </tr>
                )
            })}
      </table>
    </div>
  );
};

export default Tables;
