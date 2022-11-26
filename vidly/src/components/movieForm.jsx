import React from "react";

const MovieForm = ({ match, history }) => {
  console.log("history", history, "match", match);
  return (
    <div>
      <h1>Movie Form {match.params.id} </h1>
      <button
        className="btn btn-primary"
        // returns us to /movies page on button press
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
