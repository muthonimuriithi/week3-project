function check(){
    var a=0;
    
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;

    if(question1=="HTML") {a++}
    if(question2=="JS") {a++}
    if(question3=="Yes") {a++}
    if(question4=="script") {a++}
    if(question5=="Both the head and body section") {a++}
    document.write(a);
}


