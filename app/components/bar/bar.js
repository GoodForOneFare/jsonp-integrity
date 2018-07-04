export default class Bar {
  constructor(props) {
    this.prop1 = props.prop1;
    this.prop2 = props.prop2 || 'lol';
  }

  greet(name) {
    return `hello ${name}`;
  }
}
