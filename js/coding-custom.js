/* script for coding webpage has to be put here only */
/*-------------------------------------------------------------------------------
  Navigation - Hide mobile menu after clicking on a link
-------------------------------------------------------------------------------*/

  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });
