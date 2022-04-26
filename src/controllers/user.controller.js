import { createUserService } from "../services/createUser.service"
import { listUsersService } from "../services/listUsers.service"

export default class UserController {   

    async store(request, response) {

        const { email, name, password } = request.body
        
        try {
            const user = await createUserService({ email, name, password })
            return response.status(201).json(user)
        } catch (err) {
            return response.status(400).json('Não foi possível finalizar o cadastro')
        }
    }

    async index(request, response) {
        try {
            const users = await listUsersService()
            return response.status(200).json(users)
        } catch (err) {
            return response.status(400).json(err)
        }
    }
}