<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-info">
      <div class="container-fluid">
        <img src="../assets/cap-logo.png" alt="" width="150">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0 text-white">
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/dashboard">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/balance">Saldo e Movimentações</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/deposit">Depositar</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/withdraw">Sacar</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
</script>
