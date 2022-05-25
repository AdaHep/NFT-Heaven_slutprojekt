import express from 'express'

import { getAllDeliveryOptions, getDeliveryOption, addDeliveryOption } from './delivery.controller'

export const deliveryOptionsRouter = express
    .Router()
    .get("/deliveryOptions", getAllDeliveryOptions)
    .get("/deliveryOptions/:id", getDeliveryOption)
    .post("/deliveryOptions", addDeliveryOption)

export default deliveryOptionsRouter;