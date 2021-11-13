

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