$(document).ready(function(){
  Board.create();
  Board.setPieces();
  $('.redPawn').click(Board.show);
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

Board.show = function(){
  // console.log($(this).parent().data().row);
  if ($(this).hasClass('redPawn')){
    Board.findLegal($(this).parent());
  }
  // $(this).parent().addClass('legal');
};
Board.findLegal = function(square){
    var row = square.data().row;
    var col = square.data().col;

    if (square.data().col === 0){
      $("#" + (row - 1) + "_" + (col + 1)).addClass('legal');
      $("#" + (row - 1) + "_" + (7)).addClass('legal');
    }



    $("#" + (row - 1) + "_" + (col + 1)).addClass('legal');
    $("#" + (row - 1) + "_" + (col - 1)).addClass('legal');
};
