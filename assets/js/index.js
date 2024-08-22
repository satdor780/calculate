
var a = ''

var b = ''

var sign = ''

var equals = false;

var calc_text = document.querySelector('.calc__text')

var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

var operators = ['<-', '/', 'X', '-', '+']

var maxLength = 13; 

document.querySelector('.clear').onclick = () =>{
  calc_text.textContent = '0';
  a = '';
  b = '';
  sign = '';
  equals = false;
}

function toExpon(){
  if(calc_text.textContent.length >= 13){
      calc_text.textContent = Number(calc_text.textContent).toExponential(4)
    }
}

document.querySelector('.buttons').addEventListener('click', function(event) {

  if (calc_text.textContent.length >= 9) {
    calc_text.classList.add('fons-size-min')
  }
  
  var key = event.target.textContent
  if(!event.target.classList.contains('button')) return;
  if (event.target.classList.contains('clear')) return;
  calc_text.textContent = '';

  if (nums.includes(key)) {
    if (b == '' && sign == '') {
      a += key
      calc_text.textContent += a
    }else if(!a == '' && !b == '' && equals){
      equals = false;
      b = key
      calc_text.textContent = b
    }else{
      b += key
      calc_text.textContent += b
    }
    toExpon()
    return;
  }

  if (operators.includes(key)) {
    sign = key
    calc_text.textContent += sign
  }

  if (event.target.classList.contains('equals')){
    if (b == '') {
      calc_text.textContent += a
      return;
    }
    if (a == '') calc_text.textContent = '=0';

    if (a !== '' && b !== '') {
      switch (sign) {
        case '+':
          a = (+a) + (+b);
          break;
        case '-':
          a = (+a) - (+b);
          break;
        case 'X':
          a = (+a) * (+b);
          break;
        case '/':
          a = (+a) / (+b);
          break;
        default:
          console.error('Неизвестный оператор:', sign);
          return;
      }
    
      calc_text.textContent += a;
      equals = true;
      toExpon();
      return a;
    }

  }

  if (event.target.classList.contains('negative')) {
    if (!b == '' && !equals) {
      b = Number(b) - Number(b * 2)
      calc_text.textContent += b
      return b
    }else{
      a = Number(a) - Number(a * 2)
      calc_text.textContent += a
      return a
    }
    if (equals){
       a = Number(a) - Number(a * 2)
      calc_text.textContent += a
      return a
    }
  };

  if (event.target.classList.contains('percent')) {
    if (!b == '' && !equals) {
      b = Number(b / 100)
      calc_text.textContent += b
      return b
    }else{
      a = Number(a / 100)
      calc_text.textContent += a
      return a
    }
    if (equals){
      a = Number(a / 100)
      calc_text.textContent += a
      return a
    }
  };

  
})

// setInterval(() => {
//   if(calc_text.textContent.length >= 13){
//     calc_text.textContent = Number(calc_text.textContent).toExponential(4)
//   }
  
// }, 1000)