// CREATE FOOTER
function createFooter() {
  // footer content
  const footer = document.getElementById("footer");
  footer.innerHTML = `
    <div class="copyright">armadan.ks works of &copy;2022</div>
      <div class="social-container">
        <ul class="social-list">
          <li class="social-item">
            <a href="https://github.com/armdnks" class="social-link" target="_blank">
              <svg x="0px" y="0px" viewBox="0 0 40 40">
                <path d="M20,0C9,0,0,9,0,20c0,8.8,5.7,16.3,13.7,19c1,0.2,1.4-0.4,1.4-1 c0-0.5,0-1.7,0-3.4c-5.6,1.2-6.7-2.7-6.7-2.7C7.4,29.6,6.1,29,6.1,29c-1.8-1.2,0.1-1.2,0.1-1.2c2,0.1,3.1,2.1,3.1,2.1 c1.8,3.1,4.7,2.2,5.8,1.7c0.2-1.3,0.7-2.2,1.3-2.7c-4.4-0.5-9.1-2.2-9.1-9.9c0-2.2,0.8-4,2.1-5.4C9.1,13.1,8.4,11,9.5,8.3 c0,0,1.7-0.5,5.5,2.1c1.6-0.4,3.3-0.7,5-0.7c1.7,0,3.4,0.2,5,0.7c3.8-2.6,5.5-2.1,5.5-2.1c1.1,2.8,0.4,4.8,0.2,5.3 c1.3,1.4,2.1,3.2,2.1,5.4c0,7.7-4.7,9.4-9.1,9.9c0.7,0.6,1.4,1.8,1.4,3.7c0,2.7,0,4.8,0,5.5c0,0.5,0.4,1.2,1.4,1 C34.3,36.3,40,28.8,40,20C40,9,31,0,20,0z" />
              </svg>
              <p>github</p>
            </a>
          </li>
          <li class="social-item">
            <a href="https://www.instagram.com/armadanks/" class="social-link" target="_blank">
              <svg x="0px" y="0px" viewBox="0 0 40 40">
                <path
                  d="M20,3.6c5.3,0,6,0,8.1,0.1c1.9,0.1,3,0.4,3.7,0.7c0.9,0.4,1.6,0.8,2.3,1.5c0.7,0.7,1.1,1.4,1.5,2.3 c0.3,0.7,0.6,1.8,0.7,3.7c0.1,2.1,0.1,2.7,0.1,8.1s0,6-0.1,8.1c-0.1,1.9-0.4,3-0.7,3.7c-0.4,0.9-0.8,1.6-1.5,2.3 c-0.7,0.7-1.4,1.1-2.3,1.5c-0.7,0.3-1.8,0.6-3.7,0.7c-2.1,0.1-2.7,0.1-8.1,0.1s-6,0-8.1-0.1c-1.9-0.1-3-0.4-3.7-0.7 c-0.9-0.4-1.6-0.8-2.3-1.5c-0.7-0.7-1.1-1.4-1.5-2.3c-0.3-0.7-0.6-1.8-0.7-3.7C3.6,26,3.6,25.3,3.6,20s0-6,0.1-8.1 c0.1-1.9,0.4-3,0.7-3.7c0.4-0.9,0.8-1.6,1.5-2.3c0.7-0.7,1.4-1.1,2.3-1.5c0.7-0.3,1.8-0.6,3.7-0.7C14,3.6,14.7,3.6,20,3.6 M20,0 c-5.4,0-6.1,0-8.2,0.1C9.6,0.2,8.2,0.6,6.9,1C5.6,1.6,4.5,2.2,3.4,3.4C2.2,4.5,1.6,5.6,1,6.9c-0.5,1.3-0.8,2.7-0.9,4.9 C0,13.9,0,14.6,0,20c0,5.4,0,6.1,0.1,8.2c0.1,2.1,0.4,3.6,0.9,4.9c0.5,1.3,1.2,2.4,2.3,3.5c1.1,1.1,2.2,1.8,3.5,2.3 c1.3,0.5,2.7,0.8,4.9,0.9C13.9,40,14.6,40,20,40s6.1,0,8.2-0.1c2.1-0.1,3.6-0.4,4.9-0.9c1.3-0.5,2.4-1.2,3.5-2.3 c1.1-1.1,1.8-2.2,2.3-3.5c0.5-1.3,0.8-2.7,0.9-4.9C40,26.1,40,25.4,40,20s0-6.1-0.1-8.2c-0.1-2.1-0.4-3.6-0.9-4.9 c-0.5-1.3-1.2-2.4-2.3-3.5c-1.1-1.1-2.2-1.8-3.5-2.3c-1.3-0.5-2.7-0.8-4.9-0.9C26.1,0,25.4,0,20,0L20,0z M20,9.7 C14.3,9.7,9.7,14.3,9.7,20S14.3,30.3,20,30.3S30.3,25.7,30.3,20S25.7,9.7,20,9.7z M20,26.7c-3.7,0-6.7-3-6.7-6.7 c0-3.7,3-6.7,6.7-6.7c3.7,0,6.7,3,6.7,6.7C26.7,23.7,23.7,26.7,20,26.7z M30.7,6.9c-1.3,0-2.4,1.1-2.4,2.4s1.1,2.4,2.4,2.4 c1.3,0,2.4-1.1,2.4-2.4S32,6.9,30.7,6.9z"
                />
              </svg>
              <p>instagram</p>
            </a>
          </li>
          <li class="social-item">
            <a href="#" class="social-link">
              <svg x="0px" y="0px" viewBox="0 0 40 40">
                <path d="M36,0H4C1.8,0,0,1.8,0,4V36c0,2.2,1.8,4,4,4H36c2.2,0,4-1.8,4-4V4C40,1.8,38.2,0,36,0z M12.8,31.8H7.5V14.5 h5.4V31.8z M10.1,12.4c-1.7,0-2.8-1.2-2.8-2.7C7.3,8.1,8.4,7,10.2,7C11.9,7,13,8.1,13,9.7C13,11.1,11.9,12.4,10.1,12.4z M32.5,31.8 h-5.4v-9.6c0-2.2-0.8-3.8-2.7-3.8c-1.5,0-2.4,1-2.8,2c-0.1,0.4-0.2,0.8-0.2,1.3v10h-5.4V20c0-2.2-0.1-4-0.1-5.5h4.7l0.2,2.4h0.1 c0.7-1.1,2.4-2.8,5.3-2.8c3.5,0,6.2,2.4,6.2,7.5V31.8z" />
              </svg>
              <p>linkedin</p>
            </a>
          </li>
        </ul>
        <div class="social-line-border"></div>
    </div>
  `;

  // load footer css
  const footerStylePath = "./css/layout/footer.css";
  const footerStyleLink = document.createElement("link");
  footerStyleLink.rel = "stylesheet";
  footerStyleLink.href = footerStylePath;
  document.head.appendChild(footerStyleLink);
}
createFooter();
