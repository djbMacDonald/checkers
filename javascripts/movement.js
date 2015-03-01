$(document).ready(function(){
  $('h1').text('Red');
  $('.redPawn').click(Board.show);
});

var Board = Board || {};

Board.activePlayer = 'red';

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
  $('.lJump').click(Board.lJump);
  $('.rJump').click(Board.rJump);
};

Board.findRedPawnLegal = function(square){
  var row = square.data().row;
  var col = square.data().col;
  var diagRight = $("#" + (row + 7)%8 + "_" + (col + 1)%8);
  var diagRightJump = $("#" + (row + 6)%8 + "_" + (col + 2)%8);
  var diagLeft = $("#" + (row + 7)%8 + "_" + (col + 7)%8);
  var diagLeftJump = $("#" + (row + 6)%8 + "_" + (col + 6)%8);

  if (!Board.hasRed(diagRight) && Board.hasBlack(diagRight) && !Board.hasBlack(diagRightJump) && !Board.hasRed(diagRightJump)) {
    diagRightJump.addClass('rJump');
    diagRight.addClass('rTarget');
  } else if (!Board.hasRed(diagRight) && !Board.hasBlack(diagRight)){
    diagRight.addClass('legal');
  }
  if (!Board.hasRed(diagLeft) && Board.hasBlack(diagLeft) && !Board.hasBlack(diagLeftJump) && !Board.hasRed(diagLeftJump)) {
    diagLeftJump.addClass('lJump');
    diagLeft.addClass('lTarget');
  } else if (!Board.hasRed(diagLeft) && !Board.hasBlack(diagLeft)){
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

  if (!Board.hasBlack(diagRight) && Board.hasRed(diagRight) && !Board.hasRed(diagRightJump) && !Board.hasBlack(diagRightJump)) {
    diagRightJump.addClass('rJump');
    diagRight.addClass('rTarget');
  } else if (!Board.hasBlack(diagRight) && !Board.hasRed(diagRight)){
    diagRight.addClass('legal');
  }
  if (!Board.hasBlack(diagLeft) && Board.hasRed(diagLeft) && !Board.hasRed(diagLeftJump) && !Board.hasBlack(diagLeftJump)) {
    diagLeftJump.addClass('lJump');
    diagLeft.addClass('lTarget');
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
  if(Board.activePlayer === 'red'){
    $('h1').text('Black');
    Board.activePlayer = 'black';
    Board.createPiece($(this), 'red', 'Pawn');
    Board.cleanup();
    $('.blackPawn').click(Board.show);
  } else {
    $('h1').text('Red');
    Board.activePlayer = 'red';
    Board.createPiece($(this), 'black', 'Pawn');
    Board.cleanup();
    $('.redPawn').click(Board.show);
  }
  $('*').removeClass('current');
};

Board.lJump = function(){
  $('.current').remove();
  if(Board.activePlayer === 'red'){
    Board.createPiece($(this), 'red', 'Pawn');
    $('.lTarget').children().remove();
    Board.cleanup();
    Board.findRedPawnLegal($(this));
    if ($('.lJump, .rJump').length > 0){
      $('.rJump').click(Board.rJump);
      $('.lJump').click(Board.lJump);
    } else {
      $('*').removeClass('current');
      $('.blackPawn').click(Board.show);
      Board.activePlayer = 'black';
      $('h1').text('Black');
    }
  } else {
    Board.createPiece($(this), 'black', 'Pawn');
    $('.lTarget').children().remove();
    Board.cleanup();
    Board.findBlackPawnLegal($(this));
    if ($('.lJump, .rJump').length > 0){
      $('.lJump').click(Board.lJump);
    } else {
      $('*').removeClass('current');
      $('.redPawn').click(Board.show);
      Board.activePlayer = 'red';
      $('h1').text('Red');
    }
  }
};

Board.rJump = function(){
  $('.current').remove();
  if(Board.activePlayer === 'red'){
    Board.createPiece($(this), 'red', 'Pawn');
    $('.rTarget').children().remove();
    Board.cleanup();
    Board.findRedPawnLegal($(this));
    if ($('.lJump, .rJump').length > 0){
      $('.lJump').click(Board.lJump);
      $('.rJump').click(Board.rJump);
    } else {
      $('*').removeClass('current');
      $('.blackPawn').click(Board.show);
      Board.activePlayer = 'black';
      $('h1').text('Black');
      $('.current').removeClass('current');
    }
  } else {
    Board.createPiece($(this), 'black', 'Pawn');
    $('.rTarget').children().remove();
    Board.cleanup();
    Board.findBlackPawnLegal($(this));
    if ($('.lJump, .rJump').length > 0){
      $('.lJump').click(Board.lJump);
      $('.rJump').click(Board.rJump);
    } else {
      $('*').removeClass('current');
      $('.redPawn').click(Board.show);
      Board.activePlayer = 'red';
      $('h1').text('Red');
      $('.current').removeClass('current');
    }
  }
};

Board.createPiece = function(place, color, type){
  var newItem = $('<div>');
  newItem.addClass(color + type);
  newItem.addClass('current');
  place.append(newItem);
};

Board.cleanup = function(){
  $('*').unbind();
  $('.lJump').removeClass('lJump');
  $('.rJump').removeClass('rJump');
  $('.lTarget').removeClass('lTarget');
  $('.rTarget').removeClass('rTarget');
  $('.legal').removeClass('legal')
}
