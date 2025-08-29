// // Select all slides
// const slides = document.querySelectorAll(".slide");
// let current = 0;

// // Function to show slide
// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.remove("active");
//     if (i === index) slide.classList.add("active");
//   });
// }

// // Auto slide every 4 seconds
// setInterval(() => {
//   current = (current + 1) % slides.length;
//   showSlide(current);
// }, 2000);



// csss

// * Slider */
// .slides {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }
// .slide { 
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   transform: translateY(100%);  /* 👈 niche se start */
//   opacity: 0;
//   transition: transform 1s ease-in-out, opacity 1s ease-in-out;
// }

// .slide.active {
//   transform: translateY(0);   /* 👈 upar aa jaye */
//   opacity: 1;
//   z-index: 1;
// }