"use strict";
var app_1 = require("../../../lib/app");
describe("app", function () {
    describe("getMessage", function () {
        it("returns a message containing 'Good Message'", function () {
            expect(app_1.getMessage("Good Message")).toContain("Good Message");
        });
    });
});
//# sourceMappingURL=app.spec.js.map