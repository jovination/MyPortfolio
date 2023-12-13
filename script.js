function colorize() {
    var hue = Math.random() * 360;
    return "HSL(" + hue + ",100%,50%)";
  }
  
  $("#sonar-wave").on("webkitAnimationIteration oanimationiteration animationiteration", function(){
    $(this).css("background-color", colorize());
  });
  
  new SimpleBar(document.querySelector('.wrapper'));
   // Get all the icon elements
   const icons = document.querySelectorAll('.icon');

   // Add a sonar effect to each icon on hover
   icons.forEach((icon) => {
       const sonarEffect = document.createElement('div');
       sonarEffect.classList.add('sonar-effect');
       icon.appendChild(sonarEffect);
   
       icon.addEventListener('mouseenter', () => {
           const effect = icon.querySelector('.sonar-effect');
           effect.style.animation = 'none';
           void effect.offsetWidth; // Trigger reflow to restart animation
           effect.style.animation = 'sonar 1s ease-out';
       });
   });
   