import { getUsers } from '../services/users.js'


function startHandlingRequests(app) {
    app.get('/', async (request, response) => {
        const page = request.query.page || 1
        const data = await getUsers(page)
        response.render('index', data)
    })
}


export { startHandlingRequests }