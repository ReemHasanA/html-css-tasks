document.getElementById('submit').disabled = true;
let pas=document.getElementById('pass');
let mail=document.getElementById('Email');
let Phon=document.getElementById('Phone');
 function final(){
        if ((pas.value.match(pas2)) && (Phon.value.match(Phon2))&& (mail.value.match(mail2))) {
            document.getElementById('submit').disabled = false;
    }}
    let pas2=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&]{6,18}$/;
function CheckPassword() {
    
    if (pas.value.match(pas2)) {
        document.getElementById('errPass').innerHTML=` `
        final()
    }else{
        document.getElementById('errPass').innerHTML=`<img src="images/x.svg" width="10px" alt="error">The password must be at least 6 characters.<br>`
        
    }

    // if (pas.length<6 || pas.length>18) {
       
    //     document.getElementById('errPass').innerHTML=`<img src="images/x.svg" width="10px" alt="error">The password must be at least 6 characters.<br>`
    // }
}

    let mail2=/^[^ ]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;
function CheckEmail() {
    if (mail.value.match(mail2)) {
        document.getElementById('errMail').innerHTML=` `
        final()
    }else{
         document.getElementById('errMail').innerHTML=`<img src="images/x.svg" width="10px" alt="error">unvalid Email.<br>`
         
     }
}
    let Phon2= /^(077)\d{7}$/;
function CheckPhone() {
    if (Phon.value.match(Phon2)) {
        document.getElementById('errPhone').innerHTML=` `
        final();
    }else{
         document.getElementById('errPhone').innerHTML=`<img src="images/x.svg" width="10px" alt="error">unvalid Phone.<br>`
    }
}
function AddInput() {
    localStorage.setItem("Email", mail.value);
    localStorage.setItem("pass", pas.value);
    window.open('exercise1.html', '_blank')
}
const button = document.querySelector('#login')

// add click event listener
button.addEventListener('click', () => {
  // open a new tab
  const tab = window.open('logIn.html', '_blank')
})