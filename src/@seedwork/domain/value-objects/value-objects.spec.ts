import ValueObject from "./value-objects";

class ValueObjectsSpec extends ValueObject {}

describe("ValueObjects Tests", () => {
    it('should set value', function () {
        let vo = new ValueObjectsSpec('value');
        expect(vo.value).toBe('value');


        vo = new ValueObjectsSpec({prop: 'value'});
        expect(vo.value).toStrictEqual({prop: 'value'});

    });

    it('should return string value', function () {
        let vo = new ValueObjectsSpec('null');

        expect(vo + "").toBe('null');

        vo = new ValueObjectsSpec(undefined);

        expect(vo + "").toBe('undefined');



    })
});
