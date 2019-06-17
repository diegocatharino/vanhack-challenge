import React from "react";
import myImg from '../../../static/images/thumbavatar-default.png';

class ThumbAvatar extends React.Component {
  render() {
    return (
		<img src={myImg} />
    );
  }
}

export default(ThumbAvatar);
