let button = document.querySelectorAll('.btn');

let past = [];
let solution ='';
let result ;
let Ans= '0';
let screen = document.querySelector('input');

let solve = document.querySelector('#Total');

function evaluateExpression(solution) {
  solution = solution.replace('x','*');
  solution = solution.replace('Ans',Ans);
  solution = solution.replace('log','Math.log10');
  solution = solution.replace('ln','Math.log');
  solution = solution.replace('√','Math.sqrt');
  solution = solution.replace('^','**');
  solution = solution.replace('sin','Math.sin');
  solution = solution.replace('cos','Math.cos');
  solution = solution.replace('tan','Math.tan');
  solution = solution.replace('round','Math.round');
  solution = solution.replace('π','Math.PI');
  solution = solution.replace('e','Math.E');
  solution = solution.replace('E*p','Math.exp');
  solution = solution.replace('abs','Math.abs');
  solution = solution.replace('!','Math.factorial');
  solution = solution.replace('random','Math.random');
  
  
  //  solution = solution.replace('!','Math.log10');//no builtin factorial function in js 
  return solution;
}

solve.addEventListener('click', () => {
    console.log('solve');
    solution = evaluateExpression(solution);



  try {
    solution = eval(solution);
    past.push (solution);
    solution=solution.toString();
    screen.value = Ans=solution;
   } catch (e) {
    screen.value = "Error";
    solution = '';
  }
})

for (btn of button) {
    btn.addEventListener('click', function ()  {
        console.log(this.innerText);
        // if(solution ==0){
        //     solution = this.innerText;
        // }
        // else{
            switch (this.innerText) {
                case 'AC':
                    solution = '';
                  break;
                case 'C':
                    solution = solution.substring(0, solution.length-1);
                  break;
                case 'x^y':
                    solution= `${solution}^`;
                  break;
                case 'random':
                    solution = `${solution}${this.innerText}()`; //to used soultion as string
                  break;
                case 'ln':
                case 'log':
                case '√':
                case 'sin':
                case 'cos':
                case 'tan':
                case 'Exp':
                case 'abs':
                    solution = `${solution}${this.innerText}(`; //to used soultion as string
                  break;
                // case 'π':
                //     solution= `${solution}π`;
                //   break;
                // case 'e':
                //     solution= `${solution}e`;
                //   break;
                default:
                  solution = `${solution}${this.innerText}`; //to used soultion as string
            //   }
        }
        screen.value = solution;
    });
}



Math.factorial = function(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = n; i > 1; i--) {
      result *= i;
  }
  return result;
};

function isNumeric(str) {
  return /^\d+$/.test(str);
}
