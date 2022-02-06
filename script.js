function checkScore(){
    var quiz1=document.getElementById("question1");
    var quiz2=document.getElementById("question2");
    var quiz3=document.getElementById("question3");
    var quiz4=document.getElementById("question4");
    var quiz5=document.getElementById("question5");
    var score=0;

    for(var l=0,length=quiz1.length; l<length; l++){
        if(quiz1[l].checked){
            var answer1=quiz1[l].value
            if(quiz1[l].value==='A'){
                score+=5
            }
        }
    }
}


