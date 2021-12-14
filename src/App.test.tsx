import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GitHub Issues Search title', () => {
  render(<App />);

  expect(screen.getByText('GitHub Issues Search')).toBeInTheDocument();
});

// Testes
// - Preencher campo organization
// - Preencher campo repository
// - Clique botao de busca
