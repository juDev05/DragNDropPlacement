/**
 * Created by j.mercier on 08/11/2015.
 */
(function($) {

    $.fn.visa = function(action,options){

        options = $.extend({
            container:{
                height:"594px",
                width:"420px",
                verticalPadding:"10px",
                horizontalPadding:"10px",
                border:{
                    style:"solid",
                    width:"1px",
                    color:"#000000"
                },
                color:"#000000",
                bgCol:"#ffffff"
            },
            draggable:{
                height:"32px",
                width:"64px",
                border:{
                    style:"solid",
                    width:"1px",
                    color:"#000000"
                },
                color:"#000000",
                "background-color":"#ffffff",
                text: "VISA",
                posX:100,
                posY:100
            }
        }, options);

        if (action == "getPosX") {
            return Math.trunc($('.draggable').offset().left - $('.draggable').parent().offset().left).toString();
        }

        if (action == "getPosY") {
            return Math.trunc($('.draggable').offset().top - $('.draggable').parent().offset().top).toString();
        }

        return this.each(function() {
            $(this).addClass('visaContainer');
            $(this).empty();
            $(this).append('<div class="draggable ui-widget-content text-center">'+options.draggable.text+'</div>');

            $('.draggable').draggable({
                containment:"parent"
            });

            $('.visaContainer').css({

                height:options.container.height,
                width:options.container.width,
                "padding-top": options.container.verticalPadding,
                "padding-left": options.container.horizontalPadding,
                "padding-bottom": options.container.verticalPadding,
                "padding-right": options.container.horizontalPadding,
                border: options.container.border.width+" "+options.container.border.style+" "+options.container.border.color,
                color: options.container.color,
                "background-color": options.container.bgCol
            });

            var padTop = parseInt(options.container.verticalPadding.substr(0,options.container.verticalPadding.length-2));
            var padLeft = parseInt(options.container.horizontalPadding.substr(0,options.container.horizontalPadding.length-2));

            $('.draggable').css({
                position: "relative",
                top: options.draggable.posY - padTop ,
                left: options.draggable.posX - padLeft,
                height:options.draggable.height,
                width:options.draggable.width,
                border: options.draggable.border.width+" "+options.draggable.border.style+" "+options.draggable.border.color,
                color: options.draggable.color,
                "background-color": options.draggable.bgCol
            });
        });
    };

})(jQuery);