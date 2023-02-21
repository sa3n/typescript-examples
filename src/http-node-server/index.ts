import { IncomingMessage, OutgoingMessage, createServer } from 'node:http'

type HandlerFn = {
    (req: IncomingMessage, res: OutgoingMessage): OutgoingMessage
}

const reqHandler: HandlerFn = (req, res) => {
    return res.end('Hello')
}

const server = createServer(reqHandler)

server.listen(3000, () => {
    console.log('Server is running')
})