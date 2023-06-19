function addHeader() {
  const TEMPLATE = `
      <a class="logo padding-xl mix-diff" href="/" style="position: fixed; z-index: 99;">
        <img src="https://weareunder.design/images/under-header-logo.svg" class="desktop" alt="under header icon"/>
        <img src="https://weareunder.design/images/under-header-logo-small.svg" class="mobile" alt="under header icon"/>
      </a>
    `;

  class UnderHeader extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = TEMPLATE;
    }
  }
  customElements.define("under-header", UnderHeader);
}

addHeader();

const mediaQuery = window.matchMedia("(max-width: 992px)");
mediaQuery.addEventListener("change", handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);

function handleMediaQueryChange(mediaQuery) {
  const mobileImg = document.querySelector("under-header img.mobile");
  const desktopImg = document.querySelector("under-header img.desktop");

  if (mediaQuery.matches) {
    mobileImg.style.display = "block";
    desktopImg.style.display = "none";
  } else {
    mobileImg.style.display = "none";
    desktopImg.style.display = "block";
  }
}
