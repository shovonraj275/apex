

let cratval = 0;
function addcart(){
    cratval =cratval+1;
    document.querySelector('.ic_po_ab_cart').innerHTML =cratval;
}

let favVal = 0;
function addfav(){
    favVal =favVal+1;
    document.querySelector('.ic_po_ab_fav').innerHTML =favVal;
}













// let val= 0;
// function cart(){
//     val= val + 1;
//     document.querySelectorAll('.ic_po_ab_cart').innerHTML = val;
// }
// let btn = document.querySelectorAll(".btn_crat");
// btn.addEventListener("click" , cart);

// // fav
// let val2= 0;
// function fav(){
//     val2= val2 + 1;
//     document.querySelector('.ic_po_ab_fav').innerHTML = val2;
// }
// let btn3 = document.querySelector(".btn_fav");
// btn3.addEventListener("click" , fav);