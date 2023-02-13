const nav=`
<nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">Movies <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="features.html">Superherog</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="pricing.html">Bolygok</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Piros</a>
        </li>
      </ul>
    </div>
  </nav>
`
document.body.insertAdjacentHTML("beforebegin",nav)