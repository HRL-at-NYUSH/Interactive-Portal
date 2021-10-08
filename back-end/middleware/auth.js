module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      console.log('Authenticated')
      res.redirect('http://localhost:3000/profile')
      return next()
    } else {
      console.log('Not authenticated')
      res.redirect('http://localhost:4000/google')
    }
  },
}
