/* eslint-disable max-statements */
const { Style } = require('./html/Style.js');
const { Element } = require('./html/Element.js');
const { Attribute } = require('./html/Attribute.js');

class Line {
  constructor(length, point) {
    this.length = length;
    this.point = point;
    this.rotation = 0;
    this.style = new Style();
  }

  toHTML() {
    this.style.add('height', '1px');
    this.style.add('width', `${this.length}px`);
    this.style.add('box-sizing', 'border-box');
    this.style.add('position', 'absolute');
    this.style.add('left', `${this.point.x}px`);
    this.style.add('top', `${this.point.y}px`);
    this.style.add('transform-origin', 'left');
    this.style.add('transform', `rotate(${this.rotation}deg)`);

    const styleAttr = new Attribute('style', this.style.toHTML());
    const line = new Element('div', [styleAttr], '');

    return line.toHTML();
  }

  addStyle(property, value) {
    this.style.add(property, value);
  }

  rotate(angle) {
    this.rotation = angle;
  }
}

exports.Line = Line;
