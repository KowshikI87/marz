import { render, screen } from '@testing-library/react'
import ProductList from './ProductList';
import { REPL_MODE_STRICT } from 'repl';

describe('ProductList', () => {
  it('renderProductList', async () => {
    let productList = [
      {
        ProductID: 1,
        ProductName: "Coca Cola",
        ProductPhotoURL: "https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/products/coca-cola-original/desktop/coca-cola-original-12oz.jpg?wid=325"
      },
      {
        ProductID: 2,
        ProductName: "Ice Cream",
        ProductPhotoURL: "https://www.allrecipes.com/thmb/P59TgUCXtQbv69dHRlZduE38xs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/453291-five-ingredient-ice-cream-Alberta-Rose-4x3-1-4c9ec10ac4ab4e828615e81aa608dd6b.jpg"
      },
      {
        ProductID: 3,
        ProductName: "Chips",
        ProductPhotoURL: "https://foxeslovelemons.com/wp-content/uploads/2021/08/Spicy-Potato-Chips-5.jpg"
      },
    ]

    render(
      <ProductList products={productList} />
    )

    const tablElement = screen.getByRole('table');
    expect(tablElement).toBeInTheDocument();

    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(productList.length + 1);

    productList.forEach(product => {
      const productId = screen.getByText(product.ProductID);
      expect(productId).toBeInTheDocument();
    })

    productList.forEach(product => {
      const productName = screen.getByText(product.ProductName);
      expect(productName).toBeInTheDocument();
    })

    productList.forEach(product => {
      const productImage = screen.getByAltText(product.ProductName);
      expect(productImage).toBeInTheDocument();
      expect(productImage).toHaveAttribute('src', product.ProductPhotoURL);
    })
  })
})