const login = (email, password, fcm_token, os) => (
    fetch(`http://192.168.1.7:8080/api/auth/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            fcm_token: fcm_token,
            os: os
        }),
    }).then((response) => response.json())
);

export default login
