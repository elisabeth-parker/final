$(document).ready(function() {
  timeSetUp();
  $('#subtitle').hide();
  $('#pagepiling').pagepiling({
	      menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['home', 'basics', 'history', 'divs','icons','hype','controversy','quiz','sources'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': 'white',
            'bulletsColor': 'white',
            'position': 'right',
            'tooltips': ['Home', 'The Basics', 'The History', 'The Divisions', 'The Icons', 'The Hype','The Issues', 'The Quiz','Sources']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,
        sectionsColor: ['white', '#ffaf62', '#ff9966', '#e17960', '#cd545f', '#ab175e','#801147','#600d35','#3a0f37'],

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
  $('#subtitle').fadeIn(2500);
  $('.hide').hide();
  $('.vid').tooltipster({
    interactive: 'true',
    side: ['left','top'],
    theme: 'tooltipster-shadow',
    trigger: 'custom',
    triggerOpen: {
      click: 'true'
    },
    triggerClose: {
      click: 'true',
      scroll: 'true',
      mouseleave: 'true'
    },
    selfDestruction: 'true'
  });
  $('.tooltip').tooltipster({
    side: ['bottom','left'],
    interactive: 'true',
    theme: 'tooltipster-shadow',
    trigger: 'custom',
    triggerOpen: {
      click: 'true'
    },
    triggerClose: {
      click: 'true',
      scroll: 'true',
      mouseleave: 'true'
    },
    selfDestruction: 'true'
  });
  $('.your-class').slick({
  });
});

// creates title to content transition when user moves to new page
function sectionSetup(x) {
  var title = x.getElementsByClassName("section-title");
  $(title).fadeOut(1000); //hide title and title background
  var content = x.getElementsByClassName("hide");
  $(content).fadeIn(3000); //show primary content
}

// functionality for essentials content
var current = 0;
var leftButton = $("#lr a").get(0);
var rightButton = $("#lr a").get(1);

leftButton.onclick = function() {previousText()};
rightButton.onclick = function() {nextText()};

function previousText() {
  if(current==0) {
  }
  else {
    current-=1;
    displayText(current);
  }
}

function nextText() {
  // console.log('nextText is running');
  // console.log(current);
  if(current==2) {
  }
  else {
    current+=1;
    displayText(current);
  }
}

function displayText(x) {
  // console.log('displayText is running')
  var text, image;
  switch (x) {
    case 0:
      text = "Ultimate frisbee is a bit like a hybrid between soccer and football. It's played with seven people per team on a grass, turf or sand field. Players throw the disc to one another and score by catching it in the endzone."
      image = "images/intro1.png";
      document.getElementById("left").style.cssText="opacity: 0; cursor: default";
      document.getElementById("right").style.opacity = "1";
      break;
    case 1:
      text = "Players typically specialize into roles called handlers and cutters. Handlers are like quarterbacks in football, and cutters are receivers."
      image = "images/intro2.png";
      document.getElementById("left").style.cssText="opacity: 1; cursor: pointer";
      document.getElementById("right").style.cssText="opacity: 1; cursor: pointer";
      break;
    case 2:
      text = "Ultimate is self-officiated, meaning players have to make their own calls. These include fouls (ultimate is non-contact), picks, and travels. Generally, the opposing player can contest the call being made."
      image = "images/intro3.png";
      document.getElementById("right").style.cssText="opacity: 0; cursor: default";
      document.getElementById("left").style.cssText="opacity: 1; cursor: pointer";
  }
  // console.log(text);
  $('#intro').text(text);
  $('#intro-image').attr("src",image);
}

// functionality for divisions content
var divCurrent = 0;
var divLeftButton = $("#div-lr a").get(0);
var divRightButton = $("#div-lr a").get(1);

divLeftButton.onclick = function() {divPreviousText()};
divRightButton.onclick = function() {divNextText()};

function divPreviousText() {
  if(divCurrent==0) {
  }
  else {
    divCurrent-=1;
    divDisplayText(divCurrent);
  }
}

function divNextText() {
  // console.log('divNextText is running');
  // console.log(divCurrent);
  if(divCurrent==2) {
  }
  else {
    divCurrent+=1;
    divDisplayText(divCurrent);
  }
}

function divDisplayText(x) {
  // console.log('divDisplayText is running')
  var text;
  switch (x) {
    case 0:
      text = "There are four primary divisions in ultimate in the US: youth, college, club and professional. At most levels, there are three gender divisions: women's, mixed and men's."
      document.getElementById("audl-active").id = "audl";
      $('#audl').attr("class","");
      document.getElementById("div-left").style.cssText="opacity: 0; cursor: default";
      document.getElementById("div-right").style.cssText="opacity: 1; cursor: pointer";
      break;
    case 1:
      text = "The professional division, currently dominated by the American Ultimate Disc League (AUDL), is the only division in which men and women are not afforded the same playing opportunities. Some small progress has been made; the Nashville NightWatch rostered Jesse Shofner in 2017, making her the first woman to play professional ultimate."
      document.getElementById("audl").id = "audl-active";
      $('#audl-active').attr("class","animated infinite flash");
      document.getElementById("div-left").style.cssText="opacity: 1; cursor: pointer";
      document.getElementById("div-right").style.cssText="opacity: 0; cursor: default";
  }
  // console.log(text);
  $('#divisions').text(text);
}

// functionality for teams content
var teamCurrent = 0;
var teamLeftButton = $("#team-lr a").get(0);
var teamRightButton = $("#team-lr a").get(1);
var mapText = "Show Teams";

teamLeftButton.onclick = function() {teamPreviousText()};
teamRightButton.onclick = function() {teamNextText()};

function teamPreviousText() {
  if(teamCurrent==0) {
  }
  else {
    teamCurrent-=1;
    teamDisplayText(teamCurrent);
  }
}

function teamNextText() {
  // console.log('teamNextText is running');
  // console.log(teamCurrent);
  if(teamCurrent==3) {
  }
  else {
    teamCurrent+=1;
    teamDisplayText(teamCurrent);
  }
}

function teamDisplayText(x) {
  // console.log('teamDisplayText is running')
  var text, image;
  switch (x) {
    case 0:
      text = "Although success is transient for many ultimate teams, there are some teams that dominate year after year."
      image = "images/crowns.gif";
      document.getElementById("teams-image").style.opacity="1";
      document.getElementById("fury").style.opacity="0";
      document.getElementById("riot").style.opacity="0";
      document.getElementById("mb").style.opacity="0";
      document.getElementById("map-toggle").style.display="none";
      document.getElementById("map-toggle").style.opacity="0";
      document.getElementById("team-left").style.cssText="opacity: 0; cursor: default";
      document.getElementById("team-right").style.cssText="opacity: 1; cursor: pointer";
      break;
    case 1:
      text = "This is especially true at the club level, where teams are stable enough to build a legacy and attract high-level players. Click on the icons to learn more about some of the elite women's club teams."
      image = "images/crowns.png";
      document.getElementById("teams-image").style.opacity="1";
      document.getElementById("fury").style.opacity="1";
      document.getElementById("riot").style.opacity="1";
      document.getElementById("mb").style.opacity="1";
      document.getElementById("map-toggle").style.display="none";
      document.getElementById("map-toggle").style.opacity="0";
      document.getElementById("map").style.display="none";
      document.getElementById("map").style.opacity="0";
      document.getElementById("team-left").style.cssText="opacity: 1; cursor: pointer";
      document.getElementById("team-right").style.cssText="opacity: 1; cursor: pointer";
      break;
    case 2:
      text = "Here, each state's number of active USAU members is represented by the size of the state's circle marker. Click the button below to highlight Colorado, Washington and California, the states represented by Molly Brown, Riot and Fury.";
      document.getElementById("teams-image").style.opacity="0";
      document.getElementById("fury").style.opacity="0";
      document.getElementById("riot").style.opacity="0";
      document.getElementById("mb").style.opacity="0";
      document.getElementById("map-toggle").style.display="inline";
      document.getElementById("map-toggle").style.opacity="1";
      document.getElementById("map").style.display="inline";
      document.getElementById("map").style.opacity="1";
      document.getElementById("team-left").style.cssText="opacity: 1; cursor: pointer";
      document.getElementById("team-right").style.cssText="opacity: 0; cursor: default";
  }



  $('#teams').text(text);
  $('#teams-image').attr("src",image);

}

function toggle() {
  // console.log("Toggle is running")
  var map = document.getElementById("map");
  if(mapText === "Show Teams") {
    mapText = "Back";
    map.src="http://elisabethparker.net/static/mj487/map/";
  } else {
    mapText = "Show Teams";
    map.src="http://elisabethparker.net/static/mj487/simple-map/";
  }
  // console.log(mapText);
  document.getElementById("map-toggle").innerText = mapText;
}

var timeImage = "";
// var timeText = "";
var sunrise, sunset;
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

if (minutes < 10) {
    minutes = "0" + minutes;
}

var suffix = "AM";
if (hours >= 12) {
  suffix = "PM";
  hours = hours - 12;
}
if (hours == 0) {
 hours = 12;
}

var currentTime = hours + ':' + minutes + ':' + seconds;

console.log(currentTime + suffix);

function timeSetUp() {
  $.ajax({
          type:"GET",
          url:"https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today",
          dataType:"json",
          success: nonconParse
  })
}

function nonconParse(data) {
  var zero = "0";
  sunrise = data.results.sunrise;
  if(sunrise.charAt(1)===":") {
    sunrise = zero.concat(sunrise);
  }
  sunset = data.results.sunset;
  if(sunset.charAt(1)===":") {
    sunset = zero.concat(sunset);
  }
  if(currentTime.charAt(1)===':') {
    currentTime = zero.concat(currentTime);
  }

  if(suffix === "PM") {
    console.log(currentTime.substring(0,2));
    console.log(sunset.substring(0,2));
    if(currentTime.substring(0,2)>sunset.substring(0,2)) {

      timeImage = "images/night.png";
      // timeText = "Dream sweet ultimate dreams!"
    } else {
      timeImage = "images/day.png";
      // timeText = "It's a beautiful day, get out there and play!";
    }
  } else {
    if(currentTime.charAt(0)<sunrise.charAt(0)) {
      timeImage = "images/night.png";
      // timeText = "Dream sweet ultimate dreams!"
    } else {
      timeImage = "images/day.png";
      // timeText = "It's a beautiful day, get out there and play!";
    }
  }

  document.getElementById("timeImage").src = timeImage;

  // var sources = [];
  // var tempPath = data["sources"];
  //
  // for (var i = 0, len = tempPath.length; i < len; ++i) {
  //       //console.log(i);
  //        //sets data to arrays for charts
  //        //sources.push(tempPath[i]["name"]);
  //       sources.push(tempPath[i]);
  //       console.log(sources[0]["name"]);
  //
  //         html += '<li><a href="#" onclick="loadArticles('  + String(sources[i]["id"]) + ')">' + sources[i]["name"] + '</a></li>'
  //
  // }
  // console.log(sources);
  // $("#sources-area").html(html);

}
