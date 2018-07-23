/**
 * Create Express.js middleware to skip route if query param was not provided.
 * @param {string} name
 */
function queried(name) {
    return (req, res, next) => {
        if (!req.query) {
            next(new Error("query string not parsed"));
        } else if (req.query[name]) {
            next();
        } else {
            next("route");
        }
    };
}

module.exports = queried;
