import {it,expect,describe,vi} from 'vitest';
import {render,screen} from '@testing-library/react'

import {Product} from './Product';
 //vi, to create mock(fake function)
describe('Product component',()=>{
 it('displays product details correctly',()=>{
    const product={
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-8-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 8 Pack",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 1899,
    keywords: ["kitchen", "kitchen towels", "tissues"]
  }
  const loadCart=vi.fn();
    render(<Product product={product} loadCart={loadCart} />)
 
    expect(screen.getByText('2-Ply Kitchen Paper Towels - 8 Pack')
    ).toBeInTheDocument();
    expect(
    screen.getByText('$18.99')
  ).toBeInTheDocument();
   expect(
    screen.getByTestId('product-image')
   ).toHaveAttribute('src','images/products/kitchen-paper-towels-8-pack.jpg')
   expect(screen.getByTestId('product-rating-stars-image')
  ).toHaveAttribute('src','images/ratings/rating-45.png')
  expect(
    screen.getByText('87')
  ).toBeInTheDocument();
 })
});