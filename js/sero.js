
const openNav = () => {
 
  document.getElementById("mySidenav").style.width = "390px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


  document.addEventListener("DOMContentLoaded", function () {

    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
      element.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    })



    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
          this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
            // hide every submenu as well
            everysubmenu.style.display = 'none';
          });
        })
      });

      document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
        element.addEventListener('click', function (e) {

          let nextEl = this.nextElementSibling;
          if (nextEl && nextEl.classList.contains('submenu')) {
            // prevent opening link if link needs to open dropdown
            e.preventDefault();
            console.log(nextEl);
            if (nextEl.style.display == 'block') {
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }

          }
        });
      })
    }
    // end if innerWidth

  });





  const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   document.getElementById("myBtn").style.display="block";
  } else {
    document.getElementById("myBtn").style.display="none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function demo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



