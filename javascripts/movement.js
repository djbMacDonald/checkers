$(document).ready(function(){
  $('.redPawn').click(Board.show);
  $('.blackPawn').click(Board.show);
});

var Board = Board || {};

Board.activePlayer = function() {
  return 'red';
};

Board.show = function(){
  $('.legal').unbind();
  $('.square').removeClass('legal');
  $('*').removeClass('current');
  $(this).addClass('current');
  if ($(this).hasClass('redPawn')){
    Board.findRedPawnLegal($(this).parent());
  } else if ($(this).hasClass('blackPawn')) {
    Board.findBlackPawnLegal($(this).parent());
  }
  $('.legal').click(Board.move);
};

Board.findRedPawnLegal = function(square){
  var row = square.data().row;
  var col = square.data().col;
  var diagRight = $("#" + (row + 7)%8 + "_" + (col + 1)%8);
  var diagRightJump = $("#" + (row + 6)%8 + "_" + (col + 2)%8);
  var diagLeft = $("#" + (row + 7)%8 + "_" + (col + 7)%8);
  var diagLeftJump = $("#" + (row + 6)%8 + "_" + (col + 6)%8);

  if (!Board.hasRed(diagRight) && Board.hasBlack(diagRight) && !Board.hasBlack(diagRightJump)) {
    diagRightJump.addClass('legal');
  } else if (!Board.hasRed(diagRight) && !Board.hasRed(diagRight) && !Board.hasBlack(diagRight)){
    diagRight.addClass('legal');
  }
  if (Board.hasBlack(diagLeft) && !Board.hasBlack(diagLeftJump)) {
    diagLeftJump.addClass('legal');
  } else if (!Board.hasRed(diagRight) && !Board.hasBlack(diagLeft)){
    diagLeft.addClass('legal');
  }
};

Board.findBlackPawnLegal = function(square){
  var row = square.data().row;
  var col = square.data().col;
  var diagRight = $("#" + (row + 1)%8 + "_" + (col + 1)%8);
  var diagRightJump = $("#" + (row + 2)%8 + "_" + (col + 2)%8);
  var diagLeft = $("#" + (row + 1)%8 + "_" + (col + 7)%8);
  var diagLeftJump = $("#" + (row + 2)%8 + "_" + (col + 6)%8);
  console.log(Board.hasRed(diagRight));

  if (!Board.hasBlack(diagRight) && Board.hasRed(diagRight) && !Board.hasRed(diagRightJump)) {
    diagRightJump.addClass('legal');
  } else if (!Board.hasBlack(diagRight) && !Board.hasRed(diagRight)){
    diagRight.addClass('legal');
  }
  if (!Board.hasBlack(diagLeft) && Board.hasRed(diagLeft) && !Board.hasRed(diagLeftJump)) {
    diagLeftJump.addClass('legal');
  } else if (!Board.hasBlack(diagLeft) && !Board.hasRed(diagLeft)){
    diagLeft.addClass('legal');
  }
};

Board.hasBlack = function(square){
  if (square.children('div.blackPawn').length === 1 || square.children('div.blackKing').length === 1){
    return true;
  } else {
    return false;
  }
};

Board.hasRed = function(square){
  if (square.children('div.redPawn').length === 1 || square.children('div.redKing').length === 1){
    return true;
  } else {
    return false;
  }
};

Board.move = function(){
  $('.current').remove();
  $(this).append($('<div class=redPawn>'));
  $('.legal').removeClass('legal');
};
