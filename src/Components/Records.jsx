import React, { Component } from "react";
import Like from "../Common/Like";
import Pagination from "../Common/Pagination";
import { getRecords } from "../services/fakeRecordService";

class Records extends Component {
  state = {
    records: getRecords(),
    pageSize: 4,
  };

  handleDelete = (record) => {
    const records = this.state.records.filter((r) => r._id !== record._id);
    this.setState({ records: records });
  };

  handleLike = (record) => {
    const records = [...this.state.records];
    const index = records.indexOf(record);
    records[index] = { ...records[index] };
    records[index].liked = !records[index].liked;
    this.setState({ records });
    // console.log("Like Clicked", record);
  };

  handlePageChange = (page) => {
    console.log(page);
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
                  <Like
                    liked={record.liked}
                    onClick={() => this.handleLike(record)}
                  />
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
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChenage={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Records;
