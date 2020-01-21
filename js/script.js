


$(window).on("load",function(){
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut();
})

/*===============================
||||||||||||||| Team
===================================*/

$(function(){
  $("#team-members").owlCarousel({
    items:2,
    autoplay:true,
    smartSpeed:700,
    autoplayHoverPause:true,
    nav:true,
    dost:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });
});

/*===============================
||||||||||||||| Progress Bars
===================================*/

$(function(){
    $("#progress-elements").waypoint(function(){

      $(".progress-bar").each(function(){

        $(this).animate({
          width: $(this).attr("aria-valuenow") + "%"
        },1000);
      });
      this.destroy();
    },{
      offset:"bottom-in-view"
    });
});

/*===============================
||||||||||||||| Responsive Tabs
===================================*/

$(function(){
  $('#services-tabs').responsiveTabs({
    animation:'slide'
  });
});


// Setting Height of tab-bg according to img height;

$(window).on("load",function(){
  var height = $("#service-tab-1 img").height();
  var width = $("#service-tab-1 img").width();
  $(".tab-bg").css("minHeight",height);
  $(".tab-bg").css("minWidth",width);
})


/*===============================
||||||||||||||| Portfolio
===================================*/

$(window).on("load",function(){

  // Initialize isotope
  // $("#isotope-container").isotope({
  // });

  //filter items on button click
  // $("#isotope-filters").on('click','button',function(){
  //
  //   //get filter value
  //   var filterValue = $(this).attr('data-filter');
  //
  //   //filter Portfolio
  //   // $("#isotope-container").isotope({
  //   //   filter:filterValue
  //   // });
  //
  //   //active  Buttons
  //   // $("#isotope-filters").find('.active').removeClass('active');
  //   // $(this).addClass('active');
  // });
});

/*===============================
||||||||||||||| Magnifier
===================================*/

$(function(){
  $("#portfolio-wrapper")
  .magnificPopup({
    delegate:'a', //Child items selector, by clicking on it popup will open
    type:'image',
    gallery:{
      enabled:true
    }
  });
});


/*===============================
||||||||||||||| Testimonials
===================================*/

$(function(){
  $("#testimonial-slider").owlCarousel({
    items:1,
    autoplay:false,
    smartSpeed:700,
    autoplayHoverPause:true,
    nav:true,
    dost:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  });
});


// //
// // export const ProtectedRoute =({component:Component,restricted,...rest})=>{
// // return(
// // <Route {..rest} render={
// //   (props)=>{
// //     if(Auth.loggedIn){
// //       if(!restricted){
// //         return <Component {...props}/>
// //       }
// //       else{
// //         <Redirect to="/"
// //       }
// //     }
// //   }
// // }
// // )
// }
