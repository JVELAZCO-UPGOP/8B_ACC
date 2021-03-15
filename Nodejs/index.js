const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

const callBackDelServidor = (req,res) =>{
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual,true);
    const ruta = urlParseada.pathname;
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g,'');
    const metodo = req.method.toLowerCase();
    const { query = {} } = urlParseada;
    const { headers = {} } = req;

    const decoder = new StringDecoder("utf-8");
    let buffer = "";
    req.on('data',(data)=>{
        buffer += decoder.write(data);
    });
    req.on('end', ()=>{
        buffer += decoder.end();
        
        const data = {
            ruta: rutaLimpia,
            query,
            metodo,
            headers,
            payload: buffer
        };

        let handler;
        if(rutaLimpia && enrutador[rutaLimpia]){
            handler.enrutador[rutaLimpia];
        }
        else{
            handler = enrutador.noEncontrado;
        }
        
        if(typeof handler === "function"){
            handler(data, (statusCode = 200, mensaje)=>{
                const respuesta = JSON.stringify(mensaje);
                res.setHeader("Content-Type", "application/json");
                res.writeHead(statusCode);
                res.end(respuesta);
            })
        }
    });
};

const enrutador = {
    ruta: (data, callback) =>{
        callback(200,{ mensaje: "Esta es ruta"});
    },
    noEncontrado: (data, callback) =>{
        callback(404,{ mensaje: "No encontrado"});
    }
}

const server = http.createServer(callBackDelServidor);
server.listen(5000, ()=>{
    console.log("El servidor esta escuchando peticiones!")
});