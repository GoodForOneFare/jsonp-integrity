export default class Foo {

  constructor(props) {
    this.prop1 = props.prop1;
    this.prop2 = props.prop2 || 'i am foo';
  }

  greet(name) {
    return `hello ${name}`;
  }
}
