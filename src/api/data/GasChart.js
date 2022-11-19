const chart = (token) => (
    fetch(`http://192.168.5.206:8080/api/gas/chart`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token, 
        },
    }).then((response) => response.json())
);

export default chart