import fs from 'fs'
import { getUsers } from '../src/services/users.js'

let users = []
let nextPage = 1

do {
    const data = await getUsers(nextPage)
    users = users.concat(data.users)
    nextPage = data.nextPage
} while (nextPage)

const header = `id;email;first_name;last_name;avatar`
const csvData = users.map(
    user => `${user.id};${user.email};${user.first_name};${user.last_name};${user.avatar}`
)

fs.writeFileSync('users.csv', `${header}\n${csvData.join('\n')}`, 'utf-8')