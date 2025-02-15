const navItem = document.querySelectorAll("a");

navItem.forEach((item) =>{
    item.style.color = "blue";
    item.style.fontSize = "24px";
    item.style.padding = "24px 0px";
});
const boxes = document.querySelectorAll('.box');

let numberr = 1;
for( box of boxes){
    box.innerText = `box no ${numberr}`;
    numberr++;
}