const expect = require("expect.js");
const queried = require("..");

describe("queried(string)", () => {
    var middleware;

    beforeEach(() => {
        middleware = queried("foo");
    });

    it("should return middleware", () => {
        expect(middleware).to.be.a("function");
    });
});

describe("queried(string) => function", () => {
    var middleware, req, res;

    beforeEach(() => {
        middleware = queried("foo");
        req = {query: {foo: "42"}};
        res = {};
    });

    it("should call next with error on missing query", done => {
        delete req.query;

        middleware(req, res, err => {
            expect(err).to.be.an(Error);
            done();
        });
    });

    it("should call next with 'route' on missing param", done => {
        delete req.query.foo;

        middleware(req, res, err => {
            expect(err).to.be("route");
            done();
        });
    });

    it("should call next to continue on found param", done => {
        middleware(req, res, err => {
            expect(err).to.be(undefined);
            done();
        });
    });
});
