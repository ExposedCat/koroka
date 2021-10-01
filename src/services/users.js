import axios from 'axios'
import { apiEndpoint } from '../config/manifest.js'


async function getUsers(page = 1) {
    let response
    try {
        response = await axios.get(`${apiEndpoint}?page=${page}`)
    } catch (error) {
        console.error(error)
        return {
            users: [],
            nextPage: nulltotalPages > currentPage ? currentPage + 1 : null
        }
    }
    if (response.status === 200) {
        const { total_pages: totalPages, page: currentPage, data } = response.data
        return {
            users: data,
            nextPage: totalPages > currentPage ? currentPage + 1 : null
        }
    } else {
        console.error(response)
        return {
            users: [],
            nextPage: nulltotalPages > currentPage ? currentPage + 1 : null
        }
    }
}


export { getUsers }