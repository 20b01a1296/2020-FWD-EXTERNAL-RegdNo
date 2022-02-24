let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    let name=document.getElementById("name");
    if (name.value===""){
        document.getAnimations("nameid").innerHTML="pls enter name";
 }
 else{
     document.get("nameid").innerHTML="";
 }
 let mail=document.getElementById("mail").value;
 if(mail===""){
     document.get("mailid").innerHTML="pls enter email";
 }
 else if(mail.match(/^[a-z A-Z 0-9 @gmail.com]$/)=false){
     document.get("mailid").innerHTML="Enter in @gmail.com format";
}
else{
    document.get("mailid").innerHTML=="";
}
let number=document.getElementById("number");
if(number.length!=10 &&number.match(/^\[0-9]{10})$/)){
    document.get(numberid).innerHTML="Enter 10 digits";
}
else{
    document.get(numberid).innerHTML="";
}
let pass =document.getElementById("pass").value;
if(pass.length<10){
    document.get("passid").innerHTML="Enter above 10 characters";
}
else{
    document.get("passid").innerHTML="";
}


    
})


    