// const col = ['#EDEAD0', '#FFCF56', '#F4A07C', '#E2CFEA', '#F9A695', '#EDCB96'];
const col = ['#EBEBEB',
    '#ea4335',
    '#34a853',
    '#4286f4',
    '#fbbc05',
    '#f2f2f2'];

//Laptop
let expButtonSelector = $('#experience-button');
let contactButtonSelector = $('#contact-button');

let logoSelector = $('#logo');

//Mobile
let XPButtonSelector = $('#XPbutton');
let CONTButtonSelector = $('#CONTbutton');


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
    $('#experience-underline').addClass('partial_hide');
    $('#contact-underline').addClass('partial_hide');
    $('#contact').addClass('hide');
    $('#splash-screen-content').addClass('hide');
};

let killTween = function()
{

};
let tl = new TimelineLite;

let colorChange = function (col_id) {


    // [$('#bg-0'), $('#bg-1'), $('#bg-2'), $('#bg-3'), $('#bg-4'), $('#bg-5')]


    tl.progress(1);



    tl.staggerFromTo(["#bg-1", "#bg-2", "#bg-3", "#bg-4", "#bg-5"],
        0.75,
        {width: "0vw"},
        {width: "100vw", background: col[col_id]},
        0.25
    ).to("#bg-0", 0,{background: col[col_id]});


};

let hover_in = function () {
    TweenLite.to($(this), 1, {scale: 1.1});
};

let hover_out = function () {
    TweenLite.to($(this), 1, {scale: 1});
};

//Hover stuff
expButtonSelector.hover(
    hover_in,
    hover_out
);

contactButtonSelector.hover(
    hover_in,
    hover_out
);

logoSelector.hover(
    hover_in,
    hover_out
);



$('#scroll-button-1').click(function () {

        if ((selection() !== 1) && clearButtons() && ($(this).attr('src') === "assets/unselected-button.svg")) {
            hideAll();
            $('#project-1').removeClass('hide');
            $('#experience-underline').removeClass('partial_hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(1);
        }
        else if ($(this).attr('src') === "assets/unselected-button.svg") {
            hideAll();
            $('#project-1').removeClass('hide');
            $('#experience-underline').removeClass('partial_hide');
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
            $('#experience-underline').removeClass('partial_hide');
            colorChange(2);
        }
        else if ($(this).attr('src') === "assets/unselected-button.svg") {
            hideAll();
            $(this).attr('src', 'assets/selected-button.svg');
            $('#project-2').removeClass('hide');
            $('#experience-underline').removeClass('partial_hide');
            colorChange(2);
        }
    }
);

$('#scroll-button-3').click(function () {

        if ((selection() !== 3) && clearButtons() && ($(this).attr('src') === "assets/unselected-button.svg")) {
            hideAll();
            $('#project-3').removeClass('hide');
            $('#experience-underline').removeClass('partial_hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(3);
        }
        else if ($(this).attr('src') === "assets/unselected-button.svg") {
            hideAll();
            $('#project-3').removeClass('hide');
            $('#experience-underline').removeClass('partial_hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(3);
        }
    }
);

$('#scroll-button-4').click(function () {

        if ((selection() !== 4) && clearButtons() && ($(this).attr('src') === "assets/unselected-button.svg")) {
            hideAll();
            $('#project-4').removeClass('hide');
            $('#experience-underline').removeClass('partial_hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(4);
        }
        else if ($(this).attr('src') === "assets/unselected-button.svg") {
            hideAll();
            $('#project-4').removeClass('hide');
            $('#experience-underline').removeClass('partial_hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(4);
        }
    }
);

$('#scroll-button-5').click(function () {

        if ((selection() !== 5) && clearButtons() && ($(this).attr('src') === "assets/unselected-button.svg")) {
            hideAll();
            $('#project-5').removeClass('hide');
            $('#experience-underline').removeClass('partial_hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(5);
        }
        else if ($(this).attr('src') === "assets/unselected-button.svg") {
            hideAll();
            $('#project-5').removeClass('hide');
            $('#experience-underline').removeClass('partial_hide');
            $(this).attr('src', 'assets/selected-button.svg');
            colorChange(5);
        }
    }
);

//Experience Buttons
expButtonSelector.click(function () {

        if ((selection() !== 1) && clearButtons()) {
            hideAll();
            let underlineSelector = $('#experience-underline');
            $('#project-1').removeClass('hide');
            underlineSelector.removeClass('partial_hide');

            underlineSelector.addClass('animated fadeInRight');
            setTimeout(function () {
                underlineSelector.removeClass('animated fadeInRight');
            }, 1000);

            $('#scroll-button-1').attr('src', 'assets/selected-button.svg');
            colorChange(1);
        }
    }
);


XPButtonSelector.click(function () {

        $(this).addClass('animated wobble');

        setTimeout(function () {
            $('#XPbutton').removeClass('animated wobble');
        }, 1000);

        if ((selection() !== 1) && clearButtons()) {
            hideAll();
            $('#project-1').removeClass('hide');
            $('#scroll-button-1').attr('src', 'assets/selected-button.svg');
            colorChange(1);
        }
    }
);


//Contact Buttons
contactButtonSelector.click(function () {

        let underlineSelector = $('#contact-underline');
        clearButtons();
        hideAll();
        $('#contact').removeClass('hide');
        underlineSelector.removeClass('partial_hide');
        underlineSelector.addClass('animated fadeInDown');

        setTimeout(function () {
            underlineSelector.removeClass('animated fadeInDown');
        }, 1500);

        colorChange(0);
    }
);

CONTButtonSelector.click(function () {

        $(this).addClass('animated wobble');

        setTimeout(function () {
            $('#CONTbutton').removeClass('animated wobble');
        }, 1000);

        clearButtons();
        hideAll();
        $('#contact').removeClass('hide');
        colorChange(0);


    }
);

//Logo Button
logoSelector.click(function () {
    clearButtons();
    hideAll();
    $('#splash-screen-content').removeClass('hide');
    colorChange(0);
});


// Animations and Touchups
for (let i = 1; i <= 5; i++) {
    $('#scroll-button-' + i).addClass('animated lightSpeedIn');
    $("#project-" + i).addClass('animated zoomIn fast');
}
$('#contact').addClass('animated zoomIn fast');


CONTButtonSelector.addClass('animated slideInDown');
XPButtonSelector.addClass('animated slideInDown');

//Hax
setTimeout(function () {
    for (let i = 1; i <= 5; i++) {
        $('#scroll-button-' + i).removeClass('animated lightSpeedIn');
    }
    CONTButtonSelector.removeClass('animated slideInDown');
    XPButtonSelector.removeClass('animated slideInDown');
}, 1000);

let splashselector = $('#splash-screen-content');
splashselector.removeClass('hide');
splashselector.addClass('animated zoomIn fast');

