import { EntitySchema } from 'typeorm';

export const house = new EntitySchema({
    name: 'House',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        description: {
            type: String,
            nullable: false,
        },
        color: {
            type: String,
            nullable: true,
        },
        houseNumber: {
            type: String,
            nullable: false,
            unique: true,
        }
    }
});