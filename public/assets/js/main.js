(function(){
        "use strict";
        var windowWidth = $(window).width();
        var windowHeight =  $(window).height();

        /* mobile menu */
        $('.navbar-toggle').on('click',function(){
          $(this).toggleClass('open');
        });
        function mobileMenu(selector,dropdown){
            $(selector + '> a').on('click', function(){
                $(this).siblings(dropdown).slideToggle();
                $(dropdown).not($(this).siblings(dropdown)).slideUp();
                $('.hk_dropdwon').not($(this).siblings('.hk_dropdwon')).slideUp();
                $('.hk_megamenu').not($(this).siblings('.hk_megamenu')).slideUp();
            }).removeAttr('href');
        }
        if(windowWidth < 768){
            $('.dropdwon').hide();
            mobileMenu('.has_dropdown','.dropdwon');
        }

        //Click event to scroll to top
      	$('.scroll_top').on('click', function(){
      		$('html, body').animate({scrollTop : 0},800);
      		return false;
      	});


        /* Login modal js*/
        $('.login_modal_wrapper').hide();
        $('.hk_login_modal > a').on('click',function(){
            $('.login_modal_wrapper').fadeToggle(500);
        });

        /* accordion jquery */
        $('.panel-title > a').on('click',function(){
            $(this).parents('.panel-heading').toggleClass('active');
            $('.panel-heading').not($(this).parents('.panel-heading')).removeClass('active');
            $(this).children('span.fa').toggleClass('fa-minus fa-plus');
            $('.panel-title span.fa').not($(this).children('span.fa')).removeClass('fa-minus').addClass('fa-plus');
        });

        /*========= all sliders js =========*/

        // hero slider
        var $cameraSlider = $('.camera_wraper');
            if($cameraSlider.length){
                /*camera slider*/
                var heroSliderHeight = windowHeight < 600 ? 500 : windowHeight;
                $('.camera_wraper').camera({
                    height: heroSliderHeight + 'px',
                    pagination: true,
                    thumbnails: false,
                    loader: false,
                    playPause: false,
                    fx: 'random'
                });
                heroSliderHeight < 600 ? $('.camera_pag').addClass('down') : $('.camera_pag').removeClass('down');
            }


        /* Organization client slider */
        var teamSlider =$('.team_slider');
        teamSlider.owlCarousel({
            loop:true,
            margin: 30,
            nav: false,
            autoplay: false,
            dots: false,
            responsive:{
                0:{
                    items:2
                },
                767:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });

        /* custom trigger */
        $('.prev').on('click', function() {
            teamSlider.trigger('next.owl.carousel');
        });
        $('.next').on('click', function() {
            teamSlider.trigger('prev.owl.carousel');
        });

        $(".testimonial_slider").owlCarousel({
            loop:true,
            margin: 115,
            nav: false,
            autoplay: false,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                767:{
                    items:2,
                    margin: 50
                },
                1000:{
                    items:2
                }
            }
        });

        /* PARTNERS CAROUSEL*/
        $('.partner_carousel').owlCarousel({
            loop:true,
            margin: 30,
            nav: false,
            autoplay: true,
            dots: false,
            responsive:{
                0:{
                    items:2
                },
                767:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        });

        /* RECENT POST CAROUSEL */
        var relatedProject = $('.related_project_slider');
        relatedProject.owlCarousel({
            loop:true,
            margin: 30,
            nav: false,
            autoplay: true,
            dots: false,
            responsive:{
                0:{
                    items:2
                },
                767:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        /* related project custom trigger */
        $('.related_project_slider_wrapper .prev').on('click', function() {
            relatedProject.trigger('next.owl.carousel');
        });
        $('.related_project_slider_wrapper .next').on('click', function() {
            relatedProject.trigger('prev.owl.carousel');
        });

        /* venobox js */
        $('.venobox').venobox({
            numeratio: true
        });
        /* pricing table js*/
        var pricingTable = $('.hk_single_price_table');
        pricingTable.on('mouseover',function(){
            pricingTable.removeClass('active');
        });
        pricingTable.on('mouseleave',function(){
            $('.business').addClass('active');
        });



        // Replace all SVG images with inline SVG
        $('img.hk_svg').each(function(){
            var $img = $(this),
                imgID = $img.attr('id'),
                imgClass = $img.attr('class'),
                imgURL = $img.attr('src');

            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass);
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });

        /* preloader js */
        $(window).load(function(){
            $('.preloader').fadeOut(500);
            $('.preloader-bg').delay('500').fadeOut(1000);

            /*isotope and packery*/
            $('.portfolio_wrapper').isotope({
                layoutMode: 'packery',
                itemSelector: '.grid_item'
            });

            /*portfolio sorting*/
            $('.filter_list').on( 'click', 'li', function() {
                var filterValue = $(this).attr('data-filter');
                $('.portfolio_wrapper').isotope({ filter: filterValue });
                $(this).addClass('active');
                $('.filter_list li').not(this).removeClass('active');
            });
        });
    
        /*ACCORDION*/
        $('.panel-title > a').on('click',function(){
          $(this).parents('.single_acco_title').toggleClass('active');
          $('.single_acco_title').not($(this).parents('.single_acco_title')).removeClass('active');
          $(this).children('span.icofont').toggleClass('icofont-caret-down icofont-caret-up');
          $('.panel-title span.icofont').not($(this).children('span.icofont')).removeClass('icofont-caret-up').addClass('icofont-caret-down');
        });

})(jQuery);
