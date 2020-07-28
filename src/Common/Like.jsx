import React, { Component } from "react";

//stateless functional component
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

// class Like extends Component {
//   render() {

//   }
// }

export default Like;
