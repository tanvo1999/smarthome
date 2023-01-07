const chart = (token) => (
    fetch(`http://192.168.43.207:8080/api/temp/chart`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token, 
        },
    }).then((response) => response.json())
);

export default chart