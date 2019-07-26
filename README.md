Ionic 4, GraphQL, Apollo, Wordpress or Node.js API
==================================================
A simple project to create an Ionic 4 application, using Apollo, to communitate with your Wordpress site through GraphQL (or custum GraphQL API)

Project installation
--------------------

1) Install dependencies `npm install`
2) Run your application `ionic serve`

Steps and usefull links to create this project (tutorial)
---------------------------------------------------------

Start an ionic app
`ionic start myApp sidemenu`
More information here:
https://ionicframework.com/getting-started#cli


Install apollo
```
npm install --save apollo-angular \
  apollo-angular-link-http \
  apollo-link \
  apollo-client \
  apollo-cache-inmemory \
  graphql-tag \
  graphql
```
More information here:
https://www.apollographql.com/docs/angular/basics/setup/


Use GraphQL API for WordPress
https://github.com/wp-graphql/wp-graphql

or

Build a Complete App with GraphQL, Node.js, MongoDB and React.js (Playlist tutorial )
https://www.youtube.com/watch?v=7giZGFDGnkc&list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_