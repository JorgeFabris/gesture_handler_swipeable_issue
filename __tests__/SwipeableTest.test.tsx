import React from 'react';
import { render } from 'react-native-testing-library';
import SwipeableComponent from '../App';

describe('SwipeableComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<SwipeableComponent />);
    const componentText = getByText('Swipeable Component');
    expect(componentText).toBeDefined();
  });

  it('renders left actions correctly', () => {
    const { getByText } = render(<SwipeableComponent />);
    const leftActionText = getByText('Left Action');
    expect(leftActionText).toBeDefined();
  });
});
