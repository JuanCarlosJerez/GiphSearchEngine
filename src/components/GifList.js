import React from 'react';
import GifItem from './GifItem';

//Show gif items as a list with key, gif, onGifSelect props
const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id}
                    gif={image}
                    onGifSelect={props.onGifSelect} />
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;
