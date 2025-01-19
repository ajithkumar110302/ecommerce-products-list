import { products } from './products';

const options = ['All', ...new Set(products.map((product) => product.category)),];

export const categories = options.map(option => ({
  label: option,
  value: option,
}));

export const sortingOrder = [
  {
    label: 'Default',
    value: 'default',
  },
  {
    label: 'Price: Low to High',
    value: 'price-asc',
  },
  {
    label: 'Price: High to Low',
    value: 'price-desc',
  }
];
