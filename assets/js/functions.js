$(document).ready(function() {
    $('#slug').fullpage({
        //verticalCentered: true,
        resize : true,
        sectionsColor : [],
        anchors:['slideOne', 'slideTwo', 'slideThree', 'slideFour', 'slideFive'],
        scrollingSpeed: 600,
        easing: 'easeOutExpo',
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['slideOne', 'slideTwo', 'slideThree', 'slideFour'],
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
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    
    });
});