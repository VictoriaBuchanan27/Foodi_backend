const {db}= require('./dbConnect');

function getAllUsers(username) {
    return db  
        .any(
            'SELECT * FROM users WHERE username=$[username]', {username: username}
        )
        .then((data) => {
            return data;
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = {
    getAllUsers,
}