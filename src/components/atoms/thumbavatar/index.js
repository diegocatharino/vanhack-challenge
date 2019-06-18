import React from "react";
// Import Style
import { ThumbAvatar } from './styled';

const Img = ( props ) => (
  	<ThumbAvatar {...props}>
  		<img src={props.src} />
  	</ThumbAvatar>
);

export default(Img);