import { v4 as uuidv4 } from 'uuid';
import {validate as uuidValidate} from "uuid";
import InvalidUuidError from "../../errors/invalid-uuid.error";
import ValueObject from "./value-objects";

export default class UniqueEntityId extends ValueObject<string | Uint8Array<ArrayBufferLike>>{

    constructor(public readonly id?: string | Uint8Array<ArrayBufferLike>) {
        super(id || uuidv4());
        this.validate()
    }

    private validate(){

        const isValid = uuidValidate(this.value);
        if(!isValid){
            throw new InvalidUuidError();
        }
    }
}
