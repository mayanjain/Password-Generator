const generated_pw = document.querySelector('.gen-password');
const length = document.querySelector('#pw-len')
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');
const generate_btn = document.querySelector('.generate-btn');
const copy = document.querySelector('.copy-pw');

generate_btn.addEventListener('click',generatePassword);
copy.addEventListener('click',copyText);

function getUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26+65));
}

function getLower(){
    return String.fromCharCode(Math.floor(Math.random()*26+97));
}

function getNumber(){
    return Math.floor(Math.random()*10);
}

function getSymbol(){
    const symbols = "!@#$%^&*()_+=";
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePassword(){
    if(length.value>20)length.value=20;
    if(length.value<4)length.value=4;
    const len = length.value;
    let password = "";
    if(upper.checked){
        password+=getUpper();
    }
    if(lower.checked){
        password+=getLower();
    }
    if(number.checked){
        password+=getNumber();
    }
    if(symbol.checked){
        password+=getSymbol();
    }
    for(let i=password.length ; i<len ; i++){
        const p=generateP();
        password+=p;
    }
    generated_pw.textContent=password;
}

function generateP(){
    let p="";
    if(upper.checked){
        p+=getUpper();
    }
    if(lower.checked){
        p+=getLower();
    }
    if(number.checked){
        p+=getNumber();
    }
    if(symbol.checked){
        p+=getSymbol();
    }
    if(p.length === 0)return "";
    return p[Math.floor(Math.random()*p.length)];
}

function copyText() {
    const textarea = document.createElement("textarea");
    const password = generated_pw.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
}