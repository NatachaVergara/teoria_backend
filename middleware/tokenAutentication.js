module.exports.aunthenticateToken = (req, res, next) =>
{
    const headerAuthorization = req.headers['authorization'];
    if (typeof headerAuthorization !== 'undefined')
    {
        const token = headerAuthorization;
        req.token = token;
        next()
    } else
    {
        return res.status(403).send('No autorizado');
    }
}