<template>
<body>
    <Nav />
    <main class="form-signin mt-5">
        <form @submit.stop.prevent="withdraw">
            <img src="../assets/cap-logo.png" alt="" width="300">
            <h1 class="h3 mb-3 fw-normal">Sacar</h1>
            <div class="form-floating">
                <input required v-model="value" type="text" class="form-control" id="floatingPassword">
                <label for="floatingPassword">Valor</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary mt-2" type="submit">Sacar</button>
        </form>
    </main>
</body>
</template>

<script>
    import Cookie from 'js-cookie';
    import Nav from '../components/Nav.vue'


    export default {
        name: 'Withdraw',
        components: {
            Nav
        },

        data() {
            return {
                value: '',
            };
        },

        methods: {
            withdraw() {
                const userId = JSON.parse(localStorage.getItem('user'));
                const payload = {
                    value: this.value,
                    userId: userId.id,
                };
                fetch(`http://127.0.0.1:8000/api/withdraw`, {
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
                    if(res.message) {
                        this.$moshaToast(res.message, {type:'success'})
                    } else if(res.error){
                        this.$moshaToast(res.error, {type:'danger'})
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
            
                this.value = '';
            
            },
        },

    }
</script>

<style>
    .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    }

    .form-signin .checkbox {
    font-weight: 400;
    }

    .form-signin .form-floating:focus-within {
    z-index: 2;
    }

    .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    }
</style>