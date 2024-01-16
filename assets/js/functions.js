/**function showAnswer(idd){
    document.getElementById(idd).style.display = 'block';
    document.getElementById('image').src = 'assets/images/icon-minus.svg';
}**/


document.getElementById("question").addEventListener("click", test);

function test(){
    document.getElementById('answer').id = 'selected-answer';
}


