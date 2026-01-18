export const verifyAuth = (req, res) => {
    res.status(200).json({
        id: req.dbUser._id,
        uid: req.dbUser.uid,
        email: req.dbUser.email,
        role: req.dbUser.role,
    });
  };