
import { Category } from "./category";
import {validate as uuidValidate}  from "uuid";

describe("Category Tests", () => {

    test("should create category with name", () => {

        const props = {
            name: "Category 1",
            description: "Category 1 description",
        }

        const category = new Category(props);
        expect(category.name).toBe("Category 1");
        expect(category.description).toBe("Category 1 description");
        expect(category.is_active).toBeTruthy();
        expect(category.createdAt).toBeInstanceOf(Date);
    });

    test("should create category with name and is_active", () => {

            const props = {
                name: "Category 1",
                is_active: false,
            }

            const category = new Category(props);
            expect(category.name).toBe("Category 1");
            expect(category.description).toBe("");
            expect(category.is_active).toBeFalsy();
            expect(category.createdAt).toBeInstanceOf(Date);
    });

    test("should create category with name, is_active and description", () => {

            const props = {
                name: "Category 1",
                is_active: false,
                description: "Category 1 description",
            }

            const category = new Category(props);
            expect(category.name).toBe("Category 1");
            expect(category.description).toBe("Category 1 description");
            expect(category.is_active).toBeFalsy();
            expect(category.createdAt).toBeInstanceOf(Date);
    });

    test("ID should be generated when it is not passed", () => {

        const props = {
            name: "Category 1"
        }

        const category = new Category(props);


        expect(category.id).toBeDefined();
        expect(uuidValidate(category.id.id)).toBeTruthy();

    });

});

