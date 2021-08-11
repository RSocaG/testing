import { House } from "../house.graphql";
import { HouseInput } from "../house-input.graphql";
import graphql from "graphql";

export const createHouse = {
    createHouse: {
        type: House,
        args: {
            item: {
                type: new graphql.GraphQLNonNull(HouseInput),
                description: 'The input data of the house to be created'
            }
        }
        resolve: async (_, item) => {
            return 
        }
    }
}