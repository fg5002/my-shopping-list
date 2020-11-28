
const txt=document.querySelector('#text');
const list=document.querySelector('ul');

window.onload=()=>init();

function init(){
    document.querySelector('#btn-add').onclick=()=>{
        newitem(txt.value);
        clearInput();
    };
    txt.focus();
}

function newitem(t){
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