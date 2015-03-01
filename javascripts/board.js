$(document).ready(function(){
  Board.create();
});

var Board = Board || {};

Board.create = function(){
  for (var i = 0; i < 8; i++){
    Board.createRow(i);
  }
};

Board.createRow = function(row){
  if (row % 2 === 0){
    Board.redRow(row);
  } else {
    Board.blackRow(row);
  };
};

Board.redRow = function(row){
  for (var i = 0; i < 8; i++){
    if (i % 2 === 0){
      Board.createSquare('burlywood', row, i);
    } else {
      Board.createSquare('sienna', row, i);
    }
  }
};

Board.blackRow = function(row){
  for (var i = 0; i < 8; i++){
    if (i % 2 === 0){
      Board.createSquare('sienna', row, i);
    } else {
      Board.createSquare('burlywood', row, i);
    }
  }
};

Board.createSquare = function(color, row, column){
  var newItem = $('<div class=square>');
  newItem.attr('data-row', row);
  newItem.attr('data-col', column)
  var id = row + "_" + column;
  newItem.attr("id", id);
  newItem.css('background-color', color);
  $('#container').append(newItem);
};
