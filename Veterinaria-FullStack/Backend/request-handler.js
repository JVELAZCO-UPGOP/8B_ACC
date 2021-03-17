const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const enrutador = require("./enrutador");

module.exports = (req, res) => {
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);
    const ruta = urlParseada.pathname;
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');
    const metodo = req.method.toLowerCase();
    const { query = {} } = urlParseada;
    const { headers = {} } = req;

    const decoder = new StringDecoder("utf-8");
    let buffer = "";
    req.on("data", (data) => {
        buffer += decoder.write(data);
    });
    req.on('end', () => {
        buffer += decoder.end();

        if (headers["content-type"] === "application/json") {
            buffer = JSON.parse(buffer);
        }

        if (rutaLimpia.indexOf("/") > -1) {
            var [rutaPrincipal, indice] = rutaLimpia.split("/");
        }

        const data = {
            indice,
            ruta: rutaPrincipal || rutaLimpia,
            query,
            metodo,
            headers,
            payload: buffer
        };

        let handler;
        if (data.ruta && enrutador[data.ruta] && enrutador[data.ruta][metodo]) {
            handler = enrutador[data.ruta][metodo];
        } else {
            handler = enrutador.noEncontrado;
        }

        if (typeof handler === "function") {
            handler(data, (statusCode = 200, mensaje) => {
                const respuesta = JSON.stringify(mensaje);
                res.setHeader("Content-Type", "application/json");
                res.writeHead(statusCode);
                res.end(respuesta);
            });
        }
    });
};