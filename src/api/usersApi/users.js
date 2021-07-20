const baseUrl = 'http://localhost:3010';

const postUsers = (data) => {
    return fetch(`${baseUrl}/users`, {
        method:'POST',
        headers:
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
};

const users = (name) => {
    return fetch (`${baseUrl}/users`, {
        method:'GET',
    }).then((response) => response.json())
}

const usersPetitions = {
    postUsers,
    users
}

export default usersPetitions