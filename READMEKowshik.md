This ToDO was found in the ProductsPage.tsx

  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */


  Since the README.md file did not say anything regarding this TODO, I ignored it



  Removed ProducctStatus from the front end because we are only displaying the active product and it seems that
  there is no need to keep inactive product. So there is no point in keeping ProductStatus since all products sent
  by the backend will be active


  //changed Product --> ProductProps in interface. Is that okay?


  Router folder --> even though it is a product microservice, it could provide clearly categorized routes (one for providing product information, one for suplier informatoin, one for showing categories, etc.) --> work on this argument for a bit more but okay in my head

  Explain my workflow: Component --> Stories --> Testing --> Repeat but with better styling
  Then backend: Interact with DB --> Basic DB Connection --> Skeleton backend --> Test --> Refactor --> Test again

  Typically, for the backend server, we would have multiple routes file. Each route would contain a list of similar routes. These routes file would then be imported into the app.js file. But in this case, it seems that all the routes our api.products server will serve will be similar and be in the same category. So I decided not to use a router folder and further complicate the app.


helpful to remove all images: docker rmi $(docker image ls -a -q)

and then run docker compose up -d

for changing the product URL, I changed it right when inserting the data instead of using UPDATE statement later. This of course would not be doable in a production system.

So maybe mention that I would look at cross browser display compatiblity issue later