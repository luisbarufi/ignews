import { render, screen, waitFor } from '@testing-library/react';
import { Async } from '.';

test('renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello world')).toBeInTheDocument();
  // expect(await screen.findByText('Button')).toBeInTheDocument();

  // await waitFor(() => {
  //   return expect(screen.getByText('Button')).toBeInTheDocument()
  // });

  await waitFor(() => {
    return expect(screen.queryByText('Button')).toBeInTheDocument()
  });
});
