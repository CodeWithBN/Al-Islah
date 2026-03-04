 const btn = document.getElementById("backToTop");

      window.onscroll = function () {
        if (document.documentElement.scrollTop > 200) {
          btn.style.display = "block";
        } else {
          btn.style.display = "none";
        }
      };

      btn.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
      
       //drawer
      const menuToggle = document.getElementById("menuToggle");
      const mobileDrawer = document.getElementById("mobileDrawer");
      const closeDrawer = document.getElementById("closeDrawer");

      menuToggle.addEventListener("click", () => {
        mobileDrawer.classList.add("active");
      });

      closeDrawer.addEventListener("click", () => {
        mobileDrawer.classList.remove("active");
      });