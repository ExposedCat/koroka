import { getUserData } from '../services/users.js'


function startHandlingRequests(app) {
    app.get('/', async (request, response) => {
        const { credentials } = request.query
        let data = {
            error: true,
            customerData: null,
            errorDescription: null
        }
        if (!credentials) {
            data.errorDescription = 'Customer credentials (base64 encoded) is not specified'
        }
        try {
            data.customerData = await getUserData(credentials)
            data.error = false
        } catch (error) {
            data.errorDescription = error
        }
        response.render('index', data)
    })
}


export { startHandlingRequests }