
const user = (token) => (
    fetch(`http://192.168.1.11:8080/api/user-info`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token, 
        },
    }).then((response) => response.json())
);

export default user