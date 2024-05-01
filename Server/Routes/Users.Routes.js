const userControllers = require("../Controllers/Users.Controller.js");
const authenticate = require("../Middlewares/GoogleAuthentication.js")

module.exports = (app) => {
    app.post("/auth/google", authenticate.AccessToken);
    app.post("/auth/google/refresh-token", authenticate.refreshedAccessToken);
    app.post("/register",userControllers.Register);
    app.get("/users",userControllers.fetchUsers)
}