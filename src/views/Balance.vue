<template>
<body>
    <Nav />
    <main class="container">
        <h1 style="margin-top: 100px"> Meu Saldo: {{balanceValue}}</h1>
        <Movement />
    </main>
</body>
</template>

<script>
    import Cookie from 'js-cookie';
    import Nav from '../components/Nav.vue'
    import Movement from '../components/Movement.vue'

    const userId = JSON.parse(localStorage.getItem('user'));

    export default {
        name: 'Balance',
        components: {
            Nav,
            Movement,
        },

        data() {
            return {
                balanceValue: '',
            };
        },

        methods: {
            balance() {
                const payload = {
                    userId: userId
                };
                fetch(`http://127.0.0.1:8000/api/balance`, {
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
                    const balanceString = JSON.stringify(res);
                    const balanceJson = JSON.parse(balanceString);
                    this.balanceValue = balanceJson.data.saldo
                })
                .catch((error) => {
                    console.log(error)
                });
            },
        },
        beforeMount(){
            this.balance()
        },
    }
</script>

<style>
  
</style>