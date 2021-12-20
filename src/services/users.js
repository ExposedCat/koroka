import axios from 'axios'
import { authorizeUser } from './auth.js'
import { apiEndpoint } from '../config/manifest.js'


async function getUserData(credentials) {
    if (!credentials) {
        throw 'Credentials are not specified'
    }
    const { clientId, accessToken } = await authorizeUser(credentials)

    const method = clientId
    const headers = {
        'Authorization': accessToken,
    }
    const requestUri = `${apiEndpoint}/${method}`

    try {
        const response = await axios.get(requestUri, { headers })
        const {
            email,
            first_name: firstName,
            last_name: secondName
        } = response.data

        return { email, firstName, secondName }
    } catch (error) {
        throw error.response.data.fault.message
    }
}


export { getUserData }
