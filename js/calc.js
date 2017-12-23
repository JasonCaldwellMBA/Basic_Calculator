// =============== Click Events ===============
calcString = '';

var displayClick = function(e){
  var click = [];
  if((e['target'].id) === 'equals'){
    answer();
  }
  else if((e['target'].id) === 'clear'){
    clear();
  }
  else {
    switch(e['target'].id){
      case 'divide':
        click = '/'; break;
      case 'subtract':
        click = '-'; break;
      case 'add':
        click = '+'; break;
      case 'multiply':
        click = '*'; break;
      case 'decimal':
        click = '.'; break;
      case 'negate':
        click = '-'; break;
      case 'parenOpen':
        click = '('; break;
      case 'parenClose':
        click = ')'; break;
      case '0':
        click = '0'; break;
      case '1':
        click = '1'; break;
      case '2':
        click = '2'; break;
      case '3':
        click = '3'; break;
      case '4':
        click = '4'; break;
      case '5':
        click = '5'; break;
      case '6':
        click = '6'; break;
      case '7':
        click = '7'; break;
      case '8':
        click = '8'; break;
      case '9':
        click = '9'; break;
      default:
        alert('Unknown button pressed. Please try again.');
    }
    calcString += click;
    $('#display').text(calcString);
  }
};

$('.number').click(displayClick);
$('.operator').click(displayClick);

// =============== Keyboard Events ===============

var displayKB = function(e){
  var key = [];
  if((e.key === '=') || (e.which === 13 || e.keyCode === 13)){
    answer();
  }
  // Unable to get delete key to clear
  else if(e.key === 'C' || e.key === 'c'){
    clear();
  }
  else {
    switch(e.key){
      case '/':
        key = '/'; break;
      case '-':
        key = '-'; break;
      case '+':
        key = '+'; break;
      case '*':
        key = '*'; break;
      case '.':
        key = '.'; break;
      case '-':
        key = '-'; break;
      case '(':
        key = '('; break;
      case ')':
        key = ')'; break;
      case '0':
        key = '0'; break;
      case '1':
        key = '1'; break;
      case '2':
        key = '2'; break;
      case '3':
        key = '3'; break;
      case '4':
        key = '4'; break;
      case '5':
        key = '5'; break;
      case '6':
        key = '6'; break;
      case '7':
        key = '7'; break;
      case '8':
        key = '8'; break;
      case '9':
        key = '9'; break;
      default:
        alert('Unknown key pressed. Please try again.');
    }
    calcString += key;
    $('#display').text(calcString);
  }
};

$(document).keypress(displayKB);

// =============== Calculations or Clear ===============

var clear = function(){
  $('#display').text('');
  calcString = '';
};

var answer = function(){
  var ans = $('#display').text();
  // After research, I think I'm controlling the input and that this calculator is simple/small enough that I can use eval() - 12/16/17
  try{
    ans = eval(ans); }
  catch(e){
    alert('Math ERROR! Sorry, please try your calculation again.');
    calcString = '';
  }

  roundedAns = ans.toFixed(2);
  if (roundedAns.endsWith(00)){
    $('#display').text(ans);
  }
  else {
    $('#display').text(roundedAns);
  }
  calcString = '';
};
