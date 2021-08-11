import graphql from "graphql";

export const HouseInput = new graphql.GraphQLInputObjectType({
    name: 'HouseInput',
    fields: {
        id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLID),
            description: 'The identicator of the house',
        },
        description: {
            type: graphql.GraphQLString,
            description: 'The description of the house, which could contain count of rooms and things like that',
        },
        color:{
            type: graphql.GraphQLString,
            description: 'The color of the house',
        },
        houseNumber: {
            type: graphql.GraphQLInt,
            description: 'The house number. Examples: 5A and 59986'
        }
    }
});