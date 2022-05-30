/* eslint-disable max-statements */
const fs = require('fs');

const { Attribute, Element, Style } = require('./HTML.js');

class Circle {
  constructor(radius, point, centerCoordinateUnit = 'px') {
    this.radius = radius;
    this.center = point;
    this.style = new Style();
    this.centerPointsUnit = centerCoordinateUnit;
  }

  addStyle(style, value) {
    this.style.add(style, value);
  }

  toHTML(nestedElement = '') {
    const diameter = this.radius * 2;
    this.style.add('position', 'absolute');
    this.style.add('width', diameter + 'px');
    this.style.add('height', diameter + 'px');
    this.style.add('border-radius', '50%');
    this.style.add('left', this.center.x + this.centerPointsUnit);
    this.style.add('top', this.center.y + this.centerPointsUnit);
    this.style.add('transform', 'translate(-50%, -50%)');

    const style = new Attribute('style', this.style.toHTML());
    const div = new Element('div', [style], nestedElement);

    return div.toHTML();
  }

  writeToFile(file) {
    fs.writeFileSync(file, this.toHTML(), 'utf8');
  }

  getRadius() {
    return this.radius;
  }
}

exports.Circle = Circle;
