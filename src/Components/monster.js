import React, { Component } from "react";
import { render } from "react-dom";
import $ from "jquery"

class Monster extends Component {
    componentDidMount() {
        console.log("monster ready!")
            $( ".monster" ).animate({
                top: "+=" + String($(window).height()-200),
            }, 500, function() {
                // Animation complete.
                console.log("animation complete");
            });

        setTimeout(function(){$( ".monster" ).attr("src", "monster_fall.gif");}, 150)
        setTimeout(function(){$( ".monster" ).attr("src", "standing.png");}, 1000)

        $(document).keydown(function(e){
            switch (e.which){
                case 37:    //left arrow key
                    $( ".monster" ).attr("src", "walk_left.gif");
                    $(".monster").finish().animate({
                        left: "-=20"
                    }, 50);
                    break;
                case 38:    //up arrow key
                    $(".monster").finish().animate({
                        top: "-=20"
                    }, 50);
                    break;
                case 39:    //right arrow key
                    $( ".monster" ).attr("src", "walk_right.gif");
                    $(".monster").finish().animate({
                        left: "+=20"
                    }, 50);
                    break;
                case 40:    //bottom arrow key
                    $(".monster").finish().animate({
                        top: "+=20"
                    }, 50);
                    break;
            }
        });
        $(document).keyup(function(e){
            setTimeout(function(){$( ".monster" ).attr("src", "standing.png");}, 800)
        });
    }
    render() {
        return (
            <img className="monster" src="standing.png"/>
        );
    }
}

export default Monster;