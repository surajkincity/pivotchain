;(function($){
"use strict" 

    // Color Preset
    if ($(".td-color-theme-demos").length > 0)
    {
        //switcher 
        var switchs = true;
        $(".settingBtn").on("click", function (e)
        {
            e.preventDefault();
            if (switchs)
            {
                $(this).addClass("active");
                $(".td-color-theme-demos").animate({"right": "0px"}, 400);
                switchs = false;
            }
            else
            {
                $(this).removeClass("active");
                $(".td-color-theme-demos").animate({"right": "-307px"}, 400);
                switchs = true;
            }
        });
        //Normal
        if ($("#actionColors a").length > 0)
        {
            $("#actionColors a").on("click", function (e)
            {
                e.preventDefault();
                var color = $(this).attr("href");
                $("#actionColors a").removeClass("active");
                $(this).addClass("active");
                $("#triggerColor").attr("href", "css/triggerPlate/" + color + ".css");
            });
        }
    }
    
    /*------- products slider js -------*/
    function productSlider(){
        var products_slider = $(".products-slider");
        if( products_slider.length ){
            products_slider.owlCarousel({
                loop:true,
                margin:25,
                items:3,
                autoplay:true,
                smartSpeed:1000,
                nav: false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    400:{
                        items:2, 
                    }, 
                    768:{
                        items:3,   
                    }
                },
            })
        }
    }    
    productSlider();
    
    /*------- products slider js -------*/
    function seoSlider(){
        var seopr_slider = $(".seo-pr-slider");
        if( seopr_slider.length ){
            seopr_slider.owlCarousel({
                loop:true,
                margin:25,
                items:3,
                autoplay:true,
                smartSpeed:1000,
                nav: false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    580:{
                        items:2, 
                    }, 
                    768:{
                        items:2,   
                    },
                    992:{
                        items:3,   
                    }
                },
            })
        }
    }    
    seoSlider();
    
    /*=========== screenshots slider js ===========*/
    function screenShot(){
        var screenshots_slider = $(".screenshots-slider");
        if( screenshots_slider.length){
            screenshots_slider.owlCarousel({
                loop:true,
                margin:30,
                items:4,
                autoplay:true,
                nav:false,
                smartSpeed:700,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    420:{
                        items:2, 
                    },
                    500:{
                        items:3, 
                    }, 
                    768:{
                        items:3,   
                    },
                    992:{
                        items:4,   
                    }
                },
            })
        }
    }
    screenShot();
    
    /*========= get touch area js ============*/
    function getWidth(){ // <--- Added brackets around document
        if( $(".get_touch").length){
            var w = $(".right_inner_content").css("margin-left");
            $(".left_inner_content").css("width", w); // <--- Removed $ from $w since your variable is w not $w
        }
    }
    getWidth();
    
    
    /*==========Start player js ===========*/
    // poster frame click event
    $(".js-videoPoster").on('click',function(ev) {
        ev.preventDefault();
        var $poster = $(this);
        var $wrapper = $poster.closest('.js-videoWrapper');
        videoPlay($wrapper);
    });

    // play the targeted video (and hide the poster frame)
    function videoPlay($wrapper) {
        var $iframe = $wrapper.find('.js-videoIframe');
        var src = $iframe.data('src');
        // hide poster
        $wrapper.addClass('videoWrapperActive');
        // add iframe src in, starting the video
        $iframe.attr('src',src);
    }
    // stop the targeted/all videos (and re-instate the poster frames)
    $(".play-btn").on("click",function(ev){
        var $wrapper = $('.js-videoWrapper');
        var $iframe = $wrapper.find('.js-videoIframe');
        var src = $iframe.data('src'); 
        if( $wrapper.hasClass('videoWrapperActive')){
            $wrapper.removeClass('videoWrapperActive');
            $iframe.attr('src','');
        }
        else{
            $wrapper.addClass('videoWrapperActive');
            $iframe.attr('src',src);
        }
        return false;
    });
    /*==========End player js ===========*/
    
    /*===========Start  testimonial slider js ===========*/
    function reviewSlider(){
        var review_slider = $(".review-slider");
        if( review_slider.length){
            review_slider.owlCarousel({
                loop:false,
                margin:0,
                items:1,
                autoplay:true,
                smartSpeed:1000,
                nav: false,
                responsiveClass:true
            })
        }
    }
    reviewSlider();
    /*===========End testimonial slider js ===========*/
    
    /*===========Start clients logo js ===========*/
    function clientsSlider(){
        var clientslg_slider = $(".clients-lg-slider");
        if( clientslg_slider.length){
            clientslg_slider.owlCarousel({
                loop:true,
                margin:0,
                items:4,
                autoplay:true,
                smartSpeed:1000,
                nav: false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    420:{
                        items:2, 
                    },
                    550:{
                        items:3, 
                    }, 
                    992:{
                        items:4,   
                    }
                },
            })
        }
    }
    clientsSlider();
    /*===========End clients logo js ===========*/
    
    /*===========Start productGallery2 js ===========*/
    function productGallery2(){
        var product_gallery2 = $(".product-gallery2,.product-gallery,.pr-sliders,.sync1");
        if( product_gallery2.length){
            product_gallery2.owlCarousel({
                loop:true,
                margin:20,
                items:1,
                rewind: false,
                autoplay: true,
                smartSpeed:1000,
                nav: false,
                responsiveClass:true
            })
        }
    }
    productGallery2();
    /*===========End productGallery2 js ===========*/
    
    /*===========Start related-product js ===========*/
    function relatedslider(){
        var related_slider = $(".related-slider");
        if( related_slider.length){
            related_slider.owlCarousel({
                loop:true,
                margin:30,
                items:3,
                rewind: false,
                autoplay: true,
                smartSpeed:1000,
                nav: false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    420:{
                        items:1, 
                    },
                    550:{
                        items:2, 
                    }, 
                    992:{
                        items:3,   
                    }
                },
            })
        }
    }
    relatedslider();
    /*===========End related-product js ===========*/
    
    /*===========Start more related-product js ===========*/
    function relatedslider2(){
        var related_slider2 = $(".related-slider2");
        if( related_slider2.length ){
            related_slider2.owlCarousel({
                loop:true,
                margin:0,
                items: 1,
                nav:true,
                autoplay: true,
                navContainer:".more-related-pr",
                smartSpeed: 2000,
                navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']
            })
        }
    }
    relatedslider2();
    /*===========End more related-product js ===========*/
    
    /*===========Start shop-pr-slide js ===========*/
    function shopslider(){
        var shoppr_slider = $(".shop-pr-slider");
        if( shoppr_slider.length){
            shoppr_slider.owlCarousel({
                center: true,
                items: 3,
                loop: true,
                margin: 0,
                smartSpeed:1000,
                autoplay: true,
                nav: false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    550:{
                        items:2,
                        center:false,
                    }, 
                    992:{
                        items:3,   
                    }
                },
            })
        }
    }
    shopslider();
    /*===========End shop-pr-slide js ===========*/
    
    /*===========Start ex-pr-slider js ===========*/
    function exprslider(){
        var expr_slider = $(".ex-pr-slider");
        if( expr_slider.length ){
            expr_slider.owlCarousel({
                loop:true,
                margin:30,
                items: 1,
                nav:true,
                autoplay: true,
                smartSpeed: 2000,
                navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>']
            })
        }
    }
    exprslider();
    /*===========End ex-pr-slider js ===========*/
    
    /*===========Start reviews-slider2 js ===========*/
    function reviewsslider2(){
        var reviews_slider2 = $(".reviews-slider2");
        if( reviews_slider2.length ){
            reviews_slider2.owlCarousel({
                loop:true,
                margin:15,
                items: 2,
                nav:false,
                autoplay: true,
                smartSpeed: 2000,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    550:{
                        items:1,
                    }, 
                    560:{
                        items:2,   
                    }
                },
            })
        }
    }
    reviewsslider2();
    /*===========End reviews-slider2 js ===========*/
    
    /*===========Portfolio isotope js===========*/
    function portfolioMasonry(){
        var portfolio = $("#portfolio");
        if( portfolio.length ){
            portfolio.imagesLoaded( function() {
              // images have loaded
                // Activate isotope in container
                portfolio.isotope({
                    itemSelector: ".portfolio-item",
                    layoutMode: 'masonry',
                    transformsEnabled: true,
                    transitionDuration: "700ms",
                });

                // Add isotope click function
                $(".portfolio-filter li").on('click',function(){
                    $(".portfolio-filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    portfolio.isotope({
                        filter: selector,
                        animationOptions: {
                          animationDuration: 750,
                          easing: 'linear',
                          queue: false
                      }
                    })
                    return false;
                })
            })
        }
    }
    portfolioMasonry();
    
    // video Popup
    if ($("#video-item,#video-items").length > 0){
        $("#video-item,#video-items").magnificPopup({
            type: "iframe"
        });
    }
    
    /*---------Start Counter-----------*/
    function counting_data(){
        var counter = $(".counter");
        if( counter.length){
            counter.counterUp({
                delay:10,
                time:1000
            })
        }
    } 
    counting_data();
    /*---------End Counter-----------*/
    
    /*---------parallax js-----------*/
    function parallaxActivitor(){
        if($(window).width()>768){
            $.stellar({
                horizontalOffset:true,
                verticalOffset: 60,
                responsive: true,
            });
        }
    }
    parallaxActivitor();
    
    /*---------End parallax js-----------*/
    
    /*======== animated grid js ========*/
    function animatedGrid(){
        var ri_grid = $("#ri-grid,#ri-grids");
        if( ri_grid.length){
            ri_grid.gridrotator( {
                w320 : {
                    rows : 2,
                    columns : 3,

                },
                w240 : {
                    rows : 2,
                    columns : 3,
                },

            } );
        }
    }
    animatedGrid();
    /*========End animated grid js ========*/
    
    /*======== nav_searchFrom  ========*/
    function searchFrom(){
        if ( $(".search_dropdown").length ){  
             $(".search_dropdown").on("click",function(){
                $(".searchForm").toggleClass('show');
                return false
            });
            $(".form_hide").on("click",function(){
                $(".searchForm").removeClass('show')
            });
        };
    };
    searchFrom();
    /*========End nav_searchFrom  ========*/
    
    /*====== onpage scrolling js ========*/
    $("#nav").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 2050,
    });
    /*====== End onpage scrolling js ========*/
    
    /*---------------scroll-top-js--------*/
    var scrT= $("a[href='#'].scroll-t");
    scrT.on("click", function(e){
        e.preventDefault();
        $("body,html").animate({ scrollTop: $(document).height() }, 1200);
    });
    /*--------------- End scroll-top-js--------*/
    
    /*--------------- End popup-js--------*/
    function popupGallery(){
        if ($(".portfolio-gallery,.screenshots-slider,.products-slider").length) {
            $(".portfolio-gallery,.screenshots-slider,.products-slider").each(function(){
                $(".portfolio-gallery,.screenshots-slider,.products-slider").magnificPopup({
                    delegate: 'a.popup',
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    removalDelay: 300,
                    mainClass:  'my-mfp-slide-bottom',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image,
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                        titleSrc: function(item) {
                            return '<a href="'+ item.el.attr('data-source') +'">'+ item.el.attr('title') +'</a>' + '<small>'+  item.el.attr('data-desc')+'</small>';
                        }
                    }
                });
            })
        }
    }
    popupGallery();
    /*--------------- End popup-js--------*/
    function mapZoom(){
        var map = $(".map");
        if( map.length){
            map.on("click",function(){
                $(this).find("iframe").addClass("clicked") 
                $(this).mouseleave (function(){
                    $(this).find("iframe").removeClass("clicked")
                });
            });
        }
    }
    mapZoom();
    
    /*==========sticky menu js ===========*/
    function stickyHeader () {
		if ($("#stricky").length) {
			var strickyScrollPos = 100;
			if($(window).scrollTop() > strickyScrollPos) {
				$("#stricky").removeClass("fadeIn animated");
				$("#stricky").addClass("stricky-fixed fadeInDown animated")
			}
			else if($(window).scrollTop() <= strickyScrollPos) {
				$("#stricky").removeClass("stricky-fixed fadeInDown animated");
				$("#stricky").addClass("slideIn animated")
			}
		}
	}
    // instance of fuction while Window Scroll event
	$(window).on("scroll", function () {	
		stickyHeader()
	})
    
    // ============================================================================
    // btn-plus and btn-minus in "#order-detail-content" table
    // ============================================================================

      $('.btn-plus').on('click', function () {
        var $count = $(this).parent().find('.count');
        var val = parseInt($count.val(),10);
        $count.val(val+1);
        return false;
      });

      $('.btn-minus').on('click', function () {
        var $count = $(this).parent().find('.count');
        var val = parseInt($count.val(),10);
        if(val > 0) $count.val(val-1);
        return false;
      });
    
    /*----------------- Contact form - submission js ----------------*/
      var contactForm = $(".contact-form");
      contactForm.on("submit", function(e) {
        e.preventDefault();
        var contactFormfName = $("input.contact-fname").val(),
            contactFormlName = $("input.contact-lname").val(),
            contactFormEmail = $("input.contact-mail").val(),
            contactFormWebsite = $("input.contact-website").val(),
            contactFormMessage = $(".contact-message").val();

        if(contactFormfName !== "" && contactFormlName !== "" && contactFormEmail !== "" && contactFormMessage !== "") {
          contactForm.each(function() {
            $(this).find(":input").removeClass("validation-error");
          });
        //ajax
          $.ajax({
                    type: "POST",
                    url: "./contact/contact.php",
                    data: {"formfName": contactFormfName, "formlName": contactFormlName, "formMail": contactFormEmail,  "formWebsite": contactFormWebsite, "formMessage": contactFormMessage},
                    dataType: "json",
                    success: function (data) {

                        $(".contact-submit-progress")
                            .append("<i class='fa fa-refresh' aria-hidden='true'></i>")
                            .hide()
                            .fadeIn("slow", function () {
                                $(".contact-submit-progress").hide();
                            });
                        if(data.message_status =='ok'){
                            function showUp() {
                                $(".contact-submit-message").text(data.content).fadeOut(3000);
                            }
                         }else{
                            function showUp() {
                                $(".contact-submit-message").text(data.content).fadeOut(3000);
                            }
                        }


                        setTimeout(showUp, 2000);
                        $(".contact-form")[0].reset();
                    }
                });
        } else {
          contactForm.find(".form-control").each(function() {
            if($(this).val() === "") {
              $(this).addClass("validation-error");
            } else {
              $(this).removeClass("validation-error");
              $(this).addClass("validation-valid");
            }
          });
        }
      });

      contactForm.find(".form-control").each(function() {
        $(this).on("keyup", function() {
          if ($(this).val() === "") {
            $(this).removeClass("validation-valid");
            $(this).addClass("validation-error");
          } else {
            $(this).removeClass("validation-error");
            $(this).addClass("validation-valid");
          }
        });
      });
    
    // MAILCHIMP
    if ($(".mailchimp").length > 0)
    {
        $(".mailchimp").ajaxChimp({
            callback: mailchimpCallback,
            url: "http://droitlab.us15.list-manage.com/subscribe/post?u=0fa954b1e090d4269d21abef5&id=a80b5aedb0" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
        });
    }
    $(".memail").on("focus", function ()
    {
        $(".mchimp-errmessage").fadeOut();
        $(".mchimp-sucmessage").fadeOut();
    });
    $(".memail").on("keydown", function ()
    {
        $(".mchimp-errmessage").fadeOut();
        $(".mchimp-sucmessage").fadeOut();
    });
    $(".memail").on("click", function ()
    {
        $(".memail").val("");
    });
    function mailchimpCallback(resp)
    {
        if (resp.result === "success") {
            $(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
            $(".mchimp-sucmessage").fadeOut(500);
        } else if (resp.result === "error") {
            $(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
        }
    }
    
    /*----------------- Demo Request Form - submission js ----------------*/
      var requestForm = $(".request-form");
      requestForm.on("submit", function(e) {
        e.preventDefault();
        var contactFormfName = $("input.uname").val(),
            contactFormEmail = $("input.uemail").val();
            
          if(contactFormfName === '' && contactFormEmail === ''){
            /*$('.contact-submit-message').html('Enter name & email first.').fadeOut(3000);*/
            $('.contact-submit-message').css("color", "red");
            $("input.uname").css("border-color", "red");
            $("input.uemail").css("border-color", "red");
            }
          else if(contactFormfName !== '' && contactFormEmail === ''){
            $('.contact-submit-message').css("color", "red");
            $("input.uname").css("border-color", "#e0e0e0");
            $("input.uemail").css("border-color", "red");
            }
          else if(contactFormfName === '' && contactFormEmail !== ''){
            
            $("input.uname").css("border-color", "red");
            $("input.uemail").css("border-color", "#e0e0e0");
            }
          else if(contactFormfName !== '' && contactFormEmail !== ''){
              $("input.uname").css("border-color", "#e0e0e0");
              $("input.uemail").css("border-color", "#e0e0e0");
              
              $.ajax({
                    type: "POST",
                    url: "./contact/contact-demo.php",
                    data: {"formName": contactFormfName, "formMail": contactFormEmail},
                    dataType: "json",
                    success: function (data) {

                        $(".contact-submit-progress")
                            .append("<i class='fa fa-refresh' aria-hidden='true'></i>")
                            .hide()
                            .fadeIn("slow", function () {
                                $(".contact-submit-progress").hide();
                            });
                        if(data.message_status =='ok'){
                            function showUp() {
                                $(".contact-submit-message").text(data.content).fadeOut(3000);
                            }
                         }else{
                            function showUp() {
                                $(".contact-submit-message").text(data.content).fadeOut(3000);
                            }
                        }


                        setTimeout(showUp, 2000);
                        $(".contact-form")[0].reset();
                    }
                });
          }
      });
    /*=========animation js =========*/
    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if($(window).width()>768){
            new WOW({
                animateClass: 'animated', // animation css class (default is animated)
                offset:       100,          // distance to the element when triggering the animation (default is 0)
                mobile:       false, 
                duration:     1000,
            }).init()
        }
    }
    bodyScrollAnimation();
    
    if ($('a[href="#product-choose"]').length) {
        $('a[href="#product-choose"]').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            midClick: true
        });
    }
    if ($('.selectpicker').length) {
        $('.selectpicker').selectpicker();
    }
    if ($('.quanity').length) {
        $('.quanity').TouchSpin({
            verticalbuttons: true,
            verticalupclass: 'glyphicon glyphicon-plus',
            verticaldownclass: 'glyphicon glyphicon-minus'
        });
    }
    $('#next-personal').on('click', function() {
        $('#js-product-info').addClass('slide-out-left');
        $('#js-personal-info').addClass('slide-in-right');
    });
    $('#prev-product-info').on('click', function() {
        $('#js-personal-info').removeClass('slide-in-right');
        $('#js-product-info').removeClass('slide-out-left');
    });
    
    // ============================================================================
    // btn-plus and btn-minus in "#order-detail-content" table
    // ============================================================================

      $('.btn-plus').on('click', function () {
        var $count = $(this).parent().find('.count');
        var val = parseInt($count.val(),10);
        $count.val(val+1);
        return false;
      });

      $('.btn-minus').on('click', function () {
        var $count = $(this).parent().find('.count');
        var val = parseInt($count.val(),10);
        if(val > 0) $count.val(val-1);
        return false;
      });
    
    /*------------- preloader js --------------*/
     $(window).load(function() { // makes sure the whole site is loaded
		$('.loader-container').fadeOut(); // will first fade out the loading animation
		$('.loader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
    })
    
})(jQuery)