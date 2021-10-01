import * as path from 'path'

function resolvePath(relativePath) {
    return path.resolve(relativePath)
}

export { resolvePath }