<template>
    <ul class="list-group">
        <li class="list-group-item active" aria-current="true">Últimas Movimentações</li>
        <li v-for="item in movementsList" :key="item.index" class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{{item.day}}</div>
                Valor: {{item.value}}
            </div>
            <span class="badge bg-info rounded-pill">{{item.operation}}</span>
        </li>
    </ul>
</template>

<script>
  import Cookie from 'js-cookie';
  const userId = JSON.parse(localStorage.getItem('user'));

  export default {
    name: 'Movement',

    data() {
        return {
            movementsList: '',
            operation: 'SAQUE'
        };
    },

    methods: {
      movements() {
          const payload = {
            userId: userId
          };
          fetch(`http://127.0.0.1:8000/api/movements`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Request-Headers':'application/json',
                  'Authorization': `Bearer ${Cookie.get('_myapp_token')}`
              },
              body: JSON.stringify(payload)
          })
          .then(response => response.json())
          .then(res => {
            const movementString = JSON.stringify(res);
            const movementJson = JSON.parse(movementString);
            this.movementsList = movementJson.data
          })
          .catch((error) => {
              console.log(error)
          });
      },
    },
    beforeMount(){
      this.movements()
    },
  }
</script>
