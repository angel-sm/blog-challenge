/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Router, type Request, type Response } from 'express'
import container from '../dependency-injection'

export const register = (router: Router) => {
  const getEntranceController = container.get('controllers.getEntranceController')
  const getEntrancesController = container.get('controllers.getEntrancesController')
  const postEntranceController = container.get('controllers.postEntranceController')

  router.get('/entrances', (req: Request, res: Response) => getEntrancesController.run(req, res))
  router.get('/entrances/:id', (req: Request, res: Response) => getEntranceController.run(req, res))
  router.post('/entrances', (req: Request, res: Response) => postEntranceController.run(req, res))
}
