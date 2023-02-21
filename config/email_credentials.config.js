require('dotenv').config()
module.exports = {
    MAIL_USERNAME: process.env.NM_USERNAME,
    MAIL_PASSWORD: process.env.NM_PASSWORD,
    OAUTH_CLIENTID: process.env.NM_OAUTH2_CLIENTID,
    OAUTH_CLIENT_SECRET: process.env.NM_OAUTH2_SECRET_CLIENT,
    OAUTH_REFRESH_TOKEN: process.env.NM_OAUTH2_REFRESH_TOKEN
}