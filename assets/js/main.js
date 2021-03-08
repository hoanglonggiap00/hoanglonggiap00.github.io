/*============================Menu Table===================
- 1, init
- 2, header-nav dropdown 
- 3, FAQ-minus-plus show and hide
*/
/* ============================= 1, init  ============================= */
$(document).ready(function() {
  navigation.init();
  faq.init();
  owl.init();
  category.init()
});

/* ============================= 2, navigation  ============================= */
const navigation = {
	init: function () {
		this.navDropdown();
    this.navDropleft();
    this.navSearch();
	},
	navDropdown: function () {
		$(".dropdown").hover(
      function() {
        const $this = $(this);
        $this.addClass("show active");
        $this.find('.dropdown-toggle').attr("aria-expanded", "true");
        $this.find((".dropdown-menu")).addClass("show");
      },
      function() {
        const $this = $(this);
        $this.removeClass("show active");
        $this.find('.dropdown-toggle').attr("aria-expanded", "false");
        $this.find(".dropdown-menu").removeClass("show");
      }
    );
	},	
	navDropleft:function(){
		$(".dropleft").hover(
      function() {
        const $this = $(this);
        $this.addClass("show active");
        $this.find('.dropleft-toggle').attr("aria-expanded", "true");
        $this.find((".dropleft-menu")).addClass("show");
      },
      function() {
        const $this = $(this);
        $this.removeClass("show active");
        $this.find('.dropleft-toggle').attr("aria-expanded", "false");
        $this.find(".dropleft-menu").removeClass("show");
      }
    );
  },
  navSearch: function() {
    $(".search-trigger").on("click", function() {
      $(".search-wrap").addClass("open");
      $(".search-overlay").addClass("open");
    });
  
    $(".close-search").on("click", function() {
      $(".search-wrap").removeClass("open");
      $(".search-overlay").removeClass("open");
    });
  }
}

/* ============================= 3, FAQ-minus-plus show and hide  ============================= */

  const faq = {
    init: function () {
      this.faqLeft();
      this.faqRight();
    },
    faqLeft: function () {
  //toggle the component with class card_body
  $(".faq-left .card-header").click(function () {
    // click card-header, all card-body visible will be closed and change icon to plus icon
    if ($('.faq-left .card-body').is(':visible')) {
    $(".faq-left .card-body").slideUp(300);
    $(".faq-left .plusminus").attr('name',"add-outline");
    }
    // if current card-body is visible, close it
    if ($(this).next(".faq-left .card-body").is(':visible')) {
    $(this).next(".faq-left .card-body").slideUp(300);
    $(this).children(".faq-left .plusminus").attr('name',"add-outline");
    } 
    //if current card body is not visible, show card-body
    else {
    $(this).next(".faq-left .card-body").slideDown(300);
    $(this).children().children(".faq-left .plusminus").attr('name',"remove-outline");
    }
    });
  },
  faqRight: function () {
    $(".faq-right .card-header").click(function () {
    // click card-header, if card-body is shown => close card-body and show plus
    if ($('.faq-right .card-body').is(':visible')) {
    $(".faq-right .card-body").slideUp(300);
    $(".faq-right .plusminus").attr('name',"add-outline");
    }
    if ($(this).next(".faq-right .card-body").is(':visible')) {
    // console.log(this);
    $(this).next(".faq-right .card-body").slideUp(300);
    $(this).children(".faq-right .plusminus").attr('name',"add-outline");
    } else {
    $(this).next(".faq-right .card-body").slideDown(300);
    $(this).children().children(".faq-right .plusminus").attr('name',"remove-outline");
    }
    });
  }
}

const owl = {
  init: function () {
    this.slider(".overview-carousel");
    this.slider(".client-carousel");
    this.slider(".owl-carousel");
  },
  slider: function (target) {
    const mainWrap = $(target);
    let options = {};
    switch (target) {
      case ".overview-carousel":
        options = {
          loop: true,
          margin: 0,
          autoplay: true,
          autoplayHoverPause: true,
          dots: true,
          responsive: {
            0: {
              items: 1,
            },
          },
        };
        break;
      case ".client-carousel":
        options = {
          loop: false,
          margin: 10,
          autoplay: false,
          autoplayHoverPause: true,
          dots: true,
          responsive: {
            0: {
              items: 2,
            },
            425: {
              items: 2,
            },
            768: {
              items: 3,
            },
            1024: {
              items: 5,
            },
            1520: {
              items: 6,
            },
          },
        };
        break;
      case ".owl-carousel":
        options = {
          loop: true,
          margin: 0,
          nav: true,
          navText: [
            "<span class='lnr lnr-chevron-left icon--prev'></span>",
            "<span class='lnr lnr-chevron-right icon--next'></span>",
          ],
          items: 1,
          autoplay: true,
          autoplayTimeout: 5000,
        };
        break;
      default:
        return true;
    }
    if (mainWrap) {
      $(mainWrap).owlCarousel(options);
    }
  },
};

const category = {
  init: function () {
    this.openMenu();
  },
  openMenu: function () {
    const main = document.querySelector("#category-menu");
    if (main) {
      const menuLevel = main.querySelectorAll(".menu-level");

      menuLevel.forEach((item) =>
        item.addEventListener("click", () => {
          item.classList.toggle("active");

          const menuChild = item.querySelector(".menu-item-child");
          if (menuChild) {
            menuChild.classList.toggle("active");
          }
        })
      );
    }
  },
};

/* ============================= Show Modal When Load The Page  ============================= */
  
// Get the popup div
  var popup = document.getElementById("my-modal");
  $(window).on('load',function(){
    // popup.style.display = "block";
    $("#my-modal").show();
    $('body').css("overflow-y","hidden");

  });
// Click x button will close modal
  $("#close-btn").click(function () {
    $("#my-modal").hide();
    $('body').css("overflow-y","");
  });

// Click outside modal will close modal 
  $(window).click(function(e){
    if($(e.target).hasClass("outside-modal")||$(e.target).hasClass("page-modal")){
      $("#my-modal").hide();
      $('body').css("overflow-y","");
    }
  })
  
  
  
  
