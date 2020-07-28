import React, { Component } from "react";
import Like from "./Common/Like";
import { getRecords } from "../services/fakeRecordService";

class Records extends Component {
  state = {
    records: getRecords(),
  };

  handleDelete = (record) => {
    const records = this.state.records.filter((r) => r._id !== record._id);
    this.setState({ records: records });
  };

  render() {
    const { length: count } = this.state.records;

    if (count === 0) return <p>There are no records in the database. </p>;

    return (
      <React.Fragment>
        <p>Showing {count} records in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title </th>
              <th>Genre</th>
              <th>Stock</th>
              <th>RIAA Certification</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.records.map((record) => (
              <tr key={record._id}>
                <td>{record.title}</td>
                <td>{record.genre.name}</td>
                <td>{record.numberInStock}</td>
                <td>{record.dailyRentalRate}</td>
                <td>
                  <Like liked={record.liked} />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(record)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Records;
