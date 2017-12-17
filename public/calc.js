calcString = '';

var formatCalc = function(){
  // Experimenting with jQuery css options
  $('h1, table')
    .css('text-align', 'center')
    .css('font-size', '300%');
  $('table')
    .css('background-color', 'black')
  $('.operator')
    .css('color', 'white')
    .css('background-color', 'blue');
  $('table tr')
    .css('background-color', 'white');
  $('td')
    .css('width', '100px')
    .css('height', '100px');
  $('#decimal, #negate')
    .css('background-color', 'white')
    .css('color', 'black');
  $('#row2').children()
    .css('background-color', 'black')
    .css('color', 'white');
  $('#divide')
    .css('color', 'white')
    .css('background-color', 'blue');
  $('#display')
    .css('height', '100px')
    .css('background-color', 'lightgrey');
  $('p')
    .css('text-align', 'center');
};

$(document).ready(function(){
  formatCalc();
  $("#container").center();

});

$(window).resize(function(){
  formatCalc();
	$("#container").center();
});

// Ref http://www.leccionespracticas.com/informatica-web/solved-how-to-center-div-horizontally-and-vertically-using-jquery on 12/15/17
jQuery.fn.center = function () {
	  this.css("position","absolute");
    // Only want to horizontally center calculator
	  //this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
	  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
	return this;
}

var displayNum = function(e){
  var num = [];
  switch(e['target'].id){
    case '0':
      num = '0'
      break;
    case '1':
      num = '1'
      break;
    case '2':
      num = '2'
      break;
    case '3':
      num = '3'
      break;
    case '4':
      num = '4'
      break;
    case '5':
      num = '5'
      break;
    case '6':
      num = '6'
      break;
    case '7':
      num = '7'
      break;
    case '8':
      num = '8'
      break;
    case '9':
      num = '9'
      break;
    default:
      $('#display').text('Unknown entry')
  }
  calcString += num;
  $('#display').text(calcString);
};

var displayOp = function(e){
  var op = [];
  if((e['target'].id) === 'equals'){
    answer()
  }
  else {
    switch(e['target'].id){
      case 'divide':
        op = '/'
        break;
      case 'subtract':
        op = '-'
        break;
      case 'add':
        op = '+'
        break;
      case 'multiply':
        op = '*'
        break;
      case 'decimal':
        op = '.'
        break;
      case 'negate':
        op = '-'
        break;
      case 'parenOpen':
        op = '('
        break;
      case 'parenClose':
        op = ')'
        break;
      default:
        $('#display').text('Unknown entry')
    }
    calcString += op;
    $('#display').text(calcString);
    console.log(calcString);
  }
};

$('.number').click(displayNum);

$('.operator').click(displayOp);

$('#clear').click(function(e){
  $('#display').text('');
  calcString = '';
});

var answer = function(){
  $('#display').text('Answer');
  calcString = '';
};
