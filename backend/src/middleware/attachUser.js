import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";


const attachUser = asyncHandler(
    async (req, res, next) => {

          const { uid, email } = req.user;
      
          let dbUser = await User.findOne({ uid });
      
          if (!dbUser) {
            dbUser = await User.create({
              uid,
              email,
            });
          }
      
          req.dbUser = dbUser;
          next();
      }
);

export default attachUser;
