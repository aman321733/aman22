function calculation(){
    let Git= parseInt(document.getElementById("mark1").value); 
let XML= parseInt(document.getElementById("mark2").value); 
let Javascript= parseInt(document.getElementById("mark3").value); 
let Paython= parseInt(document.getElementById("mark4").value); 
let PHP= parseInt(document.getElementById("mark5").value); 

let obt= Git+XML+Javascript+Paython+PHP;
if(Git>100 || XML>100 || Javascript>100 || Paython>100 ||  PHP>100){
    alert("Enter inavlid number");
}else{
    document.getElementById("obtain").innerText = obt;
    let per = (obt/500)*100;
    document.getElementById("per").innerText = per+"%";
    if(per>=80 && per<=100){
        document.getElementById("grade").innerHTML= "A-one";

    }else if(per>=70 && per<=80){
        document.getElementById("grade").innerText= "A-Grade";
    }else if(per>=60 && per<=70){
        document.getElementById("grade").innerText= "B-Grade";
    }else if(per>=60 && per<=70){
        document.getElementById("grade").innerText= "C-Grade";
    }else if(per>=50 && per<=60){
        document.getElementById("grade").innerText= "D-Grade";
    }
    if(Git>40 || XML>40 || Javascript>40 || Paython>40 ||  PHP>40){
        document.getElementById("Remarks").innerHTML="fail"

    }else{
        document.getElementById("Remarks").innerHTML="pass"
    }

}
}
    

