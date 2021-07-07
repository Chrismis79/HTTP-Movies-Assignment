import React from 'react';

class AddMovie extends React.Component {
    state={
        movieDesc:{
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    }
    };

    handleChange = e => {
        this.setState({
            movieDesc: {
                ...this.state.movieDesc,
                [e.target.name]: e.target.value
            }
        });
    }

    postMessage = e => {
        e.preventDefault();
        this.props.addMovie(this.state.movieDesc);
        this.setState({
            title: '',
            director: '',
            metascore: '',
            stars: []
        });
    };

    render() {
        return (
            <div className="add-form">
            <h2>Add a new movie</h2>
            <form onSubmit={this.postMessage}>
              <input
                type="text"
                name="title"
                placeholder="Movie TItle"
                onChange={this.handleChange}
                value={this.state.movieDesc.title}
              />
              <input
                type="text"
                name="director"
                placeholder="Director"
                onChange={this.handleChange}
                value={this.state.movieDesc.director}
              />
              <input
                type="text"
                name="stars"
                placeholder="Stars in the movie"
                onChange={this.handleChange}
                value={this.state.movieDesc.stars}
              />
              {/* {this.props.postError ? (
                <ErrorMessage message={this.props.postError} />
              ) : null}
              {this.props.postSuccessMessage ? (
                <SuccessMessage message={this.props.postSuccessMessage} />
              ) : null} */}
              <button className="add-btn" type="submit">
                ADD MOVIE
              </button>
            </form>
          </div>
        )
    }

}

export default AddMovie;