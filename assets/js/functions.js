/**function showAnswer(idd,img){
    document.getElementById(idd).style.display = 'block';
    document.getElementById(img).src = 'assets/images/icon-minus.svg';
}


document.getElementById("question").addEventListener("click", test);

function test(){
    document.getElementById('answer').id = 'selected-answer';
}**/

//Passo 1 - Pegar as perguntas e respostas
const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');

//Passo 2 - Adicionar a classe selecionada no parágrafo quando clica no título
question.forEach((questions) =>{
    questions.addEventListener('click', () =>{
        answer.forEach((answers) =>{
            answers.classList.add('selected');
        })
    })
})


