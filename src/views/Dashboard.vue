<template>
<body>
   <Nav />
  <main class="flex-shrink-0 mt-5">
    <div class="container">
      <h1 style="margin-top: 100px" class="mb-5">Olá, {{name}}</h1>

      <div class="row">
        <div class="col-lg-4">
          <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Sacar</div>
            <div class="card-body text-primary">
              <div class="d-grid gap-2">
                <router-link class="btn btn-primary" to="/withdraw">Sacar</router-link> 
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-4">
            <div class="card border-success mb-3" style="max-width: 18rem;">
              <div class="card-header">Depositar</div>
              <div class="card-body text-success">
                <div class="d-grid gap-2">
                  <router-link class="btn btn-success" to="/deposit">Depositar</router-link> 
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card border-warning mb-3" style="max-width: 18rem;">
              <div class="card-header">Saldo e Movimentações</div>
              <div class="card-body text-warning">
                <div class="d-grid gap-2">
                  <router-link class="btn btn-warning" to="/balance">Ver</router-link> 
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </main>
</body>
 
</template>

<script>
  import Nav from '../components/Nav.vue'
  import Cookie from "js-cookie";

  export default {
    name: 'Dashboard',
    components: {
      Nav
    },

    data() {
        return {
            name: '',
        };
    },
    methods: {
      me(){
        const token = Cookie.get('_myapp_token');
        fetch(`http://127.0.0.1:8000/api/me`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers':'application/json',
                'Authorization': `Bearer ${token}`

            },
        })
        .then(response => response.json())
        .then(res => {
                localStorage.setItem('user', JSON.stringify(res));
                const user = JSON.parse(localStorage.getItem('user'));
                this.name = user.name

        })
        .catch((error) => {
            console.log(error)
        });
      }
    },
    beforeMount(){
      this.me()
    },
  }
</script>


