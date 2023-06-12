# Setup

There is no need to do anything extra for running the `api.products` service. You only need to run the docker compose file using this command below:

```Bash
docker compose up -d
```

I have excluded the commands required for running `api.products` without the `docker-compose.yaml` file. This is because running the service without using `docker-compose.yaml` file is unnecessary. And also, `api.products` refers to the database using its service name: `mariadb`. Thus, the `api.products` service is not fully functional when used without the `docker-compose.yaml` file

If you are running submissions from multiple people on the same computer, it can be helpful to stop all docker containers, remove unused containers and network and remove all images before running the docker compose command. The commands below achieve all three tasks

```Bash
# stop all containers
docker stop $(docker ps -aq)

#remove all unused containers and network
docker system prune

#remove all existing images
docker rmi $(docker image ls -a -q)
```

# Testing

Testing the webapp is same as before

You can test `api.products` by going into the `api.products` folder and then running the command below

```Bash
npm test
```

# Design Decisions and Implementation Decision

## ProductList Component

From reading the `readme.md` file, I felt that using a table was a natural choice to display information about a list of products.

## Result Returned by `api.products`

Since the `readme.md` file instructed only to display the list of active products, it made more sense to me that `api.products` would only return the list of active products so the front end does not have to worry about filtering the list.

## Folder Organization of `api.products`

Typically, for the backend server, we would have multiple route files. Each route would contain a list of similar routes. These route files would then be imported into the `app.js` file. But in this case, it seems that all the routes in the `api.products` server will be similar and thus be in the same category. So I decided not to use a router folder and further complicate the app.

## Changing the data.sql File

For changing the product URL, I changed the `INSERT` statement to use working photo URLs instead of keeping the `INSERT` statement as is and then later using the `UPDATE` statement. This, of course, would not be doable in a production system.

## Misc.

This TODO was found in the `ProductsPage.tsx` file
```javascript
  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */
```
Since the `README.md` file did not say anything regarding this TODO, I ignored it


# Future Work

I would have liked to do tests for the ProductsPage if I had a bit more time.

I would have also looked more into cross-browser testing.

# Workflow

In addition to completing the assigned tasks, I completed extra tasks such as writing stories, tests, etc. I did that because I wanted to follow the existing standards this app follows, and completing extra tasks provided helped me to test my work frequently.

My workflow intended to build things in increments and test to make sure everything is working before proceeding further. You can find my workflow by examining my commit history of the repo, but in general, it was as follows:

Step 1: Finish `ProductList` Component
- Finish a barebone `ProductList` component
- Write Stories for the `ProductList` component
- Write tests for the `ProductList` component
- Style the `ProductList` component and then see if the stories are still behaving as expected. Rerun the tests.

Step 2: Finish `api.products` service
- Create a barebone backend express server that interacts with the database
- Finish up the final version of the backend server and see if it can still interact with the database
- Write tests for the backend
- Add the backend server to the `docker-compose.yaml` file and see if I can send a request to the backend server using POSTMAN

Step 3: Configure `nginx` service
- Now configure the `nginx.conf` file to include the `api.products` service
- See if I can still send requests to `api.products` service from POSTMAN

Step 4: Finish `ProductsPage` component
- Write a basic version of the `ProductsPage` component and make sure it can display the products list
- Add more logic to `ProductsPage` (using different loading states)
- Write stories for `ProductsPage`

Shut everything down and do one final test to see if everything is working.