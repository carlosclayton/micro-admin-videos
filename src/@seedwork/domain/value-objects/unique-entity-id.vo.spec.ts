import UniqueEntityId from "./unique-entity-id.vo";
import InvalidUuidError from "../../errors/invalid-uuid.error";

describe("UniqueEntityId Tests", () => {
    let validateSpy;

    beforeEach(() => {
        // Spy on the validate method
        validateSpy = jest.spyOn(UniqueEntityId.prototype, 'validate');
    });

    afterEach(() => {
        // Clear the spy to avoid interference between tests
        validateSpy.mockRestore();
    });

    it("should throw error when uuid is invalid", () => {
        expect(() => new UniqueEntityId("invalid-uuid")).toThrow(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalled();
    });

    it("should not throw error when uuid is valid (auto-generated)", () => {
        expect(() => new UniqueEntityId()).not.toThrow();
        expect(validateSpy).toHaveBeenCalled();
    });

    it("should not throw error when uuid is valid (specific uuid)", () => {
        expect(() => new UniqueEntityId("f47ac10b-58cc-4372-a567-0e02b2c3d479")).not.toThrow();
        expect(validateSpy).toHaveBeenCalled();
    });
});
