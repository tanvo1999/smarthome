const logout = (token, fcm_token) => (
    fetch(`http://192.168.5.206:8080/api/auth/logout?fcm_token=${fcm_token}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token, 
        },
    }).then((response) => response.json())
);

export default logout
