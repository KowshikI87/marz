/* eslint-disable max-lines-per-function */
const request = require("supertest");
const app = require("../app");
const dbFunctions = require("../lib/dbFunctions");

jest.mock("../lib/dbFunctions");

describe("Test GET /products route", () => {
  test("Get an array of active products", async() => {
    const mockProducts = [
      { ProductID: 1, ProductName: 'Hat', ProductPhotoURL: 't', ProductStatus: 'Active' },
      { ProductID: 2, ProductName: 'Shoes', ProductPhotoURL: 't', ProductStatus: 'Inactive' },
      { ProductID: 3, ProductName: 'Pants', ProductPhotoURL: 't', ProductStatus: 'Active' },
    ];

    dbFunctions.getProducts.mockResolvedValue(mockProducts);

    const response = await request(app).get("/products");
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe("application/json");
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body).toHaveLength(2);

    response.body.forEach(product => {
      expect(product).toHaveProperty("ProductID");
      expect(product).toHaveProperty("ProductName");
      expect(product).toHaveProperty("ProductPhotoURL");
      expect(product.ProductStatus).toBe("Active");
    });
  });

  test("Handle Errors", async() => {
    dbFunctions.getProducts.mockRejectedValue(new Error('Database query failed'));

    const response = await request(app).get("/products");
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe("Database query failed");
  });
});

