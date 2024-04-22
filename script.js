var input_text=document.getElementById('in_field');
var interface=document.getElementsByClassName('interface');
function user_question()
{
   var para= document.createElement('p');
   para.innerHTML =input_text.value;
   console.log(input_text.value)
   interface.append(para);
}