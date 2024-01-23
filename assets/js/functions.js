const questions = document.querySelectorAll('.question');
const iconsPlus = document.querySelectorAll('.icon-plus');
const answers = document.querySelectorAll('.answer');

questions.forEach(showContent);
iconsPlus.forEach(showContent);

function showContent(item, index){
    item.addEventListener('click', function(){
        hideContent();
        answers[index].classList.add('selected');
        iconsPlus[index].classList.add('imgselected');
        iconsPlus[index].src = "assets/images/icon-minus.svg"
    });
}

function hideContent(){
    const current = document.querySelector('.selected');
    const currentImg = document.querySelector('.imgselected');
    if(current == null || currentImg == null){
        return 0;
    }else{
        current.classList.remove('selected');
        currentImg.classList.remove('imgselected');
        currentImg.src = "assets/images/icon-plus.svg";
    }
}

