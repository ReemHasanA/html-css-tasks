let Price1= document.getElementById(`price1`).innerHTML;
let Price2= document.getElementById(`price2`).innerHTML;
let Price3= document.getElementById(`price3`).innerHTML;

let productN1= document.getElementById('name1');
let productN2= document.getElementById('name2');
let productN3= document.getElementById('name3');

console.log("name");
console.log(productN1);
function total() {
    sum=900*i+150*j+60*c;
    console.log(sum);
    document.getElementById('Total').innerHTML=sum;
}

function add1() {
    document.getElementById(`item1G`).style='display:flex';
    i=1;
    total();
} 
function add2() {
    document.getElementById(`item2G`).style='display:flex';
    j=1;
    total();
} 
function add3() {
    document.getElementById(`item3G`).style='display:flex';
    c=1;
    total();
} 
function change1() {
    ++i;
    document.getElementById('count1').innerHTML=i;
    total();
}
function change2() {
    ++j;
    document.getElementById('count2').innerHTML=j;
    total();
}
function change3() {
    ++c;
    document.getElementById('count3').innerHTML=c;
    total();
}

function chang1() {
    i--
    total()
    document.getElementById('count1').innerHTML=i;
    if (i<=0) {
        document.getElementById(`item1G`).style='display:none';   
    }
}
function chang2() {
    j--
    total()
    document.getElementById('count2').innerHTML=j;
    if (j<=0) {
        document.getElementById(`item2G`).style='display:none';   
    }
}
function chang3() {
    c--
    total()
    document.getElementById('count3').innerHTML=c;
    if (c<=0) {
        document.getElementById(`item3G`).style='display:none';   
    }
}

function addInput() {
    let item=[
        {'product':productN1.textContent , 'price':Price1, 'count': i},
        {'product':productN2.textContent , 'price':Price2, 'count': j},
        {'product':productN3.textContent , 'price':Price3, 'count': c},
    ]
    let newItem=JSON.stringify(item);
    localStorage.setItem("testJSON", newItem);
}