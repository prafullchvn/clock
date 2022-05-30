const fs = require('fs');

const { Line } = require('./Line.js');

class Clock {
  constructor() {
    this.secondHand = new Line(300, { x: 400, y: 500 });
    this.minuteHand = new Line(250, { x: 400, y: 500 });
    this.hourHand = new Line(200, { x: 400, y: 500 });

    this.secondHand.addStyle('border', '1px solid red');
    this.minuteHand.addStyle('border', '1px solid blue');
    this.hourHand.addStyle('border', '1px solid black');
  }

  getSecondsAngle(date) {
    const seconds = date.getSeconds();
    return (seconds * 6) - 90;
  }

  getMinutesAngle(date) {
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return (minutes * 6) + (seconds / 60) * 6 - 90;
  }

  getHoursAngle(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours * 30) + (minutes / 60) * 30 - 90;
  }

  rotateClock() {
    const date = new Date();

    this.secondHand.rotate(this.getSecondsAngle(date));
    this.minuteHand.rotate(this.getMinutesAngle(date));
    this.hourHand.rotate(this.getHoursAngle(date));
  }

  toHTML() {
    return `${this.secondHand.toHTML()}
      ${this.minuteHand.toHTML()}
      ${this.hourHand.toHTML()}`;
  }
}

const clock = new Clock();

setInterval(() => {
  clock.rotateClock();
  clock.rotateClock();
  const clockHtml = clock.toHTML();

  const templatePath = 'templates/refreshingTemplate.html';
  const template = fs.readFileSync(templatePath, 'utf8');
  const body = template.replace('__BODY__', clockHtml);

  fs.writeFileSync('htmlPages/clock.html', body, 'utf8');
}, 1000);
