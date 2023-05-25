window.addEventListener("scroll", function() {
    
    var windowHeight = window.innerHeight;
  

    var aboutTitle = document.querySelector(".about_title");
    var aboutTitlePosition = aboutTitle.getBoundingClientRect().top;
  
    if (aboutTitlePosition < windowHeight / 1.5) {
      aboutTitle.classList.add("show");
    } else {
        aboutTitle.classList.remove("show");
    }

    var thesisS = document.querySelector(".thesis");
    var thesisSP = thesisS.getBoundingClientRect().top;
  
    if (thesisSP < windowHeight / 1.5) {
      thesisS.classList.add("show");
    } else {
        thesisS.classList.remove("show");
    }


    var thesisDS = document.querySelector(".thesis_desc");
    var thesisSDP = thesisDS.getBoundingClientRect().top;
  
    if (thesisSDP < windowHeight / 1.5) {
      thesisDS.classList.add("show");
    } else {
        thesisDS.classList.remove("show");
    }
    
    var eventT = document.querySelector(".events_title");
    var eventTP = eventT.getBoundingClientRect().top;
  
    if (eventTP < windowHeight / 1.5) {
      eventT.classList.add("show");
    } else {
        eventT.classList.remove("show");
    }

    var eventD = document.querySelector(".events_desc");
    var eventDP = eventD.getBoundingClientRect().top;
  
    if (eventDP < windowHeight / 1.5) {
      eventD.classList.add("show");
    } else {
        eventD.classList.remove("show");
    }

    var eventH = document.querySelector(".events_horizontal");
    var eventHP = eventH.getBoundingClientRect().top;
  
    if (eventHP < windowHeight / 1) {
      eventH.classList.add("show");
    } else {
        eventH.classList.remove("show");
    }

    var team = document.querySelector(".team");
    var teamP = team.getBoundingClientRect().top;
  
    if (teamP < windowHeight / 1.5) {
      team.classList.add("show");
    } else {
        team.classList.remove("show");
    }

    var news = document.querySelector(".news");
    var newP = news.getBoundingClientRect().top;
  
    if (newP < windowHeight / 1.5) {
      news.classList.add("show");
    } else {
        news.classList.remove("show");
    }

});



function toggleMenu() {
  var mobileMenu = document.querySelector('.mobile-menu');

  mobileMenu.classList.toggle('show-mobile-menu');

  var hamburgerButton = document.querySelector('.hamburger-button');
  hamburgerButton.classList.toggle('active');

  var mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('show-mobile-menu');
      hamburgerButton.classList.remove('active');
    });
  });

  
}
