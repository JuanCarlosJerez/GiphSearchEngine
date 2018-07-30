import React from 'react';

class SearchBar extends React.Component {
  constructor() {
      super();
      this.state = { term: '' }
  }

  //Search bar maintains constant rendering
  onSearch(term) {
      this.setState({term});
      this.props.onTermChange(term);
  }

  render() {
    return (
        <div className="search">
          <input placeholder="Search Gifs" onChange={event => this.onSearch(event.target.value)} />
        </div>
    );
  }
}

export default SearchBar;
