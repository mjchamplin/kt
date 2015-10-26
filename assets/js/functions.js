$(document).ready(function() {
    $('#slug').fullpage({
        //verticalCentered: true,
        resize : true,
        sectionsColor : [],
        anchors:['home', 'copy', 'technical', 'creative', 'contact'],
        scrollingSpeed: 600,
        easing: 'easeOutExpo',
        menu: '.upper-nav',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['home', 'copy', 'technical', 'creative', 'contact'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        autoScrolling: true,
        scrollOverflow: false,
        css3: true,
        //paddingTop: '3em',
        //paddingBottom: '10px',
        //normalScrollElements: '#element1, .element2',
        //normalScrollElementTouchThreshold: 5,
        keyboardScrolling: true,
        //touchSensitivity: 3,
        continuousVertical: false,
        animateAnchor: true,
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){},
    
            onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 4 && direction =='down'){
                console.log("Going to content!");
                $('.overlay').css('opacity', '1');
                $('.interior-four').css('opacity','.5');

            }
            if(index == 5 && direction =='up'){
                $('.overlay').css('opacity', '0');
                $('.interior-four').css('opacity','1');
            }
        }
    });
});