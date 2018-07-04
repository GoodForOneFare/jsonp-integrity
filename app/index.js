import {Bar} from './components';

document.addEventListener('touchend', async () => {
  await import(/* webpackChunkName: 'foo' */ 'lodash').then((lodash) => {
    console.log(!!lodash);
  });

  await import(/* webpackChunkName: 'qux' */ './qux').then((qux) => {
    console.log(!!qux);
  });
});

const bar = new Bar({prop1: 'hello', prop2: 'there'});

console.log(bar.greet('webpack'), React);
