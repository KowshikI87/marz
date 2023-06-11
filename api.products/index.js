const app = require("./app");
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Products Microservice is listening on port ${PORT}!`);
});