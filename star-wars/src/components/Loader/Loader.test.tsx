import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from './Loader';

//Test that checks whether the Loader component renders without errors
describe('Loader component', () => {
  it('renders Loader component', () => {
    render(<Loader />);
  });
  //Test that checks if the root element of the component has the correct class name
  it('contains the correct class name', () => {
    const { container } = render(<Loader />);
    //Check if the first child of the container has a loader class
    expect(container.firstChild).toHaveClass('loader');
  });
});
