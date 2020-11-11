const jwt = require('jsonwebtoken')

let users = {
    joao: {password: "teste"}
}

let login = function(req, res, next){

    try {
        let username = req.body.username
        let password = req.body.password

        if( users[username].password !== password ){
            res.status(401).send()
        }

        let payload = {username: username}


        let accessToken = jwt.sign(payload, 'secret', {
            algorithm: "HS256",
            expiresIn: 420
        })

        let refreshToken = jwt.sign(payload, 'secret', {
            algorithm: "HS256",
            expiresIn: 420
        })

        users[username].refreshToken = refreshToken

        res.cookie("jwt", accessToken, {secure: true, httpOnly: true})
        res.send()
    } catch (err) {
        next(err)
    }
}

let refresh = function (req, res, next){

    let accessToken = req.cookies.jwt

    if (!accessToken) res.status(403).send()

    let payload
    try{
        payload = jwt.verify(accessToken, 'secret')
    }
    catch(e){
        res.status(401).send()
    }

    let refreshToken = users[payload.username].refreshToken

    try{
        jwt.verify(refreshToken, 'secret')
    }
    catch(e){
        res.status(401).send()
    }

    let newToken = jwt.sign(payload, 'secret', 
    {
        algorithm: "HS256",
        expiresIn: 420
    })

    res.cookie("jwt", newToken, {secure: true, httpOnly: true})
    res.send()
}

module.exports = login