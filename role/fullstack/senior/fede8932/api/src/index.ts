import express from 'express';
import indexRouter from './routes/indexRouter';
import db from './models';
require('dotenv').config()

const app = express();
app.use(express.json());
const PORT: any = process.env.PORT;

app.get('/api/ping',(_req, res)=>{
    console.log('someone pinged here!!');
    res.send('pong');
})

app.use('/api', indexRouter);
db.sequelize.sync({ force: false }).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server runing in port ${PORT}`);
    })
})

// falla la primera conección (en la instalación) cuando bajar el docker y lo volves a levantar, se conecta
// es posible que pase lo mismo con sequelize cli (probar)