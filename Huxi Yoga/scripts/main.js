jQuery(function($) {

    var windowWidth = $('body').width();
    /*
    |----------------------------------------------------------------
    | Hide/Show Header
    |----------------------------------------------------------------
    */
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta) {
          return;
        }

        // If they scrolled down and are past the navbar, add class .header-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('header-down').addClass('header-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('header-up').addClass('header-down');
            }
        }
        lastScrollTop = st;
    }

    setInterval(function() {
        if(didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    /*
    |--------------------------------------------------------
    | Navigation
    |--------------------------------------------------------
    */
    const targetElement = document.querySelector('.gn');
    // bodyScrollLock.disableBodyScroll(targetElement);
    // bodyScrollLock.enableBodyScroll(targetElement);

    $('.gn a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        bodyScrollLock.enableBodyScroll(targetElement);
        $('.gn-trigger').removeClass('is-active');
        $('.gn').slideUp();
        return false;
    });    

   $('.gn-trigger').on('click',function(e) {
       e.preventDefault();
       if($(this).hasClass('is-active')) {
           $(this).removeClass('is-active');
           $('.gn').slideUp();
           bodyScrollLock.enableBodyScroll(targetElement);
       } else {
        $(this).addClass('is-active');
        $('.gn').slideDown(400);
        bodyScrollLock.disableBodyScroll(targetElement);
       }
   });

   $(window).resize(function(){
    windowWidth = $('body').width();
    if(windowWidth > 767 && $('.gn-trigger').hasClass('is-active')) {
        setTimeout(function() {
            $('.gn-trigger').removeClass('is-active');
            $('.gn').slideUp(0);
        }, 200);
        bodyScrollLock.enableBodyScroll(targetElement);
    } 
   });
});

jQuery(function($) {
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
      });
      // layout Masonry after each image loads
      $grid.imagesLoaded().progress( function() {
        $grid.masonry();
      });  
});

$(function() {

    // Call Gridder
    $('.gridder').gridderExpander({
        scroll: false,
        scrollOffset: 30,
        scrollTo: "panel",                  // panel or listitem
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: false,                      // Show Navigation
        nextText: "Next",                   // Next button text
        prevText: "Previous",               // Previous button text
        closeText: "Close",                 // Close button text
        onStart: function(){
            //Gridder Inititialized
        },
        onContent: function(){
            //Gridder Content Loaded
        },
        onClosed: function(){
            //Gridder Closed
        }
    });

});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// CALENDAR


(function($) {
    $('#picker').markyourcalendar({
      availability: [
        ['1:00', '2:00', '3:00', '4:00', '5:00'],
        ['2:00'],
        ['3:00'],
        ['4:00'],
        ['5:00'],
        ['6:00'],
        ['7:00']
      ],
      isMultiple: true,
      onClick: function(ev, data) {
        // data is a list of datetimes
        console.log(data);
        var html = ``;
        $.each(data, function() {
          var d = this.split(' ')[0];
          var t = this.split(' ')[1];
          html += `<p>` + d + ` ` + t + `</p>`;
        });
        $('#selected-dates').html(html);
      },
      onClickNavigator: function(ev, instance) {
        var arr = [
          [
            ['4:00', '5:00', '6:00', '7:00', '8:00'],
            ['1:00', '5:00'],
            ['2:00', '5:00'],
            ['3:30'],
            ['2:00', '5:00'],
            ['2:00', '5:00'],
            ['2:00', '5:00']
          ],
          [
            ['2:00', '5:00'],
            ['4:00', '5:00', '6:00', '7:00', '8:00'],
            ['4:00', '5:00'],
            ['2:00', '5:00'],
            ['2:00', '5:00'],
            ['2:00', '5:00'],
            ['2:00', '5:00']
          ],
          [
            ['4:00', '5:00'],
            ['4:00', '5:00'],
            ['4:00', '5:00', '6:00', '7:00', '8:00'],
            ['3:00', '6:00'],
            ['3:00', '6:00'],
            ['3:00', '6:00'],
            ['3:00', '6:00']
          ],
          [
            ['4:00', '5:00'],
            ['4:00', '5:00'],
            ['4:00', '5:00'],
            ['4:00', '5:00', '6:00', '7:00', '8:00'],
            ['4:00', '5:00'],
            ['4:00', '5:00'],
            ['4:00', '5:00']
          ],
          [
            ['4:00', '6:00'],
            ['4:00', '6:00'],
            ['4:00', '6:00'],
            ['4:00', '6:00'],
            ['4:00', '5:00', '6:00', '7:00', '8:00'],
            ['4:00', '6:00'],
            ['4:00', '6:00']
          ],
          [
            ['3:00', '6:00'],
            ['3:00', '6:00'],
            ['3:00', '6:00'],
            ['3:00', '6:00'],
            ['3:00', '6:00'],
            ['4:00', '5:00', '6:00', '7:00', '8:00'],
            ['3:00', '6:00']
          ],
          [
            ['3:00', '4:00'],
            ['3:00', '4:00'],
            ['3:00', '4:00'],
            ['3:00', '4:00'],
            ['3:00', '4:00'],
            ['3:00', '4:00'],
            ['4:00', '5:00', '6:00', '7:00', '8:00']
          ]
        ]
        var rn = Math.floor(Math.random() * 10) % 7;
        instance.setAvailability(arr[rn]);
      }
    });
  })(jQuery);

  

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


  try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }


  // SIGN UP FORM
  

  $(function () {
    $(window).singlePageForm({
      outputLog: true,
      noRequest: true,
      validators: [
        {
          name: "email",
          message: "Required",
          messageSelector: ".row.email .error-message",
          validate: function (val) { return val !== "" },
        },
        {
          name: "number",
          message: "Required",
          messageSelector: ".row.number .error-message",
          validate: function (val) { return val !== "" },
        },
        {
          name: "address",
          message: "Required",
          messageSelector: ".row.address .error-message",
          validate: function (val) { return val !== "" },
        },
        {
          name: "pc",
          message: "Required",
          messageSelector: ".row.pc .error-message",
          validate: function (val) { return val !== "" },
        },
      ],
      dataToConfirms: [
        {
          confirmSelector: ".row.email .item-confirm",
          dataName: "email",
        },
        {
          confirmSelector: ".row.number .item-confirm",
          dataName: "number",
        },
        {
          confirmSelector: ".row.address .item-confirm",
          dataName: "address",
        },
        {
          confirmSelector: ".row.pc .item-confirm",
          dataName: "pc",
        },
        {
          confirmSelector: ".row.name .item-confirm",
          syncFunc: function (data) { return data.first_name + " " + data.last_name },
        },
        {
          confirmSelector: ".row.birth .item-confirm",
          dataName: "birth",
        },
        {
          confirmSelector: ".row.birth .item-confirm",
          dataName: "birth",
        },
        {
          confirmSelector: ".row.purposes .item-confirm",
          syncFunc: function (data) {
            const translators = {
              fitness: "Fitness",
              flexibility: "Flexibility",
              health: "Health",
              hobby: "Hobby",
            }

            let results = []
            Object.keys(data.purposes).forEach(function (key, val) {
              if (!val) {
                return
              }

              results.push(translators[key])
            })
            return results.join(", ")
          },
        },
        {
          confirmSelector: ".row.gender .item-confirm",
          syncFunc: function (data) {
            const translators = {
              male: "Male",
              female: "Female",
            }

            return translators[data["gender"]]
          },
        },
      ],
    })
  });

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
      return true;
    }).catch(function(e) {
      var carbonScript = document.createElement("script");
      carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
  } catch (error) {
    console.log(error);
  }