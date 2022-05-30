class Attribute {
  constructor(attribute, value) {
    this.attribute = attribute;
    this.value = value;
  }

  toHTML() {
    return `${this.attribute}="${this.value}"`;
  }
}

exports.Attribute = Attribute;
