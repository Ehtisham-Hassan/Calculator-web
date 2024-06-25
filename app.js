let button = document.querySelectorAll('.btn');

// let calfunction =  function (btn)  {
//     console.log(btn.innerText);
// }
let past = [];
let solution =0;
let result ;
let screen = document.querySelector('input');

let solve = document.querySelector('#Total');

solve.addEventListener('click', () => {
    console.log('solve');
    solution = eval(solution);
    past.push (solution);
    screen.value = solution;
})

for (btn of button) {
    btn.addEventListener('click', function ()  {
        console.log(this.innerText);
        if(solution ==0){
            solution = this.innerText;
        }
        else{
            solution= `${solution}${this.innerText}`;
        }
        screen.value = solution;
    });
}

