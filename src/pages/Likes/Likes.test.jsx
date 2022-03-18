import '@testing-library/jest-dom';
import { render as rtlRender, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import store from '../../store';
import Likes from './index';

const mockStore = configureStore([]);
const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Likes page', () => {
  test('renders message before any tweet is liked', async () => {
    render(<Likes />);

    expect(screen.getByText('There are no liked tweets to display.')).toBeInTheDocument();
  });
});

describe('Likes page', () => {
  let _store;
  let component;
  const observers = [{
    id: `iamdevloper-${Date.now()}`,
    liked: false,
    account: 'iamdevloper',
    timestamp: Date.now(),
    content: 'Expert Tweet number 1',
  }];
  beforeEach(() => {
    _store = mockStore({
      tweets: {
        likedTweets: observers,
      },
    });

    component = renderer.create(
      <Provider store={_store}>
        <Likes />
      </Provider>,
    );
  });

  test('renders tweets liked list structure', async () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
