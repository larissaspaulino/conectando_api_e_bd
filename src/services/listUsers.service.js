import database from "../database"

export const listUsersService = async () => {
    try {
        const res = await database.query("SELECT * FROM users")
        return res.rows
    } catch (err) {
        throw new Error
    }
}