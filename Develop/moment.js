

(function(){

    //DISPLAY DAY
    var NowDate = moment().format('dddd');
  // instantiate a moment object
  var NowMoment = moment().format('LLL');
  
  
  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('currentDay');
  eDisplayMoment.innerHTML = NowMoment;
  
  // display value of Date object in #displayJsDate div
  var eDisplayDate = document.getElementById('currentWeekDay');
  eDisplayDate.innerHTML = NowDate;
})();

//time check toggle function
var currentTime= moment().hours();
  console.log(currentTime);

  (function toggleClass(){
    var element = document.getElementById("9");
  //currentTime = document.getElementsByName('');
    element.classList.toggle("past");
  //;
 // else (currentTime < document.getElementsByName(textarea)){
   //element.classList.toggle(future);
 //}
  
})

// Save buttons log textarea entries to save. 
(nineBtn.onclick= function(){

  var nine= document.getElementById("9").value;
  
  var nine = console.log(nine);

 
});

(tenBtn.onclick= function (){

  var ten= document.getElementById("10").value;
  
  var ten = console.log(ten);
});
(elevenBtn.onclick= function(){

  var eleven= document.getElementById("11").value;
  
  var eleven = 
console.log(eleven);
});
(twelveBtn.onclick= function(){

  var twelve= document.getElementById("12").value;
  
  var twelve = 
console.log(twelve);
});
(oneBtn.onclick= function(){

  var one= document.getElementById("13").value;
  
  var one = 
console.log(one);
});
(twoBtn.onclick= function(){

  var two= document.getElementById("14").value;
  
  var two = 
console.log(two);
});
(threeBtn.onclick= function(){

  var three= document.getElementById("15").value;
  
  var three = 
console.log(three);
});
(fourBtn.onclick= function(){

  var four= document.getElementById("16").value;
  
  var four = 
console.log(four);
});
(fiveBtn.onclick= function(){

  var five= document.getElementById("17").value;
  
  var five = 
console.log(five);
});

