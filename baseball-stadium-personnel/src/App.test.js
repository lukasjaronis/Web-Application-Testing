import React from 'react';
import { render } from '@testing-library/react';
import App, {addStrike} from './App';

test('App renders without crashing', () => {
const component = render(<App />);
console.log(component);
})

test('Expect function to add + 1', () => {
  let actual;
  let expected;
  expect(actual).toBe(expected);
  expect(addStrike(0)).toBe(1)
})