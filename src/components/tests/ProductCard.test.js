// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const ratingValue = screen.getByTestId(ratingValue);
//   expect(rating).toBeInTheDocument();
// });

import {render, screen, cleanup} from '@testing-library/react';
import ProductCard from '../ProductCard';

test('test', () => {
   render(<ProductCard/>);
   const link = screen.getByTestId('link');
   expect(link).toBeInTheDocument();
});
