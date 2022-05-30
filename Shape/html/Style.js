class Style {
  constructor() {
    this.attributes = {};
  }

  add(attribute, value) {
    this.attributes[attribute] = value;
  }

  toHTML() {
    return Object.entries(this.attributes).map(([attribute, value]) => {
      return `${attribute}: ${value}`;
    }).join(';');
  }
}

exports.Style = Style;
