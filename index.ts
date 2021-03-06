import Server from './classes/server';
import bodyParser from 'body-parser';
import cors from 'cors';
import {router} from './routes/router';
//Instanciando el servidor
const server = new Server();
//configurando bodyParser para que los argumentos que lleguen por urlencoded
//lleguen en el arreglo 'body' el request
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//CORS
server.app.use(cors({origin:true,credentials:true}));
//configurando las rutas
server.app.use('/',router);
//iniciando el servidor
server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
