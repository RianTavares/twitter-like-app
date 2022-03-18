import '@testing-library/jest-dom';
import { render as rtlRender, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import store from '../../store';
import Home from './index';

const mockStore = configureStore([]);
const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Home page', () => {
  test('renders Loading component before any tweet is sent', () => {
    render(<Home />);
    expect(screen.getByText('...loading')).toBeInTheDocument();
  });
});

describe('Home page', () => {
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
        allTweets: observers,
      },
    });

    component = renderer.create(
      <Provider store={_store}>
        <Home />
      </Provider>,
    );
  });

  test('renders tweets list structure', async () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
