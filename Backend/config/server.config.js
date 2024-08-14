require('dotenv').config()

const config = {
    PORT : process.env.PORT,
    DB_URI : process.env.MONGO_URI,
    secretKey : process.env.SECRET_KEY
}

module.exports = {
    config
}