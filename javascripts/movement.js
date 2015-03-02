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
    Board.findMoves($(this).parent(), 'red', 'Pawn');
  } else if ($(this).hasClass('blackPawn')) {
    Board.findMoves($(this).parent(), 'red', 'Pawn');
  } else if ($(this).hasClass('redKing')) {
    Board.findMoves($(this).parent(), 'red', 'Pawn');
  } else if ($(this).hasClass('blackKing')) {
    Board.findMoves($(this).parent(), 'red', 'Pawn');
  }
  Board.setMoves();
  Board.setJumps();
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
    diagRightJump.addClass('rjump');
    diagRight.addClass('rTarget');
  } else if (!Board.hasBlack(diagRight) && !Board.hasRed(diagRight)){
    diagRight.addClass('legal');
  }
  if (!Board.hasBlack(diagLeft) && Board.hasRed(diagLeft) && !Board.hasRed(diagLeftJump) && !Board.hasBlack(diagLeftJump)) {
    diagLeftJump.addClass('ljump');
    diagLeft.addClass('lTarget');
  } else if (!Board.hasBlack(diagLeft) && !Board.hasRed(diagLeft)){
    diagLeft.addClass('legal');
  }
};

Board.findRedKingLegal = function(square){
  var row = square.data().row;
  var col = square.data().col;
  var diagTopRight = $("#" + (row + 1)%8 + "_" + (col + 1)%8);
  var diagTopRightJump = $("#" + (row + 2)%8 + "_" + (col + 2)%8);
  var diagTopLeft = $("#" + (row + 1)%8 + "_" + (col + 7)%8);
  var diagTopLeftJump = $("#" + (row + 2)%8 + "_" + (col + 6)%8);
  var diagBotRight = $("#" + (row + 7)%8 + "_" + (col + 1)%8);
  var diagBotRightJump = $("#" + (row + 6)%8 + "_" + (col + 2)%8);
  var diagBotLeft = $("#" + (row + 7)%8 + "_" + (col + 7)%8);
  var diagBotLeftJump = $("#" + (row + 6)%8 + "_" + (col + 6)%8);

  if (!Board.hasRed(diagTopRight) && Board.hasBlack(diagTopRight) && !Board.hasBlack(diagTopRightJump) && !Board.hasRed(diagTopRightJump)) {
    diagTopRightJump.addClass('rJump');
    diagTopRight.addClass('rTarget');
  } else if (!Board.hasRed(diagTopRight) && !Board.hasBlack(diagTopRight)){
    diagTopRight.addClass('legal');
  }
  if (!Board.hasRed(diagTopLeft) && Board.hasBlack(diagTopLeft) && !Board.hasBlack(diagTopLeftJump) && !Board.hasRed(diagTopLeftJump)) {
    diagTopLeftJump.addClass('lJump');
    diagTopLeft.addClass('lTarget');
  } else if (!Board.hasRed(diagTopLeft) && !Board.hasBlack(diagTopLeft)){
    diagTopLeft.addClass('legal');
  }
  if (!Board.hasRed(diagBotRight) && Board.hasBlack(diagBotRight) && !Board.hasBlack(diagBotRightJump) && !Board.hasRed(diagBotRightJump)) {
    diagBotRightJump.addClass('rJump');
    diagBotRight.addClass('rTarget');
  } else if (!Board.hasRed(diagBotRight) && !Board.hasBlack(diagBotRight)){
    diagBotRight.addClass('legal');
  }
  if (!Board.hasRed(diagBotLeft) && Board.hasBlack(diagBotLeft) && !Board.hasBlack(diagBotLeftJump) && !Board.hasRed(diagBotLeftJump)) {
    diagBotLeftJump.addClass('lJump');
    diagBotLeft.addClass('lTarget');
  } else if (!Board.hasRed(diagBotLeft) && !Board.hasBlack(diagBotLeft)){
    diagBotLeft.addClass('legal');
  }

};

Board.findBlackKingLegal = function(square){
  var row = square.data().row;
  var col = square.data().col;
  var diagTopRight = $("#" + (row + 1)%8 + "_" + (col + 1)%8);
  var diagTopRightJump = $("#" + (row + 2)%8 + "_" + (col + 2)%8);
  var diagTopLeft = $("#" + (row + 1)%8 + "_" + (col + 7)%8);
  var diagTopLeftJump = $("#" + (row + 2)%8 + "_" + (col + 6)%8);
  var diagBotRight = $("#" + (row + 7)%8 + "_" + (col + 1)%8);
  var diagBotRightJump = $("#" + (row + 6)%8 + "_" + (col + 2)%8);
  var diagBotLeft = $("#" + (row + 7)%8 + "_" + (col + 7)%8);
  var diagBotLeftJump = $("#" + (row + 6)%8 + "_" + (col + 6)%8);

  if (!Board.hasBlack(diagTopRight) && Board.hasRed(diagTopRight) && !Board.hasRed(diagTopRightJump) && !Board.hasBlack(diagTopRightJump)) {
    diagTopRightJump.addClass('trJump');
    diagTopRight.addClass('trTarget');
  } else if (!Board.hasBlack(diagTopRight) && !Board.hasRed(diagTopRight)){
    diagTopRight.addClass('legal');
  }
  if (!Board.hasBlack(diagTopLeft) && Board.hasRed(diagTopLeft) && !Board.hasRed(diagTopLeftJump) && !Board.hasBlack(diagTopLeftJump)) {
    diagTopLeftJump.addClass('tlJump');
    diagTopLeft.addClass('tlTarget');
  } else if (!Board.hasBlack(diagTopLeft) && !Board.hasRed(diagTopLeft)){
    diagTopLeft.addClass('legal');
  }
  if (!Board.hasBlack(diagBotRight) && Board.hasRed(diagBotRight) && !Board.hasRed(diagBotRightJump) && !Board.hasBlack(diagBotRightJump)) {
    diagBotRightJump.addClass('brJump');
    diagBotRight.addClass('brTarget');
  } else if (!Board.hasBlack(diagBotRight) && !Board.hasRed(diagBotRight)){
    diagBotRight.addClass('legal');
  }
  if (!Board.hasBlack(diagBotLeft) && Board.hasRed(diagBotLeft) && !Board.hasRed(diagBotLeftJump) && !Board.hasBlack(diagBotLeftJump)) {
    diagBotLeftJump.addClass('blJump');
    diagBotLeft.addClass('blTarget');
  } else if (!Board.hasBlack(diagBotLeft) && !Board.hasRed(diagBotLeft)){
    diagBotLeft.addClass('legal');
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
  if ($('.current').hasClass('redPawn')){
    Board.executeMove($(this), 'red', 'Pawn');
  } else if ($('.current').hasClass('redKing')){
    Board.executeMove($(this), 'red', 'King');
  } else if ($('.current').hasClass('blackPawn')){
    Board.executeMove($(this), 'black', 'Pawn');
  } else if ($('.current').hasClass('blackKing')){
    Board.executeMove($(this), 'black', 'King');
  }
};

Board.executeMove = function(place, color, type){
  $('.current').remove();
  Board.createPiece(place, color, type);
  Board.cleanup();
  $('*').removeClass('current');
  Board.isKing(place, color);
  Board.nextMove();
}

Board.jump = function(e){
  if ($('.current').hasClass('redPawn')){
    Board.executeJump(e, $(this), 'red', 'Pawn');
  }
  if ($('.current').hasClass('redKing')){
    Board.executeJump(e, $(this), 'red', 'King');
  }
  if ($('.current').hasClass('blackPawn')){
    Board.executeJump(e, $(this), 'black', 'Pawn');
  }
  if ($('.current').hasClass('blackKing')){
    Board.executeJump(e, $(this), 'black', 'King');
  }
}

Board.executeJump = function(e, place, color, type){
  $('.current').remove();
  Board.createPiece(place, color, type);
  e.data.target.children().remove();
  Board.cleanup();
  Board.findMoves(place, color, type);
  if ($('.lJump, .rJump, .trJump, .tlJump, brJump, .blJump').length > 0){
    $('.legal').removeClass('legal');
    Board.setJumps();
  } else {
    Board.isKing(place, color);
    $('*').removeClass('current');
    Board.nextMove();
  }
};

Board.setMoves = function(){
  $('.legal').click(Board.move);
};

Board.setJumps = function(){
    $('.lJump').click({'target':$('.lTarget')}, Board.jump);
    $('.rJump').click({'target':$('.rTarget')}, Board.jump);
    $('.trJump').click({'target':$('.trTarget')}, Board.jump);
    $('.tlJump').click({'target':$('.tlTarget')}, Board.jump);
    $('.brJump').click({'target':$('.brTarget')}, Board.jump);
    $('.blJump').click({'target':$('.blTarget')}, Board.jump);
};

Board.findMoves = function(place, color, type){
  if (color === 'red' && type === 'Pawn'){
    Board.findRedPawnLegal(place);
  } else if (color === 'red' && type === 'King'){
    Board.findRedKingLegal(place);
  } else if (color === 'black' && type === 'Pawn'){
    Board.findBlackPawnLegal(place);
  } else if (color === 'black' && type === 'King'){
    Board.findBlackKingLegal(place);
  }
};

Board.nextMove = function(){
  if (Board.activePlayer === 'red'){
    Board.activePlayer = 'black';
    $('h1').text('Black');
    $('.blackPawn, .blackKing').click(Board.show);
  } else {
    Board.activePlayer = 'red';
    $('h1').text('Red');
    $('.redPawn, .redKing').click(Board.show);
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
  $('.tlJump').removeClass('tlJump');
  $('.trJump').removeClass('trJump');
  $('.blJump').removeClass('blJump');
  $('.brJump').removeClass('brJump');
  $('.lTarget').removeClass('lTarget');
  $('.rTarget').removeClass('rTarget');
  $('.legal').removeClass('legal')
}

Board.isKing = function(place, color){
  if (color==='red' && place.has('div.redPawn').length > 0 && place.data().row === 0){
    place.children().remove();
    Board.createPiece(place, 'red', 'King');
  } else if (color==='black' && place.has('div.blackPawn').length > 0 && place.data().row === 7){
    place.children().remove();
    Board.createPiece(place, 'black', 'King');
  }
};
