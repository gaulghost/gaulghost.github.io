/* script for designing webpage has to be put here only */

/*-------------------------------------------------------------------------------
  Equating image containers
-------------------------------------------------------------------------------*/
// retriving height of cat image
var elmnt1 = document.getElementById("cat-img");
var num1 = elmnt1.offsetHeight;
console.log(num1)
// retriving height of bottle image
var elmnt2 = document.getElementById("bottle-img");
var num2 = elmnt2.offsetHeight;
console.log(num2)
// retriving height of butterfly img
var elmnt3 = document.getElementById("butterfly-img");
var num3 = elmnt2.offsetHeight;
console.log(num3)
// retriving height of butterfly img
var elmnt4 = document.getElementById("mushroom-img");
var num4 = elmnt4.offsetHeight;
console.log(num4)

// setting max to element1
var maximum = (num1+num2+num3+num4)/4;

// Setting height of images in gallery equal to height of cat img
elmnt1.style.height = `${maximum}px`
elmnt2.style.height = `${maximum}px`
elmnt3.style.height = `${maximum}px`
elmnt4.style.height = `${maximum}px`
