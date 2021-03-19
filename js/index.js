//메인슬라이드//
var slide_index = 1;
       displaySlides(slide_index);

       function nextSlide(n) {
           displaySlides(slide_index += n);
       }

       function currentSlide(n) {
           displaySlides(slide_index = n);
       }

       function displaySlides(n) {
           var i;
           var slides = document.getElementsByClassName("showSlide");
           if (n > slides.length) { slide_index = 1 }
           if (n < 1) { slide_index = slides.length }
           for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";
           }
           slides[slide_index - 1].style.display = "block";
       }

//마우스오버//
function openMENU(evt, menuName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}
