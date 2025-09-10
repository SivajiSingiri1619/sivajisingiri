  document.querySelectorAll(".slider-wrapper").forEach(wrapper => {
  const cards = wrapper.querySelectorAll(".card");
  const nextBtn = wrapper.querySelector(".next");
  const prevBtn = wrapper.querySelector(".prev");

  let current = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove("active");
      if (i === index) {
        card.classList.add("active");
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % cards.length;
    showCard(current);
  });

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    showCard(current);
  });
});


function copyEmail() {
  navigator.clipboard.writeText("singirisivaji@gmail.com");
  alert("Email copied!");
}


// projects

const proj_info = [
  {
    para:`NSD Safety Nets
Developed for client ASK Solutions.
Purpose: Showcasing safety products like balcony nets, invisible grills, monkey nets.
Tools Used: HTML, CSS, JavaScript.
Responsive and user-friendly design built for customer trust.`,
    link_url:"https://www.safetynetsnsd.com/",
    git_repo:"https://github.com/SivajiSingiri1619/nsdnets",
    image_url:"./images/nsd_nets.png"
  },
  {
    para:`Campus Wheels Project
Designed to provide eco-friendly and affordable transportation solutions within the college campus.
Allows students and staff to book rides easily and move around campus efficiently.
Integrated features like real-time availability, route tracking, and ride history.`,
    link_url:"no",
    git_repo:"https://github.com/SivajiSingiri1619/campuswheels",
    image_url:"./images/campus_wheels.png"
  },
  {
    para: `Personal Portfolio Website
Built a responsive personal website to showcase academics, coding profiles, and certifications.
Purpose: Highlight my skills and projects in a professional way.
Tools Used: HTML, CSS, JavaScript.
Mobile-friendly design with smooth scrolling and media queries.`,
    link_url:"https://sivajisingiri1619.github.io/sivajisingiri/",
    git_repo:"https://github.com/SivajiSingiri1619/sivajisingiri",
    image_url:"./images/portfol_img.png"
  }
];

let curr_index = 0;


const proj_img = document.getElementsByClassName("project-img1")[0];
const proj_para = document.getElementsByClassName("proj-para")[0]; // fixed here
const live_link = document.getElementsByClassName("live-link")[0];
const git_link = document.getElementsByClassName("github-link")[0];

const forward_btn = document.getElementsByClassName("forward-btn")[0];
const backward_btn = document.getElementsByClassName("backward-btn")[0];


function loadProject(index) {
  proj_img.src = proj_info[index].image_url;
  proj_para.textContent = proj_info[index].para;
  live_link.href = proj_info[index].link_url;
  git_link.href = proj_info[index].git_repo;
}
loadProject(curr_index);

forward_btn.addEventListener("click", ()=> {
  curr_index++;
  if(curr_index >= proj_info.length) curr_index = 0;
  loadProject(curr_index);
});

backward_btn.addEventListener("click", ()=> {
  curr_index--;
  if(curr_index < 0) curr_index = proj_info.length - 1;
  loadProject(curr_index);
});



