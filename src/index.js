import { port } from './config/manifest.js'
import { setupServer } from './config/server.js'
import { startHandlingRequests } from './controllers/users.js'


const { app, launchServer } = setupServer()
startHandlingRequests(app)
launchServer(port)