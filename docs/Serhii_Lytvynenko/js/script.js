"use strict";
//Drop-down menu
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li /> ', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active_mobile').not(this).each(function(){
            $(this).removeClass('active_').next('ul.select-options').hide();
        });
        $(this).toggleClass('active_').next('ul.select-options').toggle();
    });
    $listItems.click(function(e) {
        e.stopPropagation();
        if($(this).text()!=="Inimitable"){
            $styledSelect.text($(this).text()).removeClass('active_');
        }
        $list.hide();
    });

    $(document).click(function() {
        $styledSelect.removeClass('active_');
        $list.hide();
    });

});









//Slider
let magnificentHTML = `
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. consequat sunt nostrud amet. <br>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                   <div class="slider">
                       <input checked type="radio" name="respond" id="s0">
                       <article id="slider">
                            <input checked type="radio" name="slider" id="s1">
                            <input type="radio" name="slider" id="s2">
                            <input type="radio" name="slider" id="s3">
                            <div id="slider_slides">
                                <div class="overflow">
                                    <div class="image">
                                        <article> <img src="./img/m1.png" alt=""></article>
                                        <article> <img src="./img/m2.png" alt=""></article>
                                        <article> <img src="./img/m1.png" alt=""></article>
                                    </div>
                                </div>
                            </div>
                            <div id="controls">
                                <label for="s1"></label>
                                <label for="s2"></label>
                                <label for="s3"></label>
                            </div>
                            <div id="active">
                                <label for="s1"></label>
                                <label for="s2"></label>
                                <label for="s3"></label>
                            </div>
                       </article>
                    </div>`;
let unrivalledHTML = `
                  <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. <br> <br> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
                   <div class="slider">
                       <input checked type="radio" name="respond" id="s0">
                       <article id="slider">
                            <input checked type="radio" name="slider" id="s1">
                            <input type="radio" name="slider" id="s2">
                            <input type="radio" name="slider" id="s3">
                            <input type="radio" name="slider" id="s4">
                            <div id="slider_slides">
                                <div class="overflow">
                                    <div class="image">
                                        <article> <img src="./img/u1.png" alt=""></article>
                                        <article> <img src="./img/u2.png" alt=""></article>
                                        <article> <img src="./img/u1.png" alt=""></article>
                                        <article> <img src="./img/u2.png" alt=""></article>
                                    </div>
                                </div>
                            </div>
                            <div id="controls">
                                <label for="s1"></label>
                                <label for="s2"></label>
                                <label for="s3"></label>
                                <label for="s4"></label>
                            </div>
                            <div id="active">
                                <label for="s1"></label>
                                <label for="s2"></label>
                                <label for="s3"></label>
                                <label for="s4"></label>
                            </div>
                       </article>
                    </div>`;

let menuMobile = document.querySelector('.menuMobile');
let magnificentBtn = document.querySelectorAll(".switch_blocks");
let menuLi = document.querySelectorAll("li");
let textAndSlider = document.querySelector('.textAndSlider');
let selected = 'magnificent';
menuLi[0].addEventListener("click", magnificent);
menuLi[3].addEventListener("click", magnificent);

menuLi[1].addEventListener("click", unrivalledAdd);
menuLi[4].addEventListener("click", unrivalledAdd);

magnificentBtn[0].addEventListener("click", magnificent);
magnificentBtn[1].addEventListener("click", unrivalledAdd);

textAndSlider.insertAdjacentHTML("afterbegin", magnificentHTML);
magnificentBtn[0].classList.add('active');
menuLi[0].classList.add('active');
menuLi[3].classList.add('active_mobile');

menuMobile.addEventListener("click", menuClick);
let selectStyled = document.querySelector(".select-styled");
function magnificent(){
    if(selected!='magnificent'){
        for(let i = 0; i < magnificentBtn.length; i++){
            magnificentBtn[i].classList.remove('active');
            menuLi[i].classList.remove('active');
            menuLi[i].classList.add('active_mobile');
        }
        magnificentBtn[0].classList.add('active');
        menuLi[0].classList.add('active');
        menuLi[4].classList.remove('active_mobile');
        menuLi[3].classList.add('active_mobile');
        textAndSlider.style.opacity = 0;
        setTimeout(magnificentAdd, 500);
        function magnificentAdd(){
            while (textAndSlider.firstChild){
            textAndSlider.removeChild(textAndSlider.firstChild);
            }
            textAndSlider.insertAdjacentHTML("afterbegin",magnificentHTML); textAndSlider.style.opacity = 1;
        }
        selected = 'magnificent';
    }
}


function unrivalledAdd(){
    if(selected!='unrivalled'){
        for(let i = 0; i < magnificentBtn.length; i++){
            magnificentBtn[i].classList.remove('active');
            menuLi[i].classList.remove('active');
        }
        magnificentBtn[1].classList.add('active');
        menuLi[1].classList.add('active');

        menuLi[3].classList.remove('active_mobile');
        menuLi[4].classList.add('active_mobile');
        textAndSlider.style.opacity = 0;
        setTimeout(magnificentAdd, 500);
        function magnificentAdd(){
            while (textAndSlider.firstChild){
            textAndSlider.removeChild(textAndSlider.firstChild);
            }
            textAndSlider.insertAdjacentHTML("afterbegin",unrivalledHTML); textAndSlider.style.opacity = 1;
        }
        selected = 'unrivalled';
    }
}

function menuClick(){
    if(selectStyled.className!='select-styled active_'){
         setTimeout('selectStyled.click()', 1);
    }
}
