class Color {
  constructor(red, green, blue, opacity = 1) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.opacity = opacity;
  }

  toRGB() {
    return `rgb(${this.red}, ${this.green}, ${this.blue}, ${this.opacity})`;
  }

  withRandomOpacity() {
    const randomOpacity = Math.random();
    return `rgb(${this.red}, ${this.green}, ${this.blue}, ${randomOpacity})`;
  }
}

exports.Color = Color;
