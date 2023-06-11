import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductList from './ProductList';

export default {
  title: "Product List",
  component: ProductList,
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => <ProductList {...args} />;

const getArgs = (photoUrlsExist: boolean) => {
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

  if (!photoUrlsExist) {
    productList.forEach(product => product.ProductPhotoURL = "");
  }

  return {products: productList}
}

export const ValidPhotoURL = Template.bind({});
ValidPhotoURL.args = getArgs(true);

export const InvalidPhotoURL = Template.bind({});
InvalidPhotoURL.args = getArgs(false);