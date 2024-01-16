var circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('mouseover', () => {
    circle.classList.add("hovercircle");
  });

  circle.addEventListener('mouseout', () =>{

    circle.classList.remove("hovercircle");

  })
});


