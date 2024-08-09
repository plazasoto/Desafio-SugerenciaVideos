/* IIFE controlador del atributo src */
const moduloSrc = (()=>{
    function setSrcPrivate(url, id){
        document.getElementById(id).setAttribute("src",url);
    }
    return {
        setSrc: (url, id)=>{
            setSrcPrivate(url, id);
        }
    }
})();

/* Clases */
class Multimedia{
    constructor(url){
        this._url = url;
    }

    get url(){
        return this._url;
    }

    setInicio(){
        return `Este método es para realizar un cambio en la URL del video.`;
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        this._id = id;
    }

    playMultimedia(){
        moduloSrc.setSrc(this._url, this._id);
    }

    setInicio(tiempo){
        this._url = `${this._url}?start=${tiempo}`;
    }
}

/* IDs: musica peliculas series */
/* URLs */
let embedYT = "https://www.youtube.com/embed/";
let urlMusica = [["6BUgYDmlVow", 0]];
let urlPeliculas = [
    ["tw1Mfikk5M8", 20],
    ["cW7KqfSToQU", 0]
];
let urlSeries = [["APWXorE6h8U", 0]];

const random = [
    Math.floor(Math.random() * urlMusica.length),
    Math.floor(Math.random() * urlPeliculas.length),
    Math.floor(Math.random() * urlSeries.length)
];

/* Instancias de clases */
let reproductorMusica = new Reproductor(embedYT + urlMusica[random[0]][0], "musica");
let reproductorPeliculas = new Reproductor(embedYT + urlPeliculas[random[1]][0], "peliculas");
let reproductorSeries = new Reproductor(embedYT + urlSeries[random[2]][0], "series");

/* Mostrar videos */
reproductorMusica.setInicio(urlMusica[random[0]][1]);
reproductorPeliculas.setInicio(urlPeliculas[random[1]][1]);
reproductorSeries.setInicio(urlSeries[random[2]][1]);

reproductorMusica.playMultimedia();
reproductorPeliculas.playMultimedia();
reproductorSeries.playMultimedia();

