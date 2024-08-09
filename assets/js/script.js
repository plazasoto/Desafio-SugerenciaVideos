/*
https://www.youtube.com/embed/6BUgYDmlVow
*/

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