
const {admin} = require("./admin");

exports.appCheckVerification = (req, res, next) => {
  const appCheckToken = req.header("X-Firebase-AppCheck");
  if (!appCheckToken) {
    res.status(401);
    return next("Unauthorized");
  }

  try {
    admin.appCheck().verifyToken(appCheckToken).then(() => {
      return next();
    });
  } catch (err) {
    res.status(401);
    return next("Unauthorized");
  }
};
