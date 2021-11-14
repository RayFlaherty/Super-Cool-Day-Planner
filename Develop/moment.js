

(function()
{

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


// Save buttons log textarea entries to save. 
(nineBtn.onclick= function(){

  var nine= document.getElementById("0900").value;
  
  var nine = console.log(nine);
});

(tenBtn.onclick= function (){

  var ten= document.getElementById("1000").value;
  
  var ten = console.log(ten);
});
(elevenBtn.onclick= function(){

  var eleven= document.getElementById("1100").value;
  
  var eleven = 
console.log(eleven);
})
       
       
        
      

