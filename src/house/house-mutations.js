import { House } from "../house.graphql";
import { HouseInput } from "../house-input.graphql";
import graphql from "graphql";
import { createHouse } from "./house.service";

export const mutations = {
    createHouse: {
        type: House,
        args: {
            item: {
                type: new graphql.GraphQLNonNull(HouseInput),
                description: 'The input data of the house to be created'
            }
        }
        resolve: async (_, item) => {
            return await createHouse(item);
        }
    }
}