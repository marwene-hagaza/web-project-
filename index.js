const btn=document.getElementById("btn");
const btne1=document.getElementById("yatiksaha");
const ageee=document.getElementById("aggggge")
function calculateage(){
    const ok=btne1.value;
    if(ok==""){
        alert("a3tini date de naissance mata3k");
     }else{
        const age=getage(ok);
        ageee.innerHTML=`Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}
function getage(ok){
    const datelyoulma=new Date();
    const birthdayDate = new Date(ok)
    let age = datelyoulma.getFullYear() - birthdayDate.getFullYear();
    return age


}

btn.addEventListener("click",calculateage);