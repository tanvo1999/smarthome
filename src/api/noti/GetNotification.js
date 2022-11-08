
const noti = (token) => (
    fetch(`http://192.168.5.206:8080/api/get-notification`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token, 
        },
    }).then((response) => response.json())
);

export default noti