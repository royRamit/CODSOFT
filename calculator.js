let calculation="";
function updateCalculation(value){
  if(value>=0&&value<=9){
    calculation+=value;
  }
  else{
    calculation+=value;
  }
  displayCalculation();
}
function displayCalculation(){
  document.querySelector('input').value=calculation;
}