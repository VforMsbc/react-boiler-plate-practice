import { render } from '@testing-library/react';
import { MButton } from './Button';
import { ButtonProps } from './Button.types';

describe('Button component', () => {
  let props: ButtonProps;
  beforeEach(() => {
    props = {
      label: 'Place Order',
    };
  });

  const renderComponent = () => render(<MButton {...props} />);

  it('should render correctly', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
