/*-------------------------------------------------------------------------------
  Equating containers
-------------------------------------------------------------------------------*/
// retriving height of designing block under services section
var elmnt1 = document.getElementById("service-designing");
var num1 = elmnt1.offsetHeight;
console.log(num1)
// retriving height of blogging block under services section
var elmnt2 = document.getElementById("service-blogging");
var num2 = elmnt2.offsetHeight;
console.log(num2)

// retriving height of coding block under services section
var elmnt3 = document.getElementById("service-coding");
var num3 = elmnt3.offsetHeight;
console.log(num3)
// Checking which is bigger
var maximum = Math.max(num1, num2, num3);
console.log(maximum)

// Setting height of divs to equal from service section
elmnt1.style.height = `${maximum}px`
elmnt2.style.height = `${maximum}px`
elmnt3.style.height = `${maximum}px`
