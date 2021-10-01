import express from 'express'
import { resolvePath as path } from '../utilites/path-resolver.js'


function setupServer() {
    const app = express()

    app.use(express.static(path('./src/public')))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));

    return {
        app,
        launch: port => app
            .listen(port, () => {
                console.info(`Server is running on ${port}`)
            })
            .on('error', error => {
                console.error(`Can't start server:`)
                console.error(error)
            })
    }
}


export { setupServer }