$(document).ready(function(){
  Board.setPieces();
});

var Board = Board || {};

Board.setPieces = function(){
  Board.setReds();
  Board.setBlacks();
};

Board.setReds = function(){
  $('#4_5').append($('<div class=redPawn>'));

};

Board.setBlacks = function(){
  $('#3_4').append($('<div class=blackPawn>'));
  $('#1_2').append($('<div class=blackPawn>'));
  // $('#2_3').append($('<div class=blackPawn>'));
  // $('#6_6').append($('<div class=blackPawn>'));
  // $('#0_1').append($('<div class=blackPawn>'));

};
