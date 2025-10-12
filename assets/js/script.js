document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-icon');
  const mainNav = document.getElementById('main-nav');
  const mainNavMenu = document.getElementById("nav-div");

  const streamModal = document.getElementById("stream-modal");
  const streamMenu = document.getElementById("stream-modal-content");

  hamburger.addEventListener('click', function() {
    if(!streamModal.classList.contains("active"))
      mainNav.classList.toggle('active');
  });

  document.addEventListener("click", function() {
    if((streamModal.contains(event.target) || hamburger.contains(event.target)) && streamModal.classList.contains("active") && !streamMenu.contains(event.target)){
      console.log("passed")
      streamModal.classList.remove('active');
    }

    if(mainNav.classList.contains("active") && mainNav.contains(event.target) && !mainNavMenu.contains(event.target))
      mainNav.classList.remove("active");
  });


});

function showStreamingLinks() {
  const modal = document.getElementById("stream-modal");
  modal.classList.toggle("active");
}

