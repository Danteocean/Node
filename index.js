
class carro {
    constructor(Marca, Modelo, Puertas, Precio) {
        this.Marca = Marca;
        this.Modelo=Modelo;
        this.Puertas=Puertas;
        this.Precio=Precio;
    }
    get getMarca() {
       return this.Marca;
    }
    
    get getModelo() {
        return this.Modelo;
     }
    
     get getPuertas() {
        return this.Puertas;
     }
     
     get getPrecio() {
        return this.Precio;
     }
    
    
     mostrarCarro(){
        console.log("Marca: "+this.Marca+" // "+"Modelo: "+this.Modelo+" // "+"Puertas: "+this.Puertas+" // "+" Precio: "+"$"+this.Precio);
     }
}

class moto {
    constructor(Marca, Modelo, Cilindrada, Precio) {
        this.Marca = Marca;
        this.Modelo=Modelo;
        this.Cilindrada=Cilindrada;
        this.Precio=Precio;
    }
  get getMarca() {
       return this.Marca;
    }
   
    get getModelo() {
        return this.Modelo;
     }
    
     get getCilindrada() {
        return this.Cilindrada;
     }
    
    get getPrecio() {
        return this.Precio;
     }
     
     mostrarMoto(){
        console.log("Marca: "+this.Marca+" // "+"Modelo: "+this.Modelo+" // "+"Cilindrada: "+this.Cilindrada+" // "+" Precio: "+"$"+this.Precio);
     }
    
}

function CalcularPrecio(){
    var caro=Math.max(parseFloat(vehP.getPrecio),parseFloat(vehH.getPrecio),parseFloat(vehP2.getPrecio),parseFloat(vehY.getPrecio));
    var barato=Math.min(parseFloat(vehP.getPrecio),parseFloat(vehH.getPrecio),parseFloat(vehP2.getPrecio),parseFloat(vehY.getPrecio));
    if((Object.assign(parseFloat(vehP.getPrecio)==caro))==true){
        console.log("Vehículo más caro:"+vehP.getMarca+" "+vehP.getModelo);
    }else if((Object.assign(parseFloat(vehH.getPrecio)==caro))==true){
        console.log("Vehículo más caro:"+vehH.getMarca+" "+vehH.getModelo);
    }else if((Object.assign(parseFloat(vehP2.getPrecio)==caro))==true){
        console.log("Vehículo más caro:"+vehP2.getMarca+" "+vehP2.getModelo);
    }else if((Object.assign(parseFloat(vehY.getPrecio)==caro))==true){
        console.log("Vehículo más caro:"+vehY.getMarca+" "+vehY.getModelo);
    }else{
        console.log("valor no disponible")
    }

    if((Object.assign(parseFloat(vehP.getPrecio)==barato))==true){
        console.log("Vehículo más barato:"+vehP.getMarca+" "+vehP.getModelo);
    }else if((Object.assign(parseFloat(vehH.getPrecio)==barato))==true){
        console.log("Vehículo más barato:"+vehH.getMarca+" "+vehH.getModelo);
    }else if((Object.assign(parseFloat(vehP2.getPrecio)==barato))==true){
        console.log("Vehículo más barato:"+vehP2.getMarca+" "+vehP2.getModelo);
    }else if((Object.assign(parseFloat(vehY.getPrecio)==barato))==true){
        console.log("Vehículo más barato:"+vehY.getMarca+" "+vehY.getModelo);
    }else{
        console.log("valor no disponible")
    }



 }

  function buscarLetra() {
      var y="Y";
      var a =vehP.getModelo;
      var b=vehH.getModelo;
      var c=vehP2.getModelo;
      var d=vehY.getModelo;

      var pala1=a.indexOf(y);
      var pala2=b.indexOf(y);
      var pala3=c.indexOf(y);
      var pala4=d.indexOf(y);

      if((pala1==-1)==false){
        console.log("Vehículo que contiene en el modelo la letra ‘Y’:"+vehP.getMarca+" "+vehP.getModelo+" "+"$"+vehP.getPrecio); 
      }
      else if((pala2==-1)==false){
        console.log("Vehículo que contiene en el modelo la letra ‘Y’:"+vehH.getMarca+" "+vehH.getModelo+" "+"$"+vehH.getPrecio); 
      }
      else if((pala3==-1)==false){
        console.log("Vehículo que contiene en el modelo la letra ‘Y’:"+vehP2.getMarca+" "+vehP2.getModelo+" "+"$"+vehP2.getPrecio); 
      }else if((pala4==-1)==false){
        console.log("Vehículo que contiene en el modelo la letra ‘Y’:"+vehY.getMarca+" "+vehY.getModelo+" "+"$"+vehY.getPrecio); 
      }else{
        console.log("Ningun vehículo contenga en el modelo la letra ‘Y’:");   
      }
  } 
    
  function ordenarMayotMenor(){
    var listaPrecios=[vehH,vehP,vehP2,vehY];
      listaPrecios.sort(function (a,b){
        return (parseFloat(b.Precio) -parseFloat(a.Precio))
      })
      for(var i=0;i<listaPrecios.length;i++){
        var Mar=Object.assign(listaPrecios[i].getMarca);
        var Mor=Object.assign(listaPrecios[i].getModelo);
        console.log(Mar+" "+Mor);
      }
      /*var Mar=Object.assign(vehH.getMarca);*/
      /*console.log(Mar);*/
     
    }

    
  

var vehP= new carro("Peugeot","206","4","200.000,00");
var vehH= new moto("Honda","Titan","125c","60.000,00");
var vehP2= new carro("Peugeot","208","5","250.000,00");
var vehY= new moto("Yamaha","YBR","160c","80.500,50"); 
vehP.mostrarCarro();
vehH.mostrarMoto();
vehP2.mostrarCarro();
vehY.mostrarMoto();
console.log("========================================================================================================================");
CalcularPrecio();
buscarLetra();
console.log("=======================================================================================================================");
console.log("Vehículos ordenados por precio de mayor a menor:");
ordenarMayotMenor();
