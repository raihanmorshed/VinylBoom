import React, { Component } from "react";
import Like from "../Common/Like";
import ListGroup from "../Common/ListGroup";
import Pagination from "../Common/Pagination";
import { getRecords } from "../services/fakeRecordService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../Utils/paginate";

class Records extends Component {
  state = {
    records: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];

    this.setState({ records: getRecords(), genres: genres });
  }

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
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
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.records;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      records: allRecords,
    } = this.state;

    if (count === 0) return <p>There are no records in the database. </p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allRecords.filter((r) => r.genre._id === selectedGenre._id)
        : allRecords;

    const records = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Found {filtered.length} records in store.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title </th>
                <th>Genre</th>
                <th>Inventory</th>
                <th>RIAA Certification</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
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
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChenage={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Records;
