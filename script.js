const btn = document.querySelectorAll(".btn");
const display = document.querySelector("#display");
const ac = document.querySelector("#clear");
// const del = document.querySelector("#delete");
const equal = document.querySelector(".equal");

for (const buttons of btn) {
    buttons.addEventListener('click',function() {
        display.value += buttons.value;
    });
}

ac.addEventListener('click',()=>{
display.value= "";
});

// del.addEventListener('click',()=>{
//     display.value=display.value.toString().slice(0,-1);
// })

equal.addEventListener('click', ()=>{
    display.value=eval(display.value);
});
