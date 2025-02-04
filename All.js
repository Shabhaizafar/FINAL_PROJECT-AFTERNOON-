const addcode_editer = document.querySelector('.btn1');
const layer_ul = document.querySelector('.layer-list');
const body = document.body;
const btn5  = document.querySelector(".btn5");

addcode_editer.addEventListener('click',function(){
    document.querySelector('.txt-editer').style.display = "block";
    var li = document.createElement('li');
    document.querySelector('.layer-list').appendChild(li);
    var txt = `<span class="material-symbols-outlined">
                                apps
                            </span> <b>Code</b>
                            <div>
                                <span class="material-symbols-outlined">
                                    visibility
                                </span>
                                <span class="material-symbols-outlined">
                                    content_copy
                                </span>
                                <span class="material-symbols-outlined">
                                   close
                               </span>
                            </div>`;
    li.innerHTML = txt;
    document.querySelector('.layer-list').appendChild(li);
    console.log(document.querySelector('.layer-list').children);
});
layer_ul.addEventListener('click',function(event){
    if(event.target.innerText == "visibility"){
        // event.target.parentElement.parentElement.remove();
        document.querySelector('.txt-editer').style.display = "none";
        event.target.innerText = "visibility_off";
    }
    else if(event.target.innerText == "visibility_off"){
        document.querySelector('.txt-editer').style.display = "block";
        event.target.innerText = "visibility";
    }
    else if(event.target.innerText == "close"){
        event.target.parentElement.parentElement.remove();
        document.querySelector('.txt-editer').style.display = "none";
    }
});


// -----------------------


btn5.onclick = function(){
    document.querySelector('.submenu').classList.toggle('add-block');
}

// ----------------------

body.addEventListener('click',function(event){
    if((event.target.tagName == 'LI' || event.target.tagName == 'B') && event.target.innerText.includes('Code')){
        document.querySelector('.all-btns').classList.add('remove-block');
        document.querySelector('.code-side').classList.add('add-block');
    }
},true);


// --------------------------
const print_ptn = document.querySelector('.print-ptn');
print_ptn.addEventListener('click',function(){
    print();
});

// ----------------------------
const login_btn = document.querySelector('.login-btn');
login_btn.onclick = function (){
    location.href = "form.html";
}