import React from "react";

export class Carousel extends React.Component {
  render() {
    let src = this.props.src;
    let alt = this.props.alt;
    return (
      <div>
        <h1>تصاویر زیبا از طبیعت</h1>
        <img src={src} alt={alt} />
      </div>
    );
  }
}
