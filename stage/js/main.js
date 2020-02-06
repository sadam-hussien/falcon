$(function () {

    // show and hide menu
    $("header .toggle_menu").on("click", function () {

        $(this).toggleClass("active");

        $(this).parents("header").find("nav.menu").toggleClass("active_menu");

    });

    // add active class on links
    $("header nav.menu li a").on("click", function (e) {

        e.preventDefault();

        $(this).addClass("active").parent().siblings("li").find("a").removeClass("active");

        console.log( $("." + $(this).data("section")));

        $("html, body").animate({

            scrollTop: $("." + $(this).data("section")).offset().top

        }, 1000);

    });

    // contact
    $(".contact input").on({

        "focus": function () {

            $(this).siblings("label").addClass("active_inp");

        },

        "blur": function () {

            if ($(this).val() == "") {

                $(this).siblings("label").removeClass("active_inp");

            }

        }

    })

    // scroll to top
    $("footer .footer_footer i").on("click", function () {

        $("html, body").animate({

            scrollTop: 0

        }, 1000)

    });

    // create counter 
    $(window).on("scroll", function () {

        if ($(this).scrollTop() >= $(".statistic").prev().offset().top + 400) {

            let counter = setInterval(function () {

                let elCount = $(".statistic .statis_item .count .number");
        
                elCount.each(function () {
                    
                    let getNumber = parseInt($(this).html());
        
                    let getDataNumber = $(this).data("statis");
        
                    if (getNumber != getDataNumber) {
            
                        $(this).html(getNumber + 1);
            
                    }
        
                });
        
            });


        }

    });

});