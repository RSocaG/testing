import { connection } from "../db/config"
import { house } from "./tables/house.model";

export const createHouse = async (item) => {
    return await connection.getRepository(house).save(item);
}

export const updateHouse = async (item) => {
    return await connection.getRepository(house).save(item);
}

export const deleteHouse = async (id) => {
    return await connection.getRepository(house).delete(id);
}

export const getHouse = async (id) => {
    return await connection.getRepository(house).getId(id);
}

export const getHouses = async () => {
    return await connection.getRepository(house).find();
}