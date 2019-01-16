
  (function(portrait) {

    // The global jQuery object is passed as a parameter
    portrait(window.jQuery, window, document);

  }(function($, window, document) {

    // The $ is now locally scoped 

   // Listen for the jQuery ready event on the document
   $(function() {// The DOM is ready!

    var utils = new Utils;

        utils.mic_portrait_images();

   });// The DOM is ready

  
  /*
   * Utils class
   *
   * 
   */
   var Utils = function(){

        /*
        * Multi-item Carousel portrait images fix
        *
        */
        this.mic_portrait_images = function()
        {
        
          var slideContainer  = $('.carousel-item.item');
          var slideImage      = $('.carousel-item.item img');
          var slideWidth      = $(slideImage).parent().width();
          var slideHeight     = (slideWidth / 16) * 9;
          
          $.each(slideImage, function(index, image){

             var currentImage = $(image);
            
              currentImage.attr('style', 'width: auto !important;');
              currentImage.css({"max-height": slideHeight});

              var bg = getBgElement( $(image).attr('src'));

              currentImage.parent().css({"position":"relative"});
              currentImage.parent().append(bg);

          });

        }// end mic_portrait_images

        /**
           * Private helper function 
           * prepares the background element for the slide
           */
          var getBgElement = function(src)
          {
          
            return '<div class="slide-bg" style="background:url('+ src +'); position:absolute; top:0; bottom:0; left:0; right:0; background-size: cover; z-index:-1;-webkit-filter: blur(8px);filter: blur(8px);"></div>'
          
          }// end getBgElement
          
   }//end Utils
  }));
