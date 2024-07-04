        $(function(){
            $(".btnmob").click(function(){
                $(this).toggleClass("active");
                $(".collapse").slideToggle();
            });
            if(screen.width<980){
                $(".collapse a").click(function(e){
                    $(".collapse").slideUp();
                    $("header .btnmob").removeClass("active");
                });
            }

            $(".wrap-2 .tab").click(function(e){
                e.preventDefault();
                $(".wrap-2 .tab").removeClass("active");
                $(this).addClass("active");

                if($(this).text()=="WEB DESIGN"){
                    $(".wrap-2 .tab1").fadeIn();
                    $(".wrap-2 .tab2, .wrap-2 .tab3, .wrap-2 .tab4").fadeOut(0);
                    $(".readmore").attr("href", "Webdesigning.html"); // Update href for Web Design
                }
                else if($(this).text()=="MOBILE APP"){
                    $(".wrap-2 .tab2").fadeIn();
                    $(".wrap-2 .tab1, .wrap-2 .tab3, .wrap-2 .tab4").fadeOut(0);
                    $(".readmore").attr("href", "Mobileapp.html"); // Update href for Web Design
                }
                else if($(this).text()=="BRANDIN"){
                    $(".wrap-2 .tab3").fadeIn();
                    $(".wrap-2 .tab1, .wrap-2 .tab2, .wrap-2 .tab4").fadeOut(0);
                    $(".readmore").attr("href", "Brandin.html"); // Update href for Web Design
                }
                else if($(this).text()=="BRANDING"){
                    $(".wrap-2 .tab4").fadeIn();
                    $(".wrap-2 .tab1, .wrap-2 .tab2, .wrap-2 .tab3").fadeOut(0);
                    $(".readmore").attr("href", "Branding.html"); // Update href for Web Design
                }
            });



            $(".wrap-4 .readmore").click(function(e){
                e.preventDefault();
                $(".wrap-4 .p-1").toggle(1000);
                $(this).toggleClass("active");

                if($(this).hasClass("active")){
                    $(".wrap-4 .readmore").text("READ LESS");
                }
                else{
                    
                    $(".wrap-4 .readmore").text("READ MORE");              
                }
            });
            
            
            $(".wrap-6 .pic").click(function(e){
                e.preventDefault();
                $(".wrap-6 .pic").removeClass("active");
                $(this).addClass("active");

                if($(this).text() == "WEB DESIGN"){
                    $(".wrap-6 .WEB").fadeIn();
                    $(".wrap-6 .MOBILE,  .BRANDIN,  .BRANDING").fadeOut(0);
                }
                else if($(this).text() == "MOBILE APP"){
                    $(".wrap-6 .MOBILE").fadeIn();
                    $(".wrap-6 .WEB,  .BRANDIN, .BRANDING").fadeOut(0);
                }
                else if($(this).text() == "BRANDIN"){
                    $(".wrap-6 .BRANDIN").fadeIn();
                    $(".wrap-6 .WEB,  .MOBILE,  .BRANDING").fadeOut(0);
                }
                else if($(this).text() == "BRANDING"){
                    $(".wrap-6 .BRANDING").fadeIn();
                    $(".wrap-6 .WEB,  .MOBILE,  .BRANDIN").fadeOut(0);
                }
            });

            $(".wrap-6 .readmore").click(function(e){
                e.preventDefault();
                $(".wrap-6 .all").toggle(1000);
                $(this).toggleClass("active");
                    
                if($(this).hasClass("active")){
                    $(".wrap-6 .readmore").text("Less");
                } else {
                    $(".wrap-6 .readmore").text("More");
                }
            });

        });