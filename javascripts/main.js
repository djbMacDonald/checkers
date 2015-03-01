$(document).ready(function(){
  Board.create();
  Board.setPieces();
  $('.redPawn').click(Board.show);
  $('.blackPawn').click(Board.show);
});

var Board = Board || {};

Board.activePlayer = function() {
  return 'red';
};

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
  $('#4_1').append($('<div class=blackPawn>'));
  $('#3_0').append($('<div class=blackPawn>'));
};

Board.show = function(){
  $('.square').removeClass('legal');
  $('*').removeClass('current');
  $(this).addClass('current');
  if ($(this).hasClass('redPawn')){
    Board.findRedPawnLegal($(this).parent());
  } else if ($(this).hasClass('blackPawn')) {
    Board.findBlackPawnLegal($(this).parent());
  }
};

Board.findRedPawnLegal = function(square){
  var row = square.data().row;
  var col = square.data().col;

  $("#" + (row - 1 + 8)%8 + "_" + (col + 1)%8).addClass('legal');
  if ($("#" + (row - 1 + 8)%8 + "_" + (col + 1)%8).children('div.blackPawn').length === 1 && $("#" + (row - 2 + 8)%8 + "_" + (col + 2)%8).children('div.blackPawn').length === 0){
    $("#" + (row - 2 + 8)%8 + "_" + (col + 2)%8).addClass('legal')
  }

  $("#" + (row - 1 + 8)%8 + "_" + (col + 7)%8).addClass('legal');
  if ($("#" + (row - 1 + 8)%8 + "_" + (col + 7)%8).children('div.blackPawn').length > 0){
    $("#" + (row - 2 + 8)%8 + "_" + (col + 6)%8).addClass('legal')
  }

};

Board.findBlackPawnLegal = function(square){
  var row = square.data().row;
  var col = square.data().col;
  $("#" + (row + 1 + 8)%8 + "_" + (col + 1)%8).addClass('legal');
  if ($("#" + (row + 1 + 8)%8 + "_" + (col + 1)%8).children('div.redPawn').length > 0){
    $("#" + (row + 2 + 8)%8 + "_" + (col + 2)%8).addClass('legal')
  }

  $("#" + (row + 1 + 8)%8 + "_" + (col + 7)%8).addClass('legal');
  if ($("#" + (row + 1 + 8)%8 + "_" + (col + 7)%8).children('div.redPawn').length > 0){
    $("#" + (row + 2 + 8)%8 + "_" + (col + 6)%8).addClass('legal')
  }
};
