import axios from 'axios'
import {
    clientId,
    apiEndpoint
} from '../config/manifest.js'


async function authorizeUser(credentials) {
    const method = 'auth'
    const headers = {
        'x-dw-http-method': 'POST',
        'x-dw-content-id': 'req3',
        'x-dw-resource-path': 'true',
        'x-dw-resource-path-extension': 'customers/auth',
        'x-dw-client-id': clientId,
        'Authorization': `Basic ${credentials}`,
    }
    const body = {
        'type': 'credentials'
    }
    const requestUri = `${apiEndpoint}/${method}`

    try {
        const response = await axios.post(requestUri, body, { headers })
        return {
            clientId: response.data.customer_id,
            accessToken: response.headers.authorization
        }
    } catch (error) {
        console.error(error.response)
        throw error.response.data.fault.message
    }
}


export { authorizeUser }