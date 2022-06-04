class MobileNavbar {
    constructor(mobilenavbar, navbar__links, navLinks) {
      this.mobilenavbar = document.querySelector(mobilenavbar);
      this.navbar__links = document.querySelector(navbar__links);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navbar__links.classList.toggle(this.activeClass);
      this.mobilenavbar.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobilenavbar.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobilenavbar) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobilenavbar",
    ".navbar__links",
    ".navbar__links li",
  );
  mobileNavbar.init();
  