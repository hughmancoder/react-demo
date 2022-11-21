import React, { Component } from "react";

const ListGroup = (props) => {
  const { genres, valueProperty, textProperty} = props;
  console.log("genres", genres);
  console.log("value", valueProperty, textProperty);

  return (
    <ul class="list-group">
      {genres.map((genre) => (
        <li key={genre[valueProperty]} class="list-group-item">
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id',
}

export default ListGroup;
