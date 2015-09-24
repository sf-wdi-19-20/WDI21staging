#Rspec Intro

##Example OOP Spec

* [Car OOP Spec](https://github.com/sf-wdi-14/rspec-intro/tree/solution)

##Exercise

###Conway's Game of Life

* Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
* Any live cell with more than three live neighbours dies, as if by overcrowding.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any dead cell with exactly three live neighbours becomes a live cell.

[video](https://www.youtube.com/watch?t=23&v=FdMzngWchDk)

* [wiki](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

###Ping Pong Specing

* Work in pairs
* Person A writes a spec
* Person B passes the spec and writes a new spec for Person A
* Person A passes that spec and writes another spec of Person B
* Continue until the time runs out when everyone will delete all code and swap partners

* https://github.com/andersondias/conway-game-of-life-ruby/blob/master/spec/cell_spec.rb
* [live code](https://vimeo.com/31403388)

`gem install life`

[starter code]()

##Suggested Classes & Methods

**`World`**

* `::new(xSize, ySize)` — initializes a `World` (aka grid) of size x, y.
* `#cells` — returns an array of all the cells in the world.
* `#cell_at(xCord,yCord)` — returns a specific cell at coordinates x, y.
* `#tick!` — changes the state of the world according to the rules of the game.

**`Cell`**

* `::new(world, xCord, yCord, boolean)` — initializes a `Cell` belonging to a specific world, with cordinate x, cordinates y, specifying whether a cell is alive or dead.
* `#world` — returns the world it is a member of
* `#x` — returns the x coordinate
* `#y` — returns the y coordinate
* `#live?` — returns true if the cell is alive and false if not
* `#live!` — births a cell
* `#dead?` — returns true if the cell is dead and false if not
* `#die!` — kills a cell
* `#toggle` — toggles a cell's life-state
* `#neighbors` — returns all a cell's neighbors



##More References

[matchers](http://rspec.info/documentation/3.3/rspec-expectations/)

[basic structure](http://rspec.info/documentation/3.3/rspec-core/)


