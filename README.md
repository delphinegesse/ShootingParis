Project for web and android development classes

[![Mines St Etienne](./logo.png)](https://www.mines-stetienne.fr/)

# ShootingParis 

In this project we want to be able to access a database handling a record of movies' shooting places in the city of Paris.
This is the web part of the project.

## Resources

We used the data that can be found on the following link:
[Opendata.paris/lieux-de-tournage-a-paris](https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information/?disjunctive.type_tournage&disjunctive.nom_tournage&disjunctive.nom_realisateur&disjunctive.nom_producteur&disjunctive.ardt_lieu)

> This dataset gathers data concerning the shooting location of movies in the city of Paris.
We have information concerning the date of the shooting, its location, and the movie concerned.

To access this dataset, we decided to use a json file, **'dataset.json'**, that you can find in the **'src'** repository.

## 📝 Goal

The goal of this part of the project is to create the web API allowing the android app to get access and use requests on the data.

In this part, we first tried to access and use requests on the data on localhost, using Postman.
Then, we achieved to create a web API using [Clever Cloud](https://www.clever-cloud.com/en/).
The link of the web API is the following: [API link](https://app-a420d8b0-91fa-4e22-aa10-d7b502ac5499.cleverapps.io/).

In this API, we implemented requests to :
- access a specific shooting location
- access all the shooting locations
- access the shooting location giving a specific movie
- access the shooting location giving a specific postal code
- add a shooting location
- delete a shooting location
- put a shooting location as favorite

You can test it using Postman, importing the file **'ShootingParis.postman_collection.json'** to get the resquest.
You just need to implement the environment by creating 2 variables:

- 'url', type: 'Default', initial value: 'http://app-a420d8b0-91fa-4e22-aa10-d7b502ac5499.cleverapps.io', current value: 'http://app-a420d8b0-91fa-4e22-aa10-d7b502ac5499.cleverapps.io'
- 'url2', type: 'Default', initial value: 'localhost:8080', current value: 'localhost:8080'

##  Note to teacher

We succeeded to implement a working API in localhost, and on the web, using [Clever Cloud](https://www.clever-cloud.com/en/).
You can check it following the process described at the end of the previous part.

We unfortunately failed when it comes to access the data from the android app.
