let swipelefthandler = function(i){
    let currselectionbutton = $('#scroll-button-'+i);
    let nextselectionbutton = $('#scroll-button-'+(i+1));
    if(i>=1 && i<5){
        currselectionbutton.attr('src','assets/unselected-button.svg');
        nextselectionbutton.attr('src','assets/selected-button.svg');
        nextselectionbutton.addClass('animated rubberBand');
        $('#project-'+i).addClass('hide');
        $('#project-'+(i+1)).removeClass('hide');
        colorChange(i+1);
    }
    else{
        nextselectionbutton = $('#scroll-button-1');
        currselectionbutton.attr('src','assets/unselected-button.svg');
        nextselectionbutton.attr('src','assets/selected-button.svg');
        nextselectionbutton.addClass('animated rubberBand');
        console.log()
        $('#project-5').addClass('hide');
        $('#project-1').removeClass('hide');
        colorChange(1);
    }
    setTimeout(function(){
        nextselectionbutton.removeClass('animated rubberBand');
    },500);
};

let swiperighthandler = function(i){
    let currselectionbutton = $('#scroll-button-'+i);
    let nextselectionbutton = $('#scroll-button-'+(i-1));
    if(i>1 && i<=5){
        currselectionbutton.attr('src','assets/unselected-button.svg');
        nextselectionbutton.attr('src','assets/selected-button.svg');
        nextselectionbutton.addClass('animated rubberBand');
        $('#project-'+i).addClass('hide');
        $('#project-'+(i-1)).removeClass('hide');
        colorChange(i-1);
    }
    else{
        nextselectionbutton = $('#scroll-button-5');
        currselectionbutton.attr('src','assets/unselected-button.svg');
        nextselectionbutton.attr('src','assets/selected-button.svg');
        nextselectionbutton.addClass('animated rubberBand');
        $('#project-1').addClass('hide');
        $('#project-5').removeClass('hide');
        colorChange(5);
    }
    setTimeout(function(){
        nextselectionbutton.removeClass('animated rubberBand');
    },500);

};

let selproj1 = $('#project-1');
let selproj2 = $('#project-2');
let selproj3 = $('#project-3');
let selproj4 = $('#project-4');
let selproj5 = $('#project-5');


selproj1.on("swipeleft", function(){swipelefthandler(1)});
selproj2.on("swipeleft", function(){swipelefthandler(2)});
selproj3.on("swipeleft", function(){swipelefthandler(3)});
selproj4.on("swipeleft", function(){swipelefthandler(4)});
selproj5.on("swipeleft", function(){swipelefthandler(5)});

selproj1.on("swiperight", function(){swiperighthandler(1)});
selproj2.on("swiperight", function(){swiperighthandler(2)});
selproj3.on("swiperight", function(){swiperighthandler(3)});
selproj4.on("swiperight", function(){swiperighthandler(4)});
selproj5.on("swiperight", function(){swiperighthandler(5)});
