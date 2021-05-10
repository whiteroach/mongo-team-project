// CheckLogin
exports.checkLogin = (req, res, next) => {
  if (!req.session.user) return next();
  res.redirect("/product");
};

// Permission
exports.permission = (req, res, next) => {
  if (req.session.user) return next();
  res.redirect("/login");
};
