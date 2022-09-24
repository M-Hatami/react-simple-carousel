import React from "react";
import { Carousel } from "../presentationals/Carousel";

const imagePaths = [
  "https://picsum.photos/id/1018/300/200",
  "https://picsum.photos/id/1019/300/200",
  "https://picsum.photos/id/1002/300/200",
  "https://picsum.photos/id/1003/300/200",
];

const imageAlt = [
  "دشت در پس کوه و دره",
  "دریای طوفانی و خوف‌ناک ",
  "تصویر ماهواره‌ای از زیبایی خلقت خدا",
  "بچه آهوی آزاد یا ضامن آهو",
];

export default class CarouselContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % imagePaths.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = imagePaths[this.state.currentGP];
    let alt = imageAlt[this.state.currentGP];
    return <Carousel src={src} alt={alt} />;
  }
}
