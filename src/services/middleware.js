import Cookie from "js-cookie";

export default {

    auth(to, from, next) {
        const token = Cookie.get('_myapp_token');

        if(!token) {
            next('/');
        }

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
             if(res.status == "Token is Invalid" || 
                res.status == "Token is Expired" || 
                res.status == "Authorization Token not found") {
                next('/');
            } else {
                localStorage.setItem('user', JSON.stringify(res));
            }

        })
        .catch((error) => {
            console.log(error)
        });
        
        next();
    },
}