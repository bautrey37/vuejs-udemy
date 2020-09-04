<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link
            to="/portfolio"
            class="nav-item"
            activeClass="active"
            tag="li"
          >
            <a class="nav-link">Portfolio</a>
          </router-link>
          <!-- active highlighting not working? -->
          <router-link
            to="/stocks"
            class="nav-item active"
            activeClass="active"
            tag="li"
          >
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a class="nav-link" href="#">End Day</a>
          </li>
          <!-- Not working -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & Load</a
            >
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Save Data</a>
              <a class="dropdown-item" href="#">Load Data</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
