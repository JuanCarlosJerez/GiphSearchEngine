import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './GifList';
import SearchBar from './SearchBar';
import GifModal from './GifModal';
import request from 'superagent';
import '../styles/app.css';
import Button from './Button';


export default class App extends React.Component {
  constructor() {
    super();
  this.state = {
    gifs: [],
    selectedGif: null,
    modalIsOpen: false
  }
}

//When gif is clicked, set modal states when open and closed
  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

//Interpolate search term into API request
handleTermChange = (search) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${search.replace(/\s/g, '+')}&api_key=hIamE18SLhpMpAYdM719pTkSzju2WRu4`;

  request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
  });
};


//Render Search Bar, GifList, and GifModal
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <Button />
        <GifList  gifs={this.state.gifs}
                  onGifSelect={selectedGif => this.openModal(selectedGif) } />
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selectedGif={this.state.selectedGif}
                  onRequestClose={ () => this.closeModal() } />
      </div>
    );
  }
}
