import { v4 as uuidv4 } from 'uuid';
import UniqueEntityId from "../../../@seedwork/domain/unique-entity-id.vo";

export type CategoryProps = {
    name: string;
    description?: string;
    is_active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Category {
    public readonly id: UniqueEntityId;
    public readonly name: string;
    public readonly description: string;
    public readonly is_active: boolean;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    constructor(props: CategoryProps, id?: UniqueEntityId) {
        this.id = id || new UniqueEntityId();
        this.name = props.name;
        this.is_active = props.is_active ?? true;
        this.description = props.description || '';
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = props.updatedAt || new Date();
    }

    get name(): string {
        return this.name;
    }
    get description(): string {
        return this.description;
    }

    get is_active(): boolean {
        return this.is_active;
    }

    get createdAt(): Date {
        return this.createdAt;
    }

    get updatedAt(): Date {
        return this.updatedAt;
    }

}
