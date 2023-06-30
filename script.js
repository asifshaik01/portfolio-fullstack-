// Header toggle 
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
 document.querySelector('body').classList.toggle('mobile-nav-active');
 this.classList.toggle('fa-xmark')
})

// Typing effect 
let typed = new Typed('.auto-input',{
    strings: ['','Front-End Developer!','Back-End Developer!','UI/UX Designer!','Freelancer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})
  

// readmore button
function showMore() {
    var moreText = document.getElementById("more");
    var btnText = document.querySelector("button");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    }
  }
  showMore();
  


