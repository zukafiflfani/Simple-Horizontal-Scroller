let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");



// Function for smooth scrolling implementation
function smoothScroll(scrollAmount, duration) {
    let startTime = null;
    let startPosition = scrollContainer.scrollLeft;
    let endPosition = startPosition + scrollAmount;
  
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const ease = elapsedTime / duration; // Ease-in easing function (adjust as needed)
  
      // Calculate the new scroll position with easing
      scrollContainer.scrollLeft = startPosition + (endPosition - startPosition) * ease;
  
      if (ease < 1) {
        window.requestAnimationFrame(animate);
      }
    };
  
    window.requestAnimationFrame(animate);
  }


scrollContainer.addEventListener("wheel",(evt)=> {
    evt.preventDefault(); 
    smoothScroll(evt.deltaY, 100); // Adjust duration for desired smoothness
})

nextBtn.addEventListener("click",()=>{
    smoothScroll(900, 600); // Adjust scroll amount and duration
})
backBtn.addEventListener("click",()=>{
    smoothScroll(-900, 600); // Adjust scroll amount and duration
})