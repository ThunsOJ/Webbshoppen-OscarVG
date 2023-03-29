/*
Skriver ut panelen högst upp samt footern längst ned
 */

function panel() {
    const header = document.querySelector("#panel");
    const path = window.location.pathname;
  
    if (path === "/") {
      window.location.pathname = "/index.html";
    }
  
    header.innerHTML = `
      <nav class="nav">
        <ul>
          <li class="${path.includes("/kontakt.html") ? "active" : ""}">
            <a href="kontakt.html">Contact us</a>
          </li>
          <li class="${path.includes("/produkter.html") ? "active" : ""}">
            <a href="produkter.html">Products</a>
          </li>
          <li class="${path.includes("/order.html") ? "active" : ""}">
            <a href="order.html">Order</a>
          </li>
          <li class="${path.includes("/index.html") ? "active" : ""}">
            <a href="index.html">Startpage</a>
          </li>
        </ul>
      </nav>
    `;
}

  function footer(){
    const footer = document.querySelector("#footer");
    footer.innerHTML = `
    <b>Copyright &copy; 2023 - Melinda Walter, Oscar Jidåker, Kevin Dybeck, Gustav Henriksson</b>
    `
}

footer();
  
panel();