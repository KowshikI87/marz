import { MemoryRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductsPage from './ProductsPage';

export default {
  title: "Products Page",
  component: ProductsPage,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>

const Template: ComponentStory<typeof ProductsPage> = (args) => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
  mockData: [
      {
          url: "/api/products/",
          method: 'GET',
          status: 200,
          response: [
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
          ],
      }
  ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
  mockData: [
      {
          url: "/api/products/",
          method: 'GET',
          status: 200,
          response: []
      }
  ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
    mockData: [
        {
            url: "/api/products/",
            method: 'GET',
            status: 500,
            response: [],
        }
    ],
};




