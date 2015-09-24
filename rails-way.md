#The Rails Way

| Objectives |
| :---- |
| Review Rails fundamentals |
| Synthesize concepts learned |
| Convert user stories into code |

![rails-way](http://i.giphy.com/MsvRClUHCl4S4.gif)


##User Stories

User should be able to...

* Have an an `email` and `password_digest` persisted in the database
* See a welcome page on `/`
* See a total count of the registered users on `/users`
* See a form to sign-up on `/users/new` that posts to "/users"
* Sign up with a new account when posting to `/users`
* have a secure password when signing up
* have validations before signing up
    * a unqiue email
    * a password of at least 6 characters
    * a password confirmation that matches the password provided
* have a profile page to see a welcome message that displays their email address
* See a login form at `/sessions/new`
* Create a new session when posting to `/sessions`
* logout when sending a `delete` request to `/sessions`
* see a nav bar on every page with links to:
    * home
    * sign in
    * sign up
* see a different nav bar if signed in that includes
    * home
    * profile
    * logout
* be authorized to only see `/users` if logged in
* have many `goals` (`Goal` model), which have attributes:
    * objective
    * due_date
* use an application that is seeded with other users that have goals using a seed file.
* go to `/users/:id/goals` and see all of any user's goals