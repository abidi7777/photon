import '@testing-library/jest-dom';

import { render } from '@testing-library/svelte';

import App from './App.svelte';

test('shows proper heading when rendered', () => {
  const { getByText } = render(App);

  expect(getByText('Hello')).toBeInTheDocument();
});
