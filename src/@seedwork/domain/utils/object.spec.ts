import {deepFreeze} from "./object";


describe("Object Tests", () => {

    it("should not freeze a scalar value", () => {
        const str = deepFreeze("a");
        expect(typeof str).toBe("string");

        let boolean = deepFreeze(true);
        expect(typeof boolean).toBe("boolean");
        boolean = deepFreeze(false);
        expect(typeof boolean).toBe("boolean");

        const num = deepFreeze(5);
        expect(typeof num).toBe("number");
    });

    it("should be a imutable object", () => {
        const obj = {
            prop1: "value1",
            prop2: {
                prop3: "value3"
            }
        }

        const objFreezed = deepFreeze(obj);

        expect(() => {
            (objFreezed as any).value.prop1 = "value1";
        }).toThrow("Cannot set properties of undefined (setting 'prop1')");

        expect(() => {
            (objFreezed as any).value.prop2.prop3 = "value3";
        }).toThrow("Cannot read properties of undefined (reading 'prop2')");
    });
});
