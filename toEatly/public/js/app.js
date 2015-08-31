// on page load
$(function(){
  // get and render the food
  pageLoad();
});

function pageLoad() {
  // load foods
  getFoods();
  // set event listeners
  $("#new-food-form").on("submit", function(e){
    // prevent form submission
    e.preventDefault();
    // post to food#create
    $.post("/foods", $(this).serialize())
      .done(function(res){
        // append new food to the page
        getFoods();
        $("#new-food-form")[0].reset();
      });
    // also send data as AJAX post request

    // $.post()
  });
  // delete button event listener
  $("button").on("click", function(){
    deleteFood(this);
  })
}

function getFoods() {
  $.get("/foods", function(res){ 
    // parse the response
    var foods = JSON.parse(res);
    // clear all event listeners
    clearEventListeners();
    // sets event listeners
    renderFoods(foods);
  });
}

function renderFoods(foods) {
  // order descending
  var foods = foods.reverse();
  // render a template
  var template = _.template($("#foods-template").html());
  // input foods into template and append to parent
  var foodItems = foods.map(function(food) {
    return template(food);
  });
  $("#food-ul").html("");
  $("#food-ul").append(foodItems);
}

function deleteFood(context) {
  var id = $(context).data("id");
  // format a delete request
  // ajax object
  // url: /foods + id
  // .done which called Food.all()
}

function clearEventListeners() {

}


















