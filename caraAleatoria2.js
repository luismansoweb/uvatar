var app = new Vue({
    el:"#app",
    data:{
        cabeza: JSON.parse('{"caraVacia": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_caraVacia.png", "size": {"x": 406, "y": 721}, "boca": {"size": {"x": 166, "y": 87}, "pos": {"x": 100, "y": 421}}, "nariz": {"size": {"x": 106, "y": 133}, "pos": {"x": 127, "y": 283}}, "ojoD": {"size": {"x": 100, "y": 41}, "pos": {"x": 63, "y": 273}}, "ojoI": {"size": {"x": 101, "y": 40}, "pos": {"x": 214, "y": 278}}, "cejaD": {"size": {"x": 102, "y": 40}, "pos": {"x": 57, "y": 230}}, "cejaI": {"size": {"x": 100, "y": 47}, "pos": {"x": 225, "y": 229}}}, "boca": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_boca.png", "size": {"x": 396, "y": 177}}, "nariz": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_nariz.png", "size": {"x": 106, "y": 133}}, "ojoD": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_ojoD.png", "size": {"x": 195, "y": 93}}, "ojoI": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_ojoI.png", "size": {"x": 101, "y": 40}}, "cejaD": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_cejaD.png", "size": {"x": 102, "y": 40}}, "cejaI": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_cejaI.png", "size": {"x": 100, "y": 47}}}'),
    },
    computed:{
        computedLeftBoca: function () {
            return `${this.cabeza.caraVacia.boca.pos.x.toString()}px`;
        },
        computedTopBoca: function(){
            return `${this.cabeza.caraVacia.boca.pos.y.toString()}px`;
        },
        computedWidthBoca(){
            return `${this.cabeza.caraVacia.boca.size.x.toString()}px`;
        },
        computedHeightBoca(){
            return `${this.cabeza.caraVacia.boca.size.y.toString()}px`;
        },
        computedImgBoca(){
            return this.cabeza.boca.foto;
        },
        computedLeftNariz: function () {
            return `${this.cabeza.caraVacia.nariz.pos.x.toString()}px`;
        },
        computedTopNariz: function(){
            return `${this.cabeza.caraVacia.nariz.pos.y.toString()}px`;
        },
        computedWidthNariz(){
            return `${this.cabeza.caraVacia.nariz.size.x.toString()}px`;
        },
        computedHeightNariz(){
            return `${this.cabeza.caraVacia.nariz.size.y.toString()}px`;
        },
        computedImgNariz(){
            return this.cabeza.nariz.foto;
        },
        computedLeftCejaI: function () {
            return `${this.cabeza.caraVacia.cejaI.pos.x.toString()}px`;
        },
        computedTopCejaI: function(){
            return `${this.cabeza.caraVacia.cejaI.pos.y.toString()}px`;
        },
        computedWidthCejaI(){
            return `${this.cabeza.caraVacia.cejaI.size.x.toString()}px`;
        },
        computedHeightCejaI(){
            return `${this.cabeza.caraVacia.cejaI.size.y.toString()}px`;
        },
        computedImgCejaI(){
            return this.cabeza.cejaI.foto;
        },
        computedLeftCejaD: function () {
            return `${this.cabeza.caraVacia.cejaD.pos.x.toString()}px`;
        },
        computedTopCejaD: function(){
            return `${this.cabeza.caraVacia.cejaD.pos.y.toString()}px`;
        },
        computedWidthCejaD(){
            return `${this.cabeza.caraVacia.cejaD.size.x.toString()}px`;
        },
        computedHeightCejaD(){
            return `${this.cabeza.caraVacia.cejaD.size.y.toString()}px`;
        },
        computedImgCejaD(){
            return this.cabeza.cejaD.foto;
        },
        computedLeftOjoI: function () {
            return `${this.cabeza.caraVacia.ojoI.pos.x.toString()}px`;
        },
        computedTopOjoI: function(){
            return `${this.cabeza.caraVacia.ojoI.pos.y.toString()}px`;
        },
        computedWidthOjoI(){
            return `${this.cabeza.caraVacia.ojoI.size.x.toString()}px`;
        },
        computedHeightOjoI(){
            return `${this.cabeza.caraVacia.ojoI.size.y.toString()}px`;
        },
        computedImgOjoI(){
            return this.cabeza.ojoI.foto;
        },
        computedLeftOjoD: function () {
            return `${this.cabeza.caraVacia.ojoD.pos.x.toString()}px`;
        },
        computedTopOjoD: function(){
            return `${this.cabeza.caraVacia.ojoD.pos.y.toString()}px`;
        },
        computedWidthOjoD(){
            return `${this.cabeza.caraVacia.ojoD.size.x.toString()}px`;
        },
        computedHeightOjoD(){
            return `${this.cabeza.caraVacia.ojoD.size.y.toString()}px`;
        },
        computedImgOjoD(){
            return this.cabeza.ojoD.foto;
        },
        computedWidthCaraVacia(){
            return `${this.cabeza.caraVacia.size.x.toString()}px`;
        },
        computedHeightCaraVacia(){
            return `${this.cabeza.caraVacia.size.y.toString()}px`;
        },
        computedImgCaraVacia(){
            return this.cabeza.caraVacia.foto;
        },
        computedBackgroundColor(){
            return "yellow";
        },
        computedAliasOjoD(){
            return this.cabeza.ojoD.persona.alias;
        },
        computedAliasOjoI(){
            return this.cabeza.ojoI.persona.alias;
        },
        computedCejaI(){
            return this.cabeza.cejaI.persona.alias;
        },
        computedBoca(){
            return this.cabeza.boca.persona.alias;
        },
        computedNariz(){
            return this.cabeza.nariz.persona.alias;
        },
        computedCejaD(){
            return this.cabeza.cejaD.persona.alias;
        },
        computedAliasCaraVacia(){
            return this.cabeza.caraVacia.persona.alias;
        },
        computedJSON(){
            return JSON.stringify(this.cabeza, null, '');
        }
    },
    methods:{
        getJSON(){
            return JSON.stringify(this.cabeza, " ");
        },
    }
})