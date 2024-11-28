import express, { json} from 'express';
import router from './routes/routes';
import cors from 'cors'

export default function creatApp(){
    const app = express()
    app.use(json());
    app.use("/api", router)
    app.use(cors())
    return app;
}

