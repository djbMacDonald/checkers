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
  $('#7_2').append($('<div class=redPawn>'));
  $('#7_4').append($('<div class=redPawn>'));
  $('#7_6').append($('<div class=redPawn>'));
  $('#6_1').append($('<div class=redPawn>'));
  $('#6_3').append($('<div class=redPawn>'));
  $('#6_5').append($('<div class=redPawn>'));
  $('#6_7').append($('<div class=redPawn>'));
  $('#5_0').append($('<div class=redPawn>'));
  $('#5_2').append($('<div class=redPawn>'));
  $('#5_4').append($('<div class=redPawn>'));
  $('#5_6').append($('<div class=redPawn>'));
};

Board.setBlacks = function(){
  $('#0_1').append($('<div class=blackPawn>'));
  $('#0_3').append($('<div class=blackPawn>'));
  $('#0_5').append($('<div class=blackPawn>'));
  $('#0_7').append($('<div class=blackPawn>'));
  $('#1_0').append($('<div class=blackPawn>'));
  $('#1_2').append($('<div class=blackPawn>'));
  $('#1_4').append($('<div class=blackPawn>'));
  $('#1_6').append($('<div class=blackPawn>'));
  $('#2_1').append($('<div class=blackPawn>'));
  $('#2_3').append($('<div class=blackPawn>'));
  $('#2_5').append($('<div class=blackPawn>'));
  $('#2_7').append($('<div class=blackPawn>'));
};
