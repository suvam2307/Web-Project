
function calculate(){
    var height=parseFloat(document.getElementById('height').value);
    var weight=parseFloat(document.getElementById('weight').value);
    console.log(height)
    console.log(weight)
    var bmi=weight/Math.pow(height,2);
//    const para=document.createElement('p');
//    const node=document.createTextNode(bmi.toString());
//    para.appendChild(node);
const element =document.getElementById('vis');
   element.innerHTML=bmi.toString()
}