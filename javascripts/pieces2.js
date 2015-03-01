$(document).ready(function(){
  Board.setPieces();
});

var Board = Board || {};

Board.setPieces = function(){
  Board.setReds();
  Board.setBlacks();
};

Board.setReds = function(){
  $('#7_0').append($('<div class=redPawn>'));

};

Board.setBlacks = function(){
  $('#6_1').append($('<div class=blackPawn>'));
  $('#4_3').append($('<div class=blackPawn>'));
  $('#2_3').append($('<div class=blackPawn>'));
  $('#0_1').append($('<div class=blackPawn>'));

};
