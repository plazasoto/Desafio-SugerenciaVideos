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
        this._url = `${this._url}?start=${tiempo}`;//&t=20
    }
}

/* IDs: musica peliculas series */
/* URLs */
let urlMusica = "https://www.youtube.com/embed/6BUgYDmlVow";
let urlPeliculas = "https://www.youtube.com/embed/tw1Mfikk5M8";
let urlSeries = "https://www.youtube.com/embed/APWXorE6h8U";

/* Instancias de clases */
let reproductorMusica = new Reproductor(urlMusica, "musica");
let reproductorPeliculas = new Reproductor(urlPeliculas, "peliculas");
let reproductorSeries = new Reproductor(urlSeries, "series");

/* Mostrar videos */
reproductorPeliculas.setInicio(20);
reproductorMusica.playMultimedia();
reproductorPeliculas.playMultimedia();
reproductorSeries.playMultimedia();
