const light = (token) => (
    fetch(`http://192.168.1.11:8080/api/lights/turn-on`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token, 
        },
    }).then((response) => response.json())
);

export default light