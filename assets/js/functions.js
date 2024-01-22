const questions = document.querySelectorAll('.question');
const questionsImages = document.querySelectorAll('.icon-plus');
const answers = document.querySelectorAll('.answer');

questions.forEach(showContent);
questionsImages.forEach(showContent);
//Falta trocar a imagem quando clica de mais para menos

function showContent(item, index){
    item.addEventListener('click', () =>{
        hideContent();
        answers[index].classList.add('selected');
    })
}

function hideContent(){
    const toHide = document.querySelector('.selected');
    if(toHide == null){
        return 0;
    }else{
        toHide.classList.remove('selected');
    }
}