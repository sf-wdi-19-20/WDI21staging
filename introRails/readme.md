## Intro to Rails

###Learning Objetives
By the end of this lecture you should be able to...

- Articulate the Rails philosophy & the MVC pattern
- Start a rails project with no database and create routes to static templates.
- Distinguish between Express and Rails

##Philosophy(5m)

Rails values...

* DRYness
* Separation of Concerns & Modularity
* Abstraction & encapsulation
* Convention over configuration

### Separation of Concerns

In writing a large application it is important to establish something known as **Separation of Concerns**, *writing modular code that focuses on one aspect within the application.* The benefit of this is similar to idea of **compartmentalization** with respect to a production line, which allows for *more rapid development* by being able to **divide and conquer** the construction of a product. 

##MVC (15m)

Rails uses an __MVC__ architecture

<b>M</b>odel - The model refers to the data objects that we use. It's the object oriented approach to design. The data in our database will be the most common type of object that we'll put there.

<b>V</b>iew - The view is the Presentation layer. It's what the user sees and interacts with, essentially the web pages. The HTML, the CSS and the JavaScript. The controller processes and responds to user events, such as clicking on links and submitting forms. 

<b>C</b>ontroller - The controller will make decisions based on the request and then control what happens in response. It controls the interaction with our models and with our views. 

![MVC Diagram](http://elibildner.files.wordpress.com/2012/06/screen-shot-2012-06-05-at-2-12-18-am.png)

##Railstaurant Metaphor (10m)
The **client** is a customer eating in the restaurant, **rails** is the kitchen, the **request** is the order made, the **router** is the waiter, the **controller** is a chef, the **model** is a recipe, the **database** is the giant walk-in refrigerator with ingredients, the **view** is plating the dish to look pretty, the **response** with a file is a waiter finally serving the dish to the customer.

##Setup (10m)

### How to create a rails project

`rails new NAME_OF_APP`

But then it says, bundle install at the end, so, it's created all the files, and now it's telling bundler to install all of the gems that might be missing.

##Gems
Gems are like NPMs. You have to put any gem you want to use in your Gemfile. You have to run bundle anytime you change your Gemfile. Your rails server needs to be restarted after any changes to your Gemfile.

### Bundler

Bundler is a separate gem from Rails, and can be used outside of
Rails, but Rails is going to depend on it to manage the RubyGems that the application needs. The first thing that you need to know is that there are two files that matter to bundler: `Gemfile` and `Gemfile.lock`. Gemfile contains configuration information about what
gems are part of our project, it is similar to the `package.json` file in Node.

Bundler looks at the `Gemfile` loading all the included gems in addition to each's dependencies. It then generates a manifest file that is stored in Gemfile.lock. **Never** edit Gemfile.lock!

So how do you tell Bundler to take your Gemfile and turn it into Gemfile.lock? Run: `bundle install`. When we create a rails application it will run this command for us unless we specify otherwise.

## Running Rails (5m)

- Create a new rails app with `rails new railsFun --skip-activerecord`
    - the last flag tells the application not use activerecord
    - activerecord is our ORM that manages our Models and our database, we'll learn more about it this afternoon
- `cd` into your `railsFun` folder and run
- run `rails server` or just `rails s` and see what happens
- This will start a server on `localhost:3000` head there and see what it says...

## Rails File Structure (10m)

![Rails File Structure](http://i.imgur.com/whOL4DQ.png)

## Routing (10m)

- In routes.rb we write logic to map our paths to controllers we will make.
- Let's say when a user sends a `GET` request to the root route, `/`, we want the `welcome` controller's `index` method to run. In order to do that we could write:

route.rb

```ruby
get "/" => "welcome#index"`
```
Try saving the file and heading to your root route. What error do you get?

**Pro tip:** run `rake route` in your rails app to see a list of all the application's routes

## Controllers (10m)

If you did the last step correctly, you should see an error message: `*uninitialized constant WelcomeController*`. This means that we need to create a controller with the name `welcome` as that is where we told our route to go in the first place!

- Run: `rails generate controller welcome`

Reload the page again and find a different error message: `*The action 'index' could not be found for WelcomeController*`. We have created the welcome controller correctly, but there is no `index` method defined. Let's make one:

welcome_controller.rb

```ruby 
class WelcomeController < ApplicationController
    def index
    end
end
```

Wow another error! `*Missing template welcome/index...*` Since we have a `welcome` controller and an `index` method, Rails automatically will try to render a view with the path `app/views/welcome/index.html.erb`.  A directory `/welcome` should already exist, it was generated when the welcome controller was generated (thanks rails!). Inside of there add the file `index.html.erb` and inside of the file add some html:

app/views/welcome/index.html.erb

```html
<h1>I make internets with Rails</h1>
<img src="http://i.giphy.com/SPZFhfUJjsJO0.gif" alt="learning internet" style="width: 300px">
```
Checkout out your root route one more time.

## View (5m)

- This will not change the behavior, but you may wish to be more explicit in our controller by stating to `render` the template `index` 

app/controllers/welcome_controller.rb

```ruby
def index
  render('index')
end
```

Could we change these names to whatever we want? Absolutely!

## ERB (10m)

`.html.erb` files are templates that are processed with embedded ruby, `.erb` to generate an `.html` file. This is known as **server-side templating**. This enables Rails to serve up dynamic views based on the data it is served.

Let's say we want to pass a random number to our view from 0-100... Try adding this to your html:

```html
<h1>I make internets with Rails</h1>
<p>Random number is... <%= Random.new.rand(100) %></p>
<img src="http://i.giphy.com/SPZFhfUJjsJO0.gif" alt="learning internet" style="width: 300px">
```

Woah, what is happening? Ruby is being evaluated first and the result is printed into our html. the `<%` symbols escape our html. Remember from previous lessons we've seen on templating `<%` will *evaluate* the code while `<%=` will *interpolate* the result.

## Passing Data to our View (10m)

There's certainly some business logic happening in our View. This is bad. Our view should only be concerned with presenting the data, but not actually generating it, that is a violation of **separation of concerns**. To fix this let's move the `Random.new.rand(100)` code to our controller and set that equal to a variable we will pass into our view.

app/controllers/welcome_controller.rb

```ruby
class WelcomeController < ApplicationController
  def index
    @random = Random.new.rand(100)
    render('index')
  end
end
```

Notice we did not create a variable named `random` instead we created an instance variable named `@random`, the **@** is VERY important. Normal variables' scope do not reach the view, only **instance variables**' scope reach the view.

Finally we can refactor the `welcome/index.html.erb` file so that it will use this new variable.

```html
<h1>I make internets with Rails</h1>
<p>Random number is... <%= @random %></p>
<img src="http://i.giphy.com/SPZFhfUJjsJO0.gif" alt="learning internet" style="width: 300px">
```
Wooo, nice1!

##Challenge(15m)

* Create a new route: `/about` that with a `GET` request will hit the controller#action `welcome#about`.
* Have `welcome#about` render a view in `welcome/about.html.erb`
* Set a variable equal to your favorite computing language in your `welcome#about` controller, have that variable passed into the view.
* Your view should now display your favorite language!
* Bonus: create an array of your favorite languages in your controller. Pass them into your view and iterate through each of them inside a `<ul>`. Create an `<li>` tag for each favorite language.
