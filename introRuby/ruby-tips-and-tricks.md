# Ruby Expressions



## if not statements vs unless 

```ruby
games = ["Super Mario Bros.", "Contra", "Metroid", "Mega Man 2"]
if !games.empty?
	puts "Games in your vast collection: #{games.count}"
end
```

The standard if not conditional check is ugly in the world of Ruby!  Thankfully, we have a new conditional `unless` we can use.

```ruby
games = ["Super Mario Bros.", "Contra", "Metroid", "Mega Man 2"]
unless games.empty?
	puts "Games in your vast collection: #{games.count}" 
end
```

This evaluation reads much better than before.  We can now compress into one line of code for even easier human evaluation!

```ruby
games = ["Super Mario Bros.", "Contra", "Metroid", "Mega Man 2"]
puts "Games in your vast collection: #{games.count}" unless games.empty?

```

## Nested if statements vs short circuiting

```ruby
search = "Super Mario Bros."
games = ["Super Mario Bros.", "Contra", "Metroid", "Mega Man 2"]
matched_games = games.grep(Regexp.new(search))


# Found an exact match
if matched_games.length > 0 &&
  if matched_games.include?(search)
    puts "Game #{search} found."
  end
end
```

We are using nested if statements.  That's okay, but we're amazing coders.  We should use our trusty short-circuit structuring we learned about in javascript!

```ruby

search = "Super Mario Bros."
games = ["Super Mario Bros.", "Contra", "Metroid", "Mega Man 2"]
matched_games = games.grep(Regexp.new(search))

# Found an exact match
if matched_games.length > 0 && matched_games.include?(search)
    puts "Game #{search} found."
end
```

var statement = Less code is better code!

##Conditional Assignment

Here's a line of code that is setting the variable `search` to an empty string unless it already has content.

```ruby 
search = "" unless search 
```
We can use a conditional assignment to make this statement even shorter!

```ruby
search ||= ""
```

statement

##Conditional Returns


```ruby
search = "Contra"
games = ["Super Mario Bros.", "Contra", "Metroid", "Mega Man 2"]
search_index = games.find_index(search)
if search_index
  search_result = "Game #{search}  	: #{games[search_index]} at index #{search_index}."
else
  search_result = "Game #{search} not found."
end
puts search_result
```


Since if and else statements implicitly return their internal values, we can remove the internal `search_result` assigments and have only one at the top!

```ruby
search = "Contra"
games = ["Super Mario Bros.", "Contra", "Metroid", "Mega Man 2"]
search_index = games.find_index(search)

search_result = if search_index
	"Game #{search} found: #{games[search_index]} at index #{search_index}."
else
  	"Game #{search} not found."
end
puts search_result
```

###Conditional Returns in Methods

```ruby
def search(games, search_term)
  search_index = games.find_index(search_term)
  search_result = if search_index
    "Game #{search_term} found: #{games[search_index]} at index #{search_index}."
  else
    "Game #{search_term} not found."
  end
  return search_result
end

games = ["Super Mario Bros.", "Contra", "Metroid", "Mega Man 2"]
puts search(games, "Contra")


```

Since if and else statements return implicitly we can assume that methods return implicitly as well!  We can remove the need for `search_result` all together and simply evaluate the truthiness of `search_index`.

```ruby

def search(games, search_term)
  search_index = games.find_index(search_term)
  if search_index
    "Game #{search_term} found: #{games[search_index]} at index #{search_index}."
  else
    "Game #{search_term} not found."
  end
end

games = ["Super Mario Bros.", "Contra", "Metroid", "Mega Man 2"]
puts search(games, "Contra")
```

##Short-Circuit Evaluation
This a perfectly nice and upstanding method that searches for a particular search_term within a list of games and returns the index of the found game or returns the string "Not Found."  It's way too big, though!

```ruby
def search_index(games, search_term)
  search_index = games.find_index(search_term)

  if search_index
    search_index
  else
    "Not Found"
  end
end
```

Look how small we can make it with short circuiting!

```ruby

def search_index(games, search_term)
  games.find_index(search_term) ||  "Not Found"
end
```

In the end all we care about is if it is found or not.  We can simply return if it is found or not.  `games.find_index(search_term)` will return a truthy index if a games is found.  If not, then it will return a falsey value and we will evaluate the second value in the short-circuit statement.  Since the "Not Found" String is truthy ,the return statement will be "Not Found"




<br><br>
#Ruby Methods and Classes

##Optional Arguments
We can create methods that can take arguments. 

```ruby
def new_game(name, year, system)
  {
    name: name,
    year: year,
    system: system
  }
end
game = new_game("Street Figher II", nil, nil)

```

If we want to call the method without having to use latitude and longitude, we can set default values within the method.

```ruby
def new_game(name, year=nil, system=nil)
  {
    name: name,
    year: year,
    system: system
  }
end
game = new_game("Street Figher II")

```

##Options Hash Arguments
Defaulting two arguments to nil isn't ideal. We can update the method signature and implementation to take an optional options hash with keys for :year and :system.

```ruby
def new_game(name, options={})
  {
  	name: name,
  	year: options[:year],
  	system: options[:system]
  }
end
game = new_game("Street Figher II", 
  :name =>  "SNES",
  :system => 1992
  )
```

##Raising Exceptions

```ruby
class InvalidGameError < StandardError; end
def new_game(name, options={})
  {
    name: name,
    year: options[:year],
    system: options[:system]
  }
end
begin
  game = new_game(nil)
rescue InvalidGameError => e
  puts "There was a problem creating your new game: #{e.message}"
end
```
Implementing an exception raise if name is nil


```ruby
class InvalidGameError < StandardError; end
def new_game(name, options={})
  unless name
    raise InvalidGameError
  end
  {
    name: name,
    year: options[:year],
    system: options[:system]
  }
end
begin
  game = new_game(nil)
rescue InvalidGameError => e
  puts "There was a problem creating your new game: #{e.message}"
end
```

##The Splat Operator


```ruby
def describe_favorites(games)
  for game in games
    puts "Favorite Game: #{game}"
  end  
end
describe_favorites(['Mario', 'Contra', 'Metroid'])

```

When passing in an array of arguments to a method, sometimes it'll make sense to use Ruby's "splat" operator rather than explicitly requesting an array. We can update the describe_favorites method and the call to it to instead use the splat operator.

```ruby

def describe_favorites(*games)
  puts "Favorite Game: #{games.join(' ')}"
end
describe_favorites('Mario', 'Contra', 'Metroid')
 
```

##Classes
Passing around hashes is getting troublesome. Let's use a class to hold our data. 

```ruby
class Game
  def initialize(name, options={})
  end
end
```
Now we can implement the initialize method to store name, system and year in instance variables.

```ruby
class Game
  def initialize(name, options={})
    @name = name    
    @system = options[:system]
    @year = options[:year]
  end
end
```

##Keeping things accessible with attr_accessor

```ruby
class Game
  def initialize(name, options={})
    @name = name
    @year = options[:year]
    @system = options[:system]
  end

  # so many getters
  def name
    @name
  end
  
  def year
    @year
  end
  
  def system
    @system
  end
```

We want to be able to access the name, year and system for the game, but that doesn't mean we need to make getter methods for them. We can refactor the code to make these variables available using the Ruby way with attr_accessor.


```ruby
class Game
  attr_accessor :name, :year, :system 
  def initialize(name, options={})
    @name = name
    @year = options[:year]
    @system = options[:system]
  end
end
```

So tiny now!

###... yet keeping SOME things unchangeable
```ruby
class Game
  attr_accessor :name, :year, :system
  def initialize(name, options={})
    @name = name
    @year = options[:year]
    @system = options[:system]
  end
end
```
We can store another variable called created_at which is set to Time.now in the initialize method. We can allow it to be accessed, but it cannot be set from outside the object.

```ruby
class Game
  attr_accessor :name, :year, :system
  attr_reader :created_at
  def initialize(name, options={})
    @name = name
    @year = options[:year]
    @system = options[:system]
    @created_at = Time.now
  end
end
```
