$(document).ready(function(){
  Board.setPieces();
});

var Board = Board || {};

Board.setPieces = function(){
  Board.setReds();
  Board.setBlacks();
};

Board.setReds = function(){
  $('#1_4').append($('<div class=redPawn>'));
  $('#7_4').append($('<div class=redPawn>'));

};

Board.setBlacks = function(){
  $('#0_3').append($('<div class=blackPawn>'));
  $('#6_3').append($('<div class=blackPawn>'));

};
