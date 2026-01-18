export const requireRole = (...roles) => (req, res, next) => {
    if (!roles.includes(req.dbUser.role)) {
        return res.status(403).json({ message: "Forbidden" });
    }
    next();
};
