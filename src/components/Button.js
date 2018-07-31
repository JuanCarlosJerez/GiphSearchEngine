import React from 'react';
import Axios from '../../node_modules/axios';

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            imageURL: ""
        }
        this.getRandom = this.getRandom.bind(this);
    }

 //Random Button Fetching API random
async getRandom() {
    const {data} = await Axios.get`http://api.giphy.com/v1/gifs/random?q=/&api_key=hIamE18SLhpMpAYdM719pTkSzju2WRu4`;
    this.setState({imageURL: data.data.image_url})
};
  

  render() {
    return (
        <div className="randomGif">
            <h3>THERE'S A GIF FOR THAT</h3>
            <canvas id="myCanvas" width="100" height="1"></canvas>
            <div>
            <img className="ranGif" src={this.state.imageURL} />
            </div>
            <button className="random" onClick={this.getRandom}>SURPRISE ME!</button>
        </div>
    );
  }
};

export default Button;
