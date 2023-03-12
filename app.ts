import express, { Request, Response } from 'express'

import bodyParser from 'body-parser'
import { createConnection } from 'typeorm'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

import { router } from './routes/web'

createConnection({
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    port: 3306,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    entities: ['./entity/*.ts'],
    logging: true,

})
    .then(() => {
        console.log("DB connenct ")
    }).catch((e) => {
        console.log("Error:" + e)
    })
const publicPathDirectory = path.join(__dirname, "/public")

app.use("/public", express.static(publicPathDirectory))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)
app.listen(process.env.PORT, (): void => {
    console.log(`Server is runnig on ${process.env.PORT}`)

})