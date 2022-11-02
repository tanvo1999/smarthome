const login = (phone, password, fcm_token) => (
    fetch(`http://127.0.0.1:8000/api/auth/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phone: phone,
            password: password,
            fcm_token: fcm_token
        }),
    }).then((response) => response.json())
);

export default login
