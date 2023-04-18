const Token = require('../schemas/Token')

const isAuthenticated = async (req, res, next) => 
{ 
  if (req.user) return next() 
  else {
    const UToken = await Token.findOne({ token: req.headers.authorization });
    if (UToken) {
      
      req.user = {
        id: UToken.schemasId,
        discordId: UToken.discordId,
        accessToken: UToken.accessToken,
        refreshToken: UToken.refreshToken,
      }
      return next()
    }
    return res.status(403).send({ msg: 'Unauthorized' })
  }
}

module.exports = { isAuthenticated }