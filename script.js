const resume_btn1 = document.getElementById("resume-button-1")
const resume_btn2 = document.getElementById("resume-button-2")
const resume_btn3 = document.getElementById("resume-button")

resume_btn1.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
   "https://drive.google.com/file/d/1e6m0svWwur-BFKexneTrXsZxZYgM6ix0/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/file/d/1e6m0svWwur-BFKexneTrXsZxZYgM6ix0/view?usp=sharing";
});

resume_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1e6m0svWwur-BFKexneTrXsZxZYgM6ix0/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/file/d/1e6m0svWwur-BFKexneTrXsZxZYgM6ix0/view?usp=sharing";
});
resume_btn3.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1e6m0svWwur-BFKexneTrXsZxZYgM6ix0/view?usp=sharing"
    );
    window.location.href =
      "https://drive.google.com/file/d/1e6m0svWwur-BFKexneTrXsZxZYgM6ix0/view?usp=sharing";
  });
  document.addEventListener('DOMContentLoaded', function() {
    const resume_btn2 = document.querySelector("#resume-button-1");
    resume_btn2.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "resume/Vikash_Bhuyan_Resume.pdf";
    });
  });
document.addEventListener('DOMContentLoaded', function() {
    const resume_btn2 = document.querySelector("#resume-button-2");
    resume_btn2.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "resume/Vikash_Bhuyan_Resume.pdf";
    });
  });