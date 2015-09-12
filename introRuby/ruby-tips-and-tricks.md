# Ruby



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

