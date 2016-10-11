import { getMessage } from "../../../lib/app";

describe("app", () => {
    describe("getMessage", () => {
        it("returns a message containing 'Good Message'", () => {
            expect(getMessage("Good Message")).toContain("Good Message");
        });
    });
});