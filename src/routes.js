import { Router } from 'express'

import corsMiddleware from './app/middlewares/cors'

import EventController from './app/controllers/EventController'

const routes = new Router()

routes.use(corsMiddleware)
routes.get('/events', EventController.index)
routes.post('/events', EventController.store)

export default routes
