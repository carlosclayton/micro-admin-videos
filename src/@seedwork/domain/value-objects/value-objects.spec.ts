import ValueObject from "./value-objects";

class ValueObjectsSpec extends ValueObject {
}

describe("ValueObjects Tests", () => {
    it('should set value', function () {

        let str = new ValueObjectsSpec("string");
        expect(str.value).toBe('string');


        let bool = new ValueObjectsSpec(true);
        expect(typeof bool).toBe("object");

    });

});
