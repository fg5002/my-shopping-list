
const txt=document.querySelector('#text');
const list=document.querySelector('ul');

window.onload=()=>init();

function init(){
    document.querySelector('#btn-add').onclick=()=> newText();
    document.querySelector('#text').onkeyup=(event)=>{
        if(event.keyCode==13)
            newText(); 
    };
    txt.focus();
}

function newText(){
    txt.value ? addItem(txt.value) : null;
    clearInput();
}

function addItem(t){
    const nli = document.querySelector('#newitem').content.cloneNode(true);
    nli.querySelector('span').textContent=t;
    nli.querySelector('.delete').onclick=(res)=> deleteItem(res.target);
    list.appendChild(nli);
}

function deleteItem(s){
    list.removeChild(s.parentNode);
    clearInput();
}

function clearInput(){
    txt.value="";
    txt.focus();
}