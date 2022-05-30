class Element {
  constructor(element, attributes, content) {
    this.element = element;
    this.attributes = attributes;
    this.content = content;
  }

  toHTML() {
    const attributes = this.attributes.map(attr => attr.toHTML()).join(' ');
    return `<${this.element} ${attributes}>${this.content}</${this.element}>`;
  }
}

exports.Element = Element;
