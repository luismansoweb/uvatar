var app = new Vue({
    el:"#app",
    data:{
        cabezas: JSON.parse('[{"caraVacia": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_caraVacia.png", "size": {"x": 564, "y": 1002}, "boca": {"size": {"x": 242, "y": 93}, "pos": {"x": 145, "y": 620}}, "nariz": {"size": {"x": 161, "y": 183}, "pos": {"x": 183, "y": 422}}, "ojoD": {"size": {"x": 138, "y": 70}, "pos": {"x": 87, "y": 396}}, "ojoI": {"size": {"x": 141, "y": 63}, "pos": {"x": 310, "y": 401}}, "cejaD": {"size": {"x": 173, "y": 66}, "pos": {"x": 61, "y": 335}}, "cejaI": {"size": {"x": 183, "y": 85}, "pos": {"x": 298, "y": 340}}}, "boca": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_boca.png", "size": {"x": 242, "y": 93}}, "nariz": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_nariz.png", "size": {"x": 161, "y": 183}}, "ojoD": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_ojoD.png", "size": {"x": 138, "y": 70}}, "ojoI": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_ojoI.png", "size": {"x": 141, "y": 63}}, "cejaD": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_cejaD.png", "size": {"x": 173, "y": 66}}, "cejaI": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_cejaI.png", "size": {"x": 183, "y": 85}}}, {"caraVacia": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_caraVacia.png", "size": {"x": 616, "y": 1095}, "boca": {"size": {"x": 279, "y": 113}, "pos": {"x": 180, "y": 612}}, "nariz": {"size": {"x": 187, "y": 190}, "pos": {"x": 229, "y": 408}}, "ojoD": {"size": {"x": 150, "y": 73}, "pos": {"x": 127, "y": 385}}, "ojoI": {"size": {"x": 148, "y": 83}, "pos": {"x": 360, "y": 382}}, "cejaD": {"size": {"x": 188, "y": 96}, "pos": {"x": 91, "y": 313}}, "cejaI": {"size": {"x": 187, "y": 101}, "pos": {"x": 364, "y": 307}}}, "boca": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_boca.png", "size": {"x": 279, "y": 113}}, "nariz": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_nariz.png", "size": {"x": 187, "y": 190}}, "ojoD": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_ojoD.png", "size": {"x": 150, "y": 73}}, "ojoI": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_ojoI.png", "size": {"x": 148, "y": 83}}, "cejaD": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_cejaD.png", "size": {"x": 188, "y": 96}}, "cejaI": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_cejaI.png", "size": {"x": 187, "y": 101}}}, {"caraVacia": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_caraVacia.png", "size": {"x": 847, "y": 1505}, "boca": {"size": {"x": 396, "y": 177}, "pos": {"x": 186, "y": 982}}, "nariz": {"size": {"x": 227, "y": 251}, "pos": {"x": 266, "y": 710}}, "ojoD": {"size": {"x": 195, "y": 93}, "pos": {"x": 125, "y": 670}}, "ojoI": {"size": {"x": 217, "y": 90}, "pos": {"x": 443, "y": 679}}, "cejaD": {"size": {"x": 251, "y": 83}, "pos": {"x": 82, "y": 590}}, "cejaI": {"size": {"x": 274, "y": 104}, "pos": {"x": 413, "y": 574}}}, "boca": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_boca.png", "size": {"x": 396, "y": 177}}, "nariz": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_nariz.png", "size": {"x": 227, "y": 251}}, "ojoD": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_ojoD.png", "size": {"x": 195, "y": 93}}, "ojoI": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_ojoI.png", "size": {"x": 217, "y": 90}}, "cejaD": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_cejaD.png", "size": {"x": 251, "y": 83}}, "cejaI": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_cejaI.png", "size": {"x": 274, "y": 104}}}, {"caraVacia": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_caraVacia.png", "size": {"x": 406, "y": 721}, "boca": {"size": {"x": 166, "y": 87}, "pos": {"x": 100, "y": 421}}, "nariz": {"size": {"x": 106, "y": 133}, "pos": {"x": 127, "y": 283}}, "ojoD": {"size": {"x": 100, "y": 41}, "pos": {"x": 63, "y": 273}}, "ojoI": {"size": {"x": 101, "y": 40}, "pos": {"x": 214, "y": 278}}, "cejaD": {"size": {"x": 102, "y": 40}, "pos": {"x": 57, "y": 230}}, "cejaI": {"size": {"x": 100, "y": 47}, "pos": {"x": 225, "y": 229}}}, "boca": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_boca.png", "size": {"x": 166, "y": 87}}, "nariz": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_nariz.png", "size": {"x": 106, "y": 133}}, "ojoD": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_ojoD.png", "size": {"x": 100, "y": 41}}, "ojoI": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_ojoI.png", "size": {"x": 101, "y": 40}}, "cejaD": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_cejaD.png", "size": {"x": 102, "y": 40}}, "cejaI": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_cejaI.png", "size": {"x": 100, "y": 47}}}]'),
        cabeza,
        partes: ["caraVacia", "cejaD", "cejaI", "ojoD", "ojoI", "boca", "nariz"]
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
        mounted(){
            this.cabezas =  JSON.parse('[{"caraVacia": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_caraVacia.png", "size": {"x": 564, "y": 1002}, "boca": {"size": {"x": 242, "y": 93}, "pos": {"x": 145, "y": 620}}, "nariz": {"size": {"x": 161, "y": 183}, "pos": {"x": 183, "y": 422}}, "ojoD": {"size": {"x": 138, "y": 70}, "pos": {"x": 87, "y": 396}}, "ojoI": {"size": {"x": 141, "y": 63}, "pos": {"x": 310, "y": 401}}, "cejaD": {"size": {"x": 173, "y": 66}, "pos": {"x": 61, "y": 335}}, "cejaI": {"size": {"x": 183, "y": 85}, "pos": {"x": 298, "y": 340}}}, "boca": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_boca.png", "size": {"x": 242, "y": 93}}, "nariz": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_nariz.png", "size": {"x": 161, "y": 183}}, "ojoD": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_ojoD.png", "size": {"x": 138, "y": 70}}, "ojoI": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_ojoI.png", "size": {"x": 141, "y": 63}}, "cejaD": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_cejaD.png", "size": {"x": 173, "y": 66}}, "cejaI": {"persona": {"alias": "MonPar"}, "foto": "Imagenes/Uvatar/MonPar/MonPar_cejaI.png", "size": {"x": 183, "y": 85}}}, {"caraVacia": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_caraVacia.png", "size": {"x": 616, "y": 1095}, "boca": {"size": {"x": 279, "y": 113}, "pos": {"x": 180, "y": 612}}, "nariz": {"size": {"x": 187, "y": 190}, "pos": {"x": 229, "y": 408}}, "ojoD": {"size": {"x": 150, "y": 73}, "pos": {"x": 127, "y": 385}}, "ojoI": {"size": {"x": 148, "y": 83}, "pos": {"x": 360, "y": 382}}, "cejaD": {"size": {"x": 188, "y": 96}, "pos": {"x": 91, "y": 313}}, "cejaI": {"size": {"x": 187, "y": 101}, "pos": {"x": 364, "y": 307}}}, "boca": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_boca.png", "size": {"x": 279, "y": 113}}, "nariz": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_nariz.png", "size": {"x": 187, "y": 190}}, "ojoD": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_ojoD.png", "size": {"x": 150, "y": 73}}, "ojoI": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_ojoI.png", "size": {"x": 148, "y": 83}}, "cejaD": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_cejaD.png", "size": {"x": 188, "y": 96}}, "cejaI": {"persona": {"alias": "LuisManso"}, "foto": "Imagenes/Uvatar/LuisManso/LuisManso_cejaI.png", "size": {"x": 187, "y": 101}}}, {"caraVacia": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_caraVacia.png", "size": {"x": 847, "y": 1505}, "boca": {"size": {"x": 396, "y": 177}, "pos": {"x": 186, "y": 982}}, "nariz": {"size": {"x": 227, "y": 251}, "pos": {"x": 266, "y": 710}}, "ojoD": {"size": {"x": 195, "y": 93}, "pos": {"x": 125, "y": 670}}, "ojoI": {"size": {"x": 217, "y": 90}, "pos": {"x": 443, "y": 679}}, "cejaD": {"size": {"x": 251, "y": 83}, "pos": {"x": 82, "y": 590}}, "cejaI": {"size": {"x": 274, "y": 104}, "pos": {"x": 413, "y": 574}}}, "boca": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_boca.png", "size": {"x": 396, "y": 177}}, "nariz": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_nariz.png", "size": {"x": 227, "y": 251}}, "ojoD": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_ojoD.png", "size": {"x": 195, "y": 93}}, "ojoI": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_ojoI.png", "size": {"x": 217, "y": 90}}, "cejaD": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_cejaD.png", "size": {"x": 251, "y": 83}}, "cejaI": {"persona": {"alias": "CarlosJimenez"}, "foto": "Imagenes/Uvatar/CarlosJimenez/CarlosJimenez_cejaI.png", "size": {"x": 274, "y": 104}}}, {"caraVacia": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_caraVacia.png", "size": {"x": 406, "y": 721}, "boca": {"size": {"x": 166, "y": 87}, "pos": {"x": 100, "y": 421}}, "nariz": {"size": {"x": 106, "y": 133}, "pos": {"x": 127, "y": 283}}, "ojoD": {"size": {"x": 100, "y": 41}, "pos": {"x": 63, "y": 273}}, "ojoI": {"size": {"x": 101, "y": 40}, "pos": {"x": 214, "y": 278}}, "cejaD": {"size": {"x": 102, "y": 40}, "pos": {"x": 57, "y": 230}}, "cejaI": {"size": {"x": 100, "y": 47}, "pos": {"x": 225, "y": 229}}}, "boca": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_boca.png", "size": {"x": 166, "y": 87}}, "nariz": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_nariz.png", "size": {"x": 106, "y": 133}}, "ojoD": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_ojoD.png", "size": {"x": 100, "y": 41}}, "ojoI": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_ojoI.png", "size": {"x": 101, "y": 40}}, "cejaD": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_cejaD.png", "size": {"x": 102, "y": 40}}, "cejaI": {"persona": {"alias": "LuisAMartinez"}, "foto": "Imagenes/Uvatar/LuisAMartinez/LuisAMartinez_cejaI.png", "size": {"x": 100, "y": 47}}}]')
            this.cabeza = this.cabezas[2]
        },
        random(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        },
        mezclar(){
            for (i in partes){
                this.cabeza[i] = this.cabezas[this.random(0,cabezas.lengtn)][i]
            }
        }
    }
})