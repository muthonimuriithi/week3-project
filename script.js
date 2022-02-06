function checkScore(){
   var quiz1=document.getElementsByName(question1);
   var quiz2=document.getElementsByName(question2);
   var quiz3=document.getElementsByName(question3);
   var quiz4=document.getElementsByName(question4);
   var quiz5=document.getElementsByName(question5);

   var c=0;
   for(var i=0, length=quiz1.length;i<length;i++){
       if(quiz1[i].checked){
           var ans1=quiz1[i].value; 
           if(quiz1[i].value==='A'){
               c+=2
           }
       }
   }
   document.getElementById("submission").value="your score is"+c;
}



