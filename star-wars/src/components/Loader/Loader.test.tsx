import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Loader } from './Loader';

describe('Loader component', () => {
  it('renders Loader component', () => {
    render(<Loader />);
  });

  it('contains the correct class name', () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toHaveClass('loader');
  });
});
