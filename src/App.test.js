import { cleanup, fireEvent, getByText, render, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

test('renders Count', () => {
  render(<App />);
  const linkElement = screen.getByText(/Count/i);
  expect(linkElement).toBeInTheDocument();
});

it('should have add and reduce buttons', () => {
      const {getByTestId,getAllByTestId} =  render(<App/>)
      const [add, reduce] = getAllByTestId('button')

      expect(add).toHaveTextContent('ADD')
      expect(reduce).toHaveTextContent('REDUCE')
});

it('check default value of count', () => {
  const {getByTestId, getAllByTestId} = render(<App/>)
  const counter = getByTestId('counter')

  expect(counter).toHaveTextContent(0)
});

it('onclick of add count should increase by one and reduce decrement by one', () => {
  const {getByTestId,getAllByTestId} = render(<App/>)
  const [add, reduce] = getAllByTestId('button')
  const counter = getByTestId('counter')

  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(reduce)

  expect(counter).toHaveTextContent('3')

  fireEvent.click(reduce)
  fireEvent.click(reduce)
  fireEvent.click(reduce)

  expect(counter).toHaveTextContent(0)

  // const x = getByText('counter')

  // expect(x).toHaveTextContent(0)


});