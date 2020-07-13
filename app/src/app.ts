import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application  = express()


app.get('/',(request: Request, response: Response, next:NextFunction) => {
response.send('Hello World');

})

app.listen(5000, () => console.log('Server running')); 