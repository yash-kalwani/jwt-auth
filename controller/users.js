const profile = async (req, res, next) => {
  const { user } = req.locals || {};
  res.json({ user });
};

module.exports = {
  profile,
};
