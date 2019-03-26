const db= require('../routes/users');

function getAllUsers(req, res, next) {
    db  
        .any(
            `SELECT * FROM users WHERE userName=${userName}`, {userName: req.body.userName}
        )
        .then(() => {
            res.json({message: "successfully got user"})
        })
        .catch(err => {
            console.log('Err couldnt get user')
        })
}

module.exports = getAllUsers