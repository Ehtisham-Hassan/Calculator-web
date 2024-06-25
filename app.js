let button = document.querySelectorAll('.btn');

// let calfunction =  function (btn)  {
//     console.log(btn.innerText);
// }
let past = [];
let solution =0;
let result ;
let Ans= '0';
let screen = document.querySelector('input');

let solve = document.querySelector('#Total');

solve.addEventListener('click', () => {
    console.log('solve');
    solution= solution.replace('x','*');
    solution= solution.replace('Ans',Ans);

    solution = eval(solution);
    past.push (solution);
    solution=solution.toString();
    screen.value = Ans=solution;
})

for (btn of button) {
    btn.addEventListener('click', function ()  {
        console.log(this.innerText);
        if(solution ==0){
            solution = this.innerText;
        }
        else{
            switch (this.innerText) {
                case 'C':
                    solution = solution.substring(0, solution.length-1);
                  break;
                case 'Rad':
                    console.log('Add radian function')
                  break;
                case 'Deg':
                    console.log('Add Degree function')
                  break;
                case 'x!':
                    solution= `${solution}!`;
                    break;
                case 'x^y':
                    solution= `${solution}^`;
                  break;
                case 'ln':
                    solution= `${solution}ln(`;
                  break;

                default:
                  solution= `${solution}${this.innerText}`;//to used soultion as string
              }
        }
        screen.value = solution;
    });
}

