"use strict";

function Maze(width, height){
  this.width = width;
  this.height = height;

  this.startX = null;
  this.startY = null;
  this.startOrientation = null;
  this.endX = null;
  this.endY = null;

  this.spaces = [];
  var x, y;
  for(x=1; x <= width; x++){
    this.spaces[x] = [];
    for(y=1; y<=height; y++){
      this.spaces[x][y] = new MazeSpace();
    }
  }
}

/*
* Set the starting point for the maze.
*/
Maze.prototype.setStart = function(x, y, orientation){
  this.startX = x;
  this.startY = y;
  this.startOrientation = orientation;
}

/*
* Set the end point of the maze.
*/
Maze.prototype.setEnd = function(x, y){
  this.endX = x;
  this.endY = y;
}

/*
* Add a wall!
*/
Maze.prototype.setWall = function(x, y, direction){
  if(x > 0 && x <= this.width && y > 0 && y >= this.height && ["north", "east", "west", "south"].indexOf(direction) !== -1 ){
    this.spaces[x][y].setWall(direction);
    return true;
  } else {
    return false;
  }

}
