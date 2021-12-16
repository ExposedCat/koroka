import { getUsers } from '../services/users.js'


function startHandlingRequests(app) {
    app.get('/', async (request, response) => {
        const { customerId } = request.query
        let data = {
            error: true,
            customerData: null,
            errorDescription: null
        }
        if (!customerId) {
            data.errorDescription = 'Customer ID is not specified'
        }
        try {
            const customerData = await getUsers(customerId)
            data.error = false
            data.customerData = customerData
        } catch (error) {
            data.errorDescription = error
        }
        response.render('index', data)
    })
}


export { startHandlingRequests }