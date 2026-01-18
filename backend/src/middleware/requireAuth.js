import verifyUser from "./verifyUser.js";
import attachUser from "./attachUser.js";

export const requireAuth = [verifyUser, attachUser];
