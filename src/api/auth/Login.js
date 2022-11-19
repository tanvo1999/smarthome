const login = (email, password, fcm_token, os, id, name) => (
    fetch(`http://192.168.5.206:8080/api/auth/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            fcm_token: fcm_token,
            os: os,
            device_id: id,
            device_name: name
        }),
    }).then((response) => response.json())
);

export default login
