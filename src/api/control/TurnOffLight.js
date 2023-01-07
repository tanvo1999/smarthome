const light = (token) => (
    fetch(`http://192.168.43.207:8080/api/lights/turn-off`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token, 
        },
    }).then((response) => response.json())
);

export default light