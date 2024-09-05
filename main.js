let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #529CEA;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #529CEA;">Estudiante y futura programadora Web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
