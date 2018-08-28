let selection = function () {
    for (let i = 1; i <= 5; i++) {
        if ($('#scroll-button-' + i).attr('src') === "assets/selected-button.svg") {
            return i;
        }
    }
};

let clearButtons = function () {
    for (let i = 1; i <= 5; i++) {
        let selector = $('#scroll-button-' + i);
        if (selector.attr('src') === "assets/selected-button.svg") {
            selector.attr('src', 'assets/unselected-button.svg');
        }
    }
    return true;
};

let hideAll = function () {
    for (let i = 1; i <= 5; i++) {
        let selector = $('#project-' + i);
        selector.addClass('hide');
    }
    $('#experience-underline').addClass('hide');
    $('#contact-underline').addClass('hide');
    $('#contact').addClass('hide');
};

const col = ['#EDEAD0', '#FFCF56', '#F4A07C', '#8F857D', '#F9A695', '#EDCB96'];

let colorChange = function (i) {
    $('body').css('background', col[i]);
    $('#experience-button').css('background', col[i]);
    $('#contact-button').css('background', col[i]);
    $('#scroll-list').css('background', col[i]);
    $('#experience-container').css('background', col[i]);
    $('#contact-container').css('background', col[i]);
};




$('#scroll-button-1').click(function () {

        if ((selection() !== 1) && clearButtons() && ($(this).attr('src') === "assets/unselected-button.svg")) {
            hideAll();
            $('#project-1').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(1);
        }
        else if ($(this).attr('src') === "assets/unselected-button.svg") {
            hideAll();
            $('#project-1').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(1);
        }
    }
);

$('#scroll-button-2').click(function () {

        if ((selection() !== 2) && clearButtons() && ($(this).attr('src') === "assets/unselected-button.svg")) {
            hideAll();
            $(this).attr('src', 'assets/selected-button.svg');
            $('#project-2').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            colorChange(2);
        }
        else if ($(this).attr('src') === "assets/unselected-button.svg") {
            hideAll();
            $(this).attr('src', 'assets/selected-button.svg');
            $('#project-2').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            colorChange(2);
        }
    }
);

$('#scroll-button-3').click(function () {

        if ((selection() !== 3) && clearButtons() && ($(this).attr('src') === "assets/unselected-button.svg")) {
            hideAll();
            $('#project-3').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(3);
        }
        else if ($(this).attr('src') === "assets/unselected-button.svg") {
            hideAll();
            $('#project-3').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(3);
        }
    }
);

$('#scroll-button-4').click(function () {

        if ((selection() !== 4) && clearButtons() && ($(this).attr('src') === "assets/unselected-button.svg")) {
            hideAll();
            $('#project-4').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(4);
        }
        else if ($(this).attr('src') === "assets/unselected-button.svg") {
            hideAll();
            $('#project-4').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(4);
        }
    }
);

$('#scroll-button-5').click(function () {

        if ((selection() !== 5) && clearButtons() && ($(this).attr('src') === "assets/unselected-button.svg")) {
            hideAll();
            $('#project-5').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(5);
        }
        else if ($(this).attr('src') === "assets/unselected-button.svg") {
            hideAll();
            $('#project-5').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(5);
        }
    }
);

$('#experience-button').click(function () {

        if ((selection() !== 1) && clearButtons()) {
            hideAll();
            $('#project-1').removeClass('hide');
            $('#experience-underline').removeClass('hide');
            $('#scroll-button-1').attr('src', 'assets/selected-button.svg');
            colorChange(1);
        }
    }
);

$('#contact-button').click(function () {

        clearButtons();
        hideAll();
        $('#contact').removeClass('hide');
        $('#contact-underline').removeClass('hide');
        colorChange(0);

    }
);



// Screw some shit up and rework on it? for animation
for(let i =1; i<=5;i++){
    $('#scroll-button-'+i).addClass('animated lightSpeedIn');
    $("#project-"+i).addClass('animated zoomIn fast');
}
$('#contact').addClass('animated zoomIn fast');
$('#experience-underline').addClass('animated fadeInRight');
$('#contact-underline').addClass('animated fadeInDown');

setTimeout(function(){
    for(let i =1; i<=5;i++){
        $('#scroll-button-'+i).removeClass('animated lightSpeedIn');
    }
}, 1000);
