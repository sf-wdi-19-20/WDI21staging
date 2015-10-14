#Angular $HTTP & Factories

| Learning Objectives |
| :--- |
| Fetch data with Angular's `$http` object from an API |
| Create an index & show page for the resource with `ngRoute` |
| Create & destroy resources with `$http` |
| Refactor code with a factory & `ngResource` |

##$http 101

[$http](https://docs.angularjs.org/api/ng/service/$http) is a core Angular service that facilitates communication with remote HTTP servers via the browser's XMLHttpRequest object or via JSONP. It is very similar to jQuery's $.ajax function.

###For example

```js
// app.js
var app = angular.module('exampleApp', []);
app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  // run on page load
  $http.get('/wines').then(function(response) {
    //pass response to view
    $scope.wines = response.data;
  });
  // allow the view to execute the function later
  $scope.createWine = function() {
    $http.post('/wines').then(function(response) {
        // do something on success
    });
  };
}]);
```

Read more about the available shortcut methods in the [$http docs](https://docs.angularjs.org/api/ng/service/$http/#shortcut-methods).

##Challenges

###Setup

Fork & clone this [repo](#) to get started.

We will be using a RESTful `wine` API located at `http://daretodiscover.herokuapp.com/wines`.

In the root of the repo, run the command `python -m SimpleHTTPServer` to serve the folder over http. This is necessary for making AJAX requests without running into CORS issues.

The repo contains branches as solutions for each of the below challenges.

###Challenge: Show page

Let's combine our knowledge of `ngRoute` and `$http` to create a show page for each wine.

Hints:
* Use `ngRoute` and `ng-view` to set up multiple views in your Angular app.
* Use `$routeParams` to figure out which wine to display.
* Your view for a single wine will have a different controller than your view that displays all wines.


