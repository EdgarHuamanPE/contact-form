
/* set functionality of  radio button*/
const frmbgs=document.querySelectorAll(".formulario__background");
const frmradios=document.querySelectorAll(".formulario__radio");
const frm=document.querySelector(".formulario__form");

/* get doms form controls   */
const firstname=document.querySelector("#firstname");
const validfirstname=document.querySelector(".formulario__errmessage--firstname");

const lastname=document.querySelector("#lastname");
const validlastname=document.querySelector(".formulario__errmessage--lastname");

const emailaddress=document.querySelector("#emailaddress");
const validemailaddressreq=document.querySelector(".formulario__errmessage--emailaddress");
const validemailaddressval=document.querySelector(".formulario__errmessage--emailaddressvalid");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const radios=document.getElementsByName("querytype");
const messagevalidradios=document.querySelector(".formulario__errmessage--radios");

let validradios=false;

const txtarea=document.querySelector(".formulario__input--txtarea");
const messagetxtarea=document.querySelector(".formulario__message--textarea");

const checkbox=document.querySelector(".formulario__input--checkbox");
const messagecheckbox=document.querySelector(".formulario__message--checkbox");
const success=document.querySelector(".formulario__success");

/* set functionality of  radio button*/
frmbgs.forEach((frmbg)=>{
    frmbg.addEventListener('click',(e)=>{
        frmradios.forEach((radio)=>{
            radio.style.backgroundColor="";
        });
        if(!e.target.nextSibling.nextSibling.checked){
            e.target.nextSibling.nextSibling.checked=true;
            e.target.nextSibling.nextSibling.parentNode.style.backgroundColor="var(--Green-200)"
        }else{
            e.target.nextSibling.nextSibling.checked=false;
            e.target.nextSibling.nextSibling.parentNode.style.backgroundColor=""
        }
    });
});

/* manager submit of form */
frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    /*set state of component */
    validfirstname.style.display="none" ;
    firstname.style.border="1px solid var(--Grey-500)";
    /* show message error */
    if(firstname.value.trim()===""){
        validfirstname.style.display="block" ;
        firstname.style.border="1px solid var(--Red)";
    }
    
    /*set state of component */
    validlastname.style.display="none" ;
    lastname.style.border="1px solid var(--Grey-500)";
    /* show message error */
    if(lastname.value.trim()===""){
        validlastname.style.display="block" ;
        lastname.style.border="1px solid var(--Red)";
    }
    
    /*set state of component */
    validemailaddressreq.style.display="none" ;
    emailaddress.style.border="1px solid var(--Grey-500)"; 
    validemailaddressval.style.display="none";
    /* show message error */
    if(emailaddress.value.trim()===""){
        validemailaddressreq.style.display="block" ;
        emailaddress.style.border="1px solid var(--Red)";
    }else{
        if(!emailRegex.test(emailaddress.value)){
            validemailaddressval.style.display="block" ;
            emailaddress.style.border="1px solid var(--Red)";
        }
    }
    
    /*set state of component */  
    messagevalidradios.style.display="none" ; 
    validradios=false;

    radios.forEach((rad)=>{
        if(rad.checked){
            validradios=true;
        }
    });
    /* show message error */
    if (!validradios) {
        messagevalidradios.style.display="block" ;
    }else{
        messagevalidradios.style.display="none" ;
    }

    /*set state of component */
    messagetxtarea.style.display="none" ;
    txtarea.style.border="1px solid var(--Grey-500)";
    /* show message error */
    if (txtarea.value.trim()==="") {
        messagetxtarea.style.display="block" ;
        txtarea.style.border="1px solid var(--Red)";
    }

    if (!checkbox.checked) {
        messagecheckbox.style.display="block" ;
    }else{
        messagecheckbox.style.display="none" ;
    }
    
    /* Evaluar el resultado total*/
    if(firstname.value.trim()==="" || lastname.value.trim()===""||emailaddress.value.trim()==="" || !emailRegex.test(emailaddress.value) || !validradios || txtarea.value.trim()==="" || !checkbox.checked){
        console.error('validation form');
    }else{
        success.style.opacity="1";
        success.style.transform="translateY(0px)";
    }

}); 