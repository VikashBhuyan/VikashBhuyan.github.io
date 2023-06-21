


const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Web Developer', 'Backend Developer', 'Frontend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true
})

const resume_btn1 = document.querySelector("#resume-button-1");
const resume_btn2 = document.querySelector("#resume-button-2");
const  classbntn = document.querySelector("#resume-button");
resume_btn1.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1kp6GP_eb9IjysV7WGj6ilHDnylv3TvGP/view"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=1e6m0svWwur-BFKexneTrXsZxZYgM6ix0";
});

resume_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1kp6GP_eb9IjysV7WGj6ilHDnylv3TvGP/view"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=1e6m0svWwur-BFKexneTrXsZxZYgM6ix0";
});

classbntn.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1kp6GP_eb9IjysV7WGj6ilHDnylv3TvGP/view"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=1e6m0svWwur-BFKexneTrXsZxZYgM6ix0";
});
