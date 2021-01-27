import SignIn from './SignIn';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);

describe("connected reatc-redux", () => {
    let store, component;
    beforeEach(() => {
        store = mockStore({
    });
    store.dispatch = jest.fn();
    component = renderer.create(
        <Provider store={store}>
          <SignIn />
        </Provider>
      );
  });
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
 
   
})