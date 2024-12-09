import * as THREE from "./three.module.js";
export default function cabañaCOMPLETA({x,y,z}){

    //PAREDES
    var cilindro = new THREE.CylinderGeometry(1,1,20,20);
    var madera = new THREE.MeshLambertMaterial({color:0xe39632});
    var tronco = new THREE.Mesh(cilindro,madera);
    var cilindro1 = new THREE.CylinderGeometry(1,1,20,20);
    var madera1 = new THREE.MeshLambertMaterial({color:0x975908});
    var tronco1 = new THREE.Mesh(cilindro1,madera1);
    tronco1.position.set(2,0,0);
    var troncos = new THREE.Group();
    troncos.add(tronco,tronco1);
    var troncoClon = troncos.clone();
    troncoClon.position.set(4,0,0);
    var troncoClon1 = troncoClon.clone();
    troncoClon1.position.set(8,0,0)
    var troncoClon2 = troncoClon1.clone();
    troncoClon2.position.set(12,0,0);
    var pared = new THREE.Group();
    pared.add(troncos,troncoClon,troncoClon1,troncoClon2);
    var pared2 = pared.clone();
    pared2.position.set(28,0,0);
    var pared3 = pared2.clone();
    pared3.position.set(0,0,40);
    var pared4 = pared3.clone();
    pared4.position.set(12,0,40);
    var pared5 = pared4.clone();
    pared5.position.set(28,0,40);
    var paredBack = new THREE.Group();
    paredBack.add(pared3,pared4,pared5);
    paredBack.position.set(0,0,6);
    var paredLeft = paredBack.clone();
    paredLeft.rotation.set(0,1.5708,0);
    paredLeft.position.set(2,0,44);
    var paredRight = paredLeft.clone();
    paredRight.position.set(-40,0,44);

//PISO
    var plano = new THREE.BoxGeometry(47,1,48);
    var colorPiso = new THREE.MeshLambertMaterial({color:0xfbd39d});
    var piso = new THREE.Mesh(plano,colorPiso);
    piso.position.set(21,-10,22);
//TECHO 
    var cono = new THREE.ConeGeometry(32,20,32);
    var techo = new THREE.Mesh(cono,madera1);
    techo.position.set(21,20,22.9);
//CABAÑA
    var cabana = new THREE.Group();
    cabana.add(pared,pared2,paredBack,paredLeft,paredRight,piso,techo);
    cabana.position.set(-20,0,-20);
//ARBOL
    var circulo = new THREE.CircleGeometry(5,25);
    var azul = new THREE.MeshLambertMaterial({color:0x56d6ff});
    var alfombra = new THREE.Mesh(circulo,azul);
    alfombra.rotation.set(-1.5708,0,0);
    alfombra.position.set(10,-9.3,15);
    var circulo1 = new THREE.CircleGeometry(8,25);
    var rojo = new THREE.MeshLambertMaterial({color:0xd33907});
    var alfombra1 = new THREE.Mesh(circulo1,rojo);
    alfombra1.rotation.set(-1.5708,0,0);
    alfombra1.position.set(10,-9.4,15);
    var pino = new THREE.ConeGeometry(3,5,15);
    var verde = new THREE.MeshLambertMaterial({color:0x32e81a});
    var pinopintado = new THREE.Mesh(pino,verde);
    var pino1 = new THREE.ConeGeometry(4,5,15);
    var pinopintado1 = new THREE.Mesh(pino1,verde);
    pinopintado1.position.set(0,-3,0);
    var pino2 = new THREE.ConeGeometry(5,5,15);
    var pinopintado2 = new THREE.Mesh(pino2,verde);
    pinopintado2.position.set(0,-5,0);
    var palo = new THREE.CylinderGeometry(1,1,8,10,15);
    var cafe = new THREE.MeshLambertMaterial({color:0x853f01});
    var palopintado = new THREE.Mesh(palo,cafe);
    palopintado.position.set(0,-5,0);
    var arbol = new THREE.Group();
    arbol.add(pinopintado,pinopintado1,pinopintado2,palopintado)
    arbol.position.set(0,9,0);
    arbol.scale.set(0.5,0.5,0.5);
    var esfera = new THREE.SphereGeometry(0.5,16,16);
    var rojo = new THREE.MeshLambertMaterial({color:0xc91f19});
    var esferaRoja = new THREE.Mesh(esfera,rojo);
    esferaRoja.position.set(0,5,3.2);
    var esferaRoja1 = new THREE.Mesh(esfera,rojo);
    esferaRoja1.position.set(-1.8,1,1);
    esferaRoja1.scale.set(0.5,0.5,0.5);
    var esferaRoja2 = new THREE.Mesh(esfera,rojo);
    esferaRoja2.position.set(1.8,1,1);
    esferaRoja2.scale.set(0.5,0.5,0.5);
    var esferaRoja3 = new THREE.Mesh(esfera,rojo);
    esferaRoja3.position.set(-0.3,1.7,-2);
    esferaRoja3.scale.set(0.5,0.5,0.5);
    var esfera1 = new THREE.SphereGeometry(0.5,16,16);
    var negro = new THREE.MeshLambertMaterial({color:0x353ec7});
    var esferaNegra = new THREE.Mesh(esfera1,negro);
    esferaNegra.position.set(1,7,2.8);
    var esferaNegra1 = new THREE.Mesh(esfera1,negro);
    esferaNegra1.position.set(-2,8,1.5);
    var esferaNegra2 = new THREE.Mesh(esfera1,negro);
    esferaNegra2.position.set(-1,2,1.5);
    esferaNegra2.scale.set(0.5,0.5,0.5);
    var esferaNegra3 = new THREE.Mesh(esfera1,negro);
    esferaNegra3.position.set(-1,3,-1);
    esferaNegra3.scale.set(0.5,0.5,0.5);
    var gorro = new THREE.CylinderGeometry(0.5,5,5,10,5);
    var gorroPintado = new THREE.Mesh(gorro,rojo);
    gorroPintado.scale.set(0.5,0.5,0.5);
    gorroPintado.position.set(0,11,0);
    var blanco = new THREE.MeshLambertMaterial({color:0xf8e5e5});
    var esferaBlanca = new THREE.Mesh(esfera,blanco);
    esferaBlanca.position.set(0,12.7,0);
    var adornos = new THREE.Group();
    adornos.add(esferaRoja1,esferaRoja2,esferaRoja3,esferaRoja,esferaNegra,esferaNegra1,gorroPintado,esferaBlanca)
    adornos.scale.set(0.5,0.5,0.5);
    adornos.position.set(0,4.5,0);
    var decoracion = new THREE.Group();
    decoracion.add(adornos,arbol);
    decoracion.position.set(10,-18,15);
    decoracion.scale.set(2,2,2);
    var verde = new THREE.MeshLambertMaterial({color:0x9358d1});
    var naranja = new THREE.MeshLambertMaterial({color:0xdfcf10});
    var blanco = new THREE.MeshLambertMaterial({color:0xd4cbde});
    var esferaNegra4 = new THREE.Mesh(esfera1,negro);
    esferaNegra4.position.set(6,-5,15);
    var esferaNegra5 = new THREE.Mesh(esfera1,verde);
    esferaNegra5.position.set(14,-5,15);
    var esferaNegra6 = new THREE.Mesh(esfera1,naranja);
    esferaNegra6.position.set(10,-4,11.5);
    var esferaNegra7 = new THREE.Mesh(esfera1,blanco);
    esferaNegra7.position.set(10,0,13);

//MUEBLE
    var cubo = new THREE.BoxGeometry(10,5,3);
    var gris = new THREE.MeshLambertMaterial({color:0xc4c1c0});
    var chimenea = new THREE.Mesh(cubo,gris);
    var cubo2 = new THREE.BoxGeometry(9,5,2);
    var negro1 = new THREE.MeshLambertMaterial({color:0x0a0501});
    var chimenea1 = new THREE.Mesh(cubo2,negro1);
    chimenea1.position.set(0,0.1,0);
    var cubo1 = new THREE.BoxGeometry(0.5,5,0.5);
    var fuego = new THREE.MeshLambertMaterial({color:0xf07311});
    var llamas = new THREE.Mesh(cubo1,fuego);
    llamas.position.set(0,1,0);
    var llamas2 = llamas.clone();
    llamas2.position.set(2,1,0);
    var llamas3 = llamas2.clone();
    llamas3.position.set(4,1,0);
    var llamas4 = llamas3.clone();
    llamas4.position.set(-2,1,0);
    var llamas5 = llamas4.clone();
    llamas5.position.set(-4,1,0);
    var chimeneaCOMPLETA = new THREE.Group();
    chimeneaCOMPLETA.add( chimenea, llamas, llamas2,llamas3, llamas4,llamas5, chimenea1);
    chimeneaCOMPLETA.rotation.set(1.5708,0,1.5708);
    (chimeneaCOMPLETA).scale.set(2,1,1);
    chimeneaCOMPLETA.position.set(18,-8,-5);
//PERCHERO
    var p= new THREE.CylinderGeometry(2,2,0.5);
    var mp= new THREE.MeshLambertMaterial({color:0xb86b04,wireframe:false});
    var meshp= new THREE.Mesh(p,mp);
 
    meshp.position.set(0,0.5,0); 
    var p2= new THREE.CylinderGeometry(0.3,0.3,13);
    var meshp2= new THREE.Mesh(p2,mp);
    
    meshp2.position.set(0,7,0);
    var p3= new THREE.SphereGeometry(0.6,16,16);
    var meshp3= new THREE.Mesh(p3,mp);
     
    meshp3.position.set(0,14,0);
    var p4= new THREE.BoxGeometry(3,0.3,0.3,16,16,16);
    var meshp4= new THREE.Mesh(p4,mp);
    
    meshp4.position.set(0,13,0);
    var p5= new THREE.SphereGeometry(0.3,16,16);
    var meshp5= new THREE.Mesh(p5,mp);
   
    meshp5.position.set(1.5,13,0);
    var p6= new THREE.SphereGeometry(0.3,16,16);
    var meshp6= new THREE.Mesh(p6,mp);
    
    meshp6.position.set(-1.5,13,0);
    var p7= new THREE.BoxGeometry(0.3,0.3,3,16,16,16);
    var meshp7= new THREE.Mesh(p7,mp);
    
    meshp7.position.set(0,13,0);
    var p8= new THREE.SphereGeometry(0.3,16,16);
    var meshp8= new THREE.Mesh(p8,mp);
     
    meshp8.position.set(0,13,1.5);
    var p9= new THREE.SphereGeometry(0.3,16,16);
    var meshp9= new THREE.Mesh(p9,mp);
    
    meshp9.position.set(0,13,-1.5);
    var perchero = new THREE.Group();
    perchero.add(meshp,meshp2,meshp3,meshp4,meshp6,meshp7,meshp8,meshp9,meshp5);
    perchero.position.set(10,0,-17);
    

//DECORACION CABAÑA
    var d= new THREE.SphereGeometry(2,16,16);
    var md= new THREE.MeshLambertMaterial({color:0x0b7300});
    var meshd= new THREE.Mesh(d,md);
    (meshd).scale.set(2,0.9,1);
    meshd.position.set(0,18.5,-22);
    var d2= new THREE.SphereGeometry(2,16,16);
    var meshd2= new THREE.Mesh(d2,md);
    (meshd2).scale.set(3,0.8,1);
    meshd2.position.set(8,18.5,-22);
    var d3= new THREE.SphereGeometry(2,16,16);
    var meshd3= new THREE.Mesh(d3,md);
    (meshd3).scale.set(3,0.8,1);
    meshd3.position.set(-6,18.5,-22);
    var d4= new THREE.SphereGeometry(2,16,16);
    var meshd4= new THREE.Mesh(d4,md);
    (meshd4).scale.set(2,0.9,1);
    meshd4.position.set(-13,18.5,-22);
    var d5= new THREE.SphereGeometry(2,16,16);
    var meshd5= new THREE.Mesh(d5,md);
    (meshd5).scale.set(2,0.9,1);
    meshd5.position.set(15,18.5,-22);    
    var d6= new THREE.SphereGeometry(2,16,16);
    var meshd6= new THREE.Mesh(d6,md);
    (meshd6).scale.set(2,0.9,1);
    meshd6.position.set(-18,18.5,-22);
    var d7= new THREE.SphereGeometry(2,16,16);
    var meshd7= new THREE.Mesh(d7,md);
    (meshd7).scale.set(2,0.9,1);
    meshd7.position.set(20,18.5,-22);
    var e= new THREE.SphereGeometry(1,16,16);
    var me= new THREE.MeshLambertMaterial({color:0xa90c0c});
    var meshe= new THREE.Mesh(e,me);
    meshe.position.set(20,19,-24);
    var e2= new THREE.SphereGeometry(1,16,16);
    var meshe2= new THREE.Mesh(e2,me);
    meshe2.position.set(-20,19,-24);
    var e3= new THREE.SphereGeometry(1,16,16);
    var me2= new THREE.MeshLambertMaterial({color:0xf3d308});
    var meshe3= new THREE.Mesh(e3,me2);
    meshe3.position.set(15,17,-24);
    var e4= new THREE.SphereGeometry(1,16,16);
    var meshe4= new THREE.Mesh(e4,me2);
    meshe4.position.set(-15,17,-24);
    var e5= new THREE.SphereGeometry(1,16,16);
    var meshe5= new THREE.Mesh(e5,me);
    meshe5.position.set(10,19,-24);
    var e6= new THREE.SphereGeometry(1,16,16);
    var meshe6= new THREE.Mesh(e6,me);
    meshe6.position.set(-10,19,-24);
    var e7= new THREE.SphereGeometry(1,16,16);
    var meshe7= new THREE.Mesh(e7,me2);
    meshe7.position.set(0,17,-24);
    var decoracionc= new THREE.Group();
    decoracionc.add(meshd,meshd2,meshd3,meshd4,meshd4,meshd5,meshd6,meshd7,meshe,meshe2,meshe3,meshe4,meshe5,meshe6,meshe7);
    var decoracionc2=decoracionc.clone();
    decoracionc2.position.set(0,0,6);
    decoracionc2.rotation.set(0,3.14,0);
    var decoracionc3=decoracionc.clone();
    decoracionc3.position.set(2,0,2);
    decoracionc3.rotation.set(0,-1.57,0);
    var decoracionc4=decoracionc.clone();
    decoracionc4.position.set(-1,0,2);
    decoracionc4.rotation.set(0,1.57,0);

//CUADROS
    var c= new THREE.BoxGeometry(9,13,0.5,16,16,16);
    var texture= new THREE.TextureLoader().load("./imagenes/c1.jpeg");
    var mc= new THREE.MeshLambertMaterial({ map:texture });
    var meshc= new THREE.Mesh(c,mc);
    meshc.position.set(-12,12,-19);

    var c2= new THREE.BoxGeometry(0.5,14,16,16,16,16);
    var texture= new THREE.TextureLoader().load("./imagenes/c2.jpeg");
    var mc2= new THREE.MeshLambertMaterial({ map:texture });
    var meshc2= new THREE.Mesh(c2,mc2);
    meshc2.position.set(21,12,-5);

    var c3= new THREE.BoxGeometry(0.5,10,10,16,16,16);
    var texture= new THREE.TextureLoader().load("./imagenes/c3.jpeg");
    var mc3= new THREE.MeshLambertMaterial({ map:texture });
    var meshc3= new THREE.Mesh(c3,mc2);
    meshc3.position.set(-19,13,-10);
    
//SILLON
    var s= new THREE.BoxGeometry(6,6,2,16,16,16);
    var ms= new THREE.MeshLambertMaterial({color:0xa60000});
    var meshs= new THREE.Mesh(s,ms);
    meshs.position.set(0,7.5,0);
    var s2= new THREE.BoxGeometry(6,2,6,16,16,16);
    var meshs2= new THREE.Mesh(s2,ms);
    meshs2.position.set(0,3.9,-2);
    var s3= new THREE.SphereGeometry(1.5,10,10);
    var meshs3= new THREE.Mesh(s3,ms);
    (meshs3).scale.set(1,2.4,1);
    meshs3.position.set(2.5,8.2,0);
    var s4= new THREE.SphereGeometry(1.5,10,10);
    var meshs4= new THREE.Mesh(s4,ms);
    (meshs4).scale.set(1,2.4,1);
    meshs4.position.set(-2.5,8.2,0);
    var s5= new THREE.SphereGeometry(1.5,10,10);
    var meshs5= new THREE.Mesh(s5,ms);
    (meshs5).scale.set(2,0.7,1);
    meshs5.position.set(0,10.3,0);
    var s6= new THREE.SphereGeometry(1.5,10,10);
    var meshs6= new THREE.Mesh(s6,ms);
    (meshs6).scale.set(0.8,1,2);
    meshs6.position.set(3,5.5,-3);
    var s7= new THREE.SphereGeometry(1.5,10,10);
    var meshs7= new THREE.Mesh(s7,ms);
    (meshs7).scale.set(0.8,1,2);
    meshs7.position.set(-3,5.5,-3);
    var s8= new THREE.SphereGeometry(1.5,10,10);
    var meshs8= new THREE.Mesh(s8,ms);
    (meshs8).scale.set(2.2,0.8,1);
    meshs8.position.set(0,4,-5);
    var pata= new THREE.CylinderGeometry(0.5,0.5,1.5);
    var mpata= new THREE.MeshBasicMaterial({color:0x562c03,wireframe:false});
    var meshpata= new THREE.Mesh(pata,mpata);
    meshpata.position.set(2,2.7,0.5);
    var pata2= new THREE.CylinderGeometry(0.5,0.5,1.5);
    var meshpata2= new THREE.Mesh(pata2,mpata);
    meshpata2.position.set(-2,2.7,0.5);
    var pata3= new THREE.CylinderGeometry(0.5,0.5,1.5);
    var meshpata3= new THREE.Mesh(pata3,mpata);
    meshpata3.position.set(-2,2.7,-4.7);
    var pata4= new THREE.CylinderGeometry(0.5,0.5,1.5);
    var meshpata4= new THREE.Mesh(pata4,mpata);
    meshpata4.position.set(2,2.7,-4.7);
    var sillon = new THREE.Group();
    sillon.add(meshs,meshs2,meshs3,meshs4,meshs5,meshs6,meshs7,meshs8,meshpata,meshpata2,meshpata3,meshpata4);
    sillon.position.set(-13,-2,20);
    sillon.rotation.set(0,-0.785,0);
//CHIMENEA
var cubo = new THREE.BoxGeometry(8,6,3);
var rojo = new THREE.MeshBasicMaterial({color:0xd92020});
var chi = new THREE.Mesh(cubo,rojo);
var cubo1 = new THREE.BoxGeometry(4.5,3,1);
var chi1 = new THREE.Mesh(cubo1,rojo);
chi1.position.set(0,3,0)
var cubo2 = new THREE.BoxGeometry(6,4,2);
var texturaImagen = new THREE.TextureLoader().load('./imagenes/fuego.png');
var material = new THREE.MeshLambertMaterial({
map:texturaImagen
});
var negro = new THREE.MeshBasicMaterial({color:0x060101});
var chi2 = new THREE.Mesh(cubo2,texturaImagen);
chi2.position.set(0,-1,0.6)
var cubo3 = new THREE.BoxGeometry(1,2,1);
var naranja = new THREE.MeshBasicMaterial({color:0xff7d09});
var chi3 = new THREE.Mesh(cubo3,naranja);
chi3.position.set(1,-2,1.2)
var cubo4 = new THREE.BoxGeometry(1,2,1);
var chi4 = new THREE.Mesh(cubo3,naranja);
chi4.position.set(-1,-2,1.2)
var cubo5 = new THREE.BoxGeometry(2,3,0.5);
var chi5 = new THREE.Mesh(cubo5,rojo);
chi5.position.set(1.3,4,0);
var cubo6 = new THREE.BoxGeometry(2,3,0.5);
var chi6 = new THREE.Mesh(cubo6,rojo);
chi6.position.set(-1.4,4,0);
var chiCOMPLETA = new THREE.Group();
chiCOMPLETA.add(chi,chi1,chi2,chi3,chi4,chi5, chi6);
chiCOMPLETA.position.set(0,4.5,23);
chiCOMPLETA.rotation.set(0,3.14,0);
chiCOMPLETA.scale.set(1.5,1.6,2);

//OSO
var esfera = new THREE.SphereGeometry(3,16,16);
var rojo = new THREE.MeshBasicMaterial({color:0x9b4107});
var esferaRoja = new THREE.Mesh(esfera,rojo);
esferaRoja.position.set(0,0,0);
var esfera1 = new THREE.SphereGeometry(2,16,16);
var esferaRoja1 = new THREE.Mesh(esfera1,rojo);
esferaRoja1.position.set(0,4.5,0);
var esfera2 = new THREE.SphereGeometry(1,16,16);
var esferaRoja2 = new THREE.Mesh(esfera2,rojo);
esferaRoja2.position.set(2,6,0);
var esfera3 = new THREE.SphereGeometry(1,16,16);
var esferaRoja3 = new THREE.Mesh(esfera3,rojo);
esferaRoja3.position.set(-2,6,0);
var palo = new THREE.CylinderGeometry(1,1,3,10,15);
var cafe = new THREE.MeshBasicMaterial({color:0x853f01});
var palopintado = new THREE.Mesh(palo,cafe);
palopintado.position.set(3,0,0);
palopintado.rotation.set(0.785398,0,0.785398);
var palo1 = new THREE.CylinderGeometry(1,1,7,10,15);
var palopintado1 = new THREE.Mesh(palo,cafe);
palopintado1.position.set(-3,0,0);
palopintado1.rotation.set(0.785398,0,-0.785398);
var palo2 = new THREE.CylinderGeometry(1,1,7,10,15);
var palopintado2 = new THREE.Mesh(palo,cafe);
palopintado2.position.set(1,-1,-2);
palopintado2.rotation.set(0,1.5708,1.5708);
var palo3 = new THREE.CylinderGeometry(1,1,7,10,15);
var palopintado3 = new THREE.Mesh(palo,cafe);
palopintado3.position.set(-1,-1,-2);
palopintado3.rotation.set(0,1.5708,1.5708);
var esfera4 = new THREE.SphereGeometry(0.5,16,16);
var negro = new THREE.MeshBasicMaterial({color:0x201810});
var esferaRoja4 = new THREE.Mesh(esfera4,negro);
esferaRoja4.position.set(1,5,-1.6);
var esfera5 = new THREE.SphereGeometry(0.5,16,16);
var negro = new THREE.MeshBasicMaterial({color:0x201810});
var esferaRoja5 = new THREE.Mesh(esfera4,negro);
esferaRoja5.position.set(-1,5,-1.6);
var esfera6 = new THREE.SphereGeometry(0.4,16,16);
var esferaRoja6 = new THREE.Mesh(esfera6,negro);
esferaRoja6.position.set(2,6,-0.8);
var esfera7 = new THREE.SphereGeometry(0.4,16,16);
var esferaRoja7 = new THREE.Mesh(esfera7,negro);
esferaRoja7.position.set(-2,6,-0.8);
var oso = new THREE.Group();
oso.add(esferaRoja,esferaRoja1,esferaRoja2,esferaRoja3, palopintado, palopintado1,palopintado2,palopintado3,esferaRoja4,esferaRoja5,esferaRoja6,esferaRoja7);
oso.position.set(-15,3,0);
oso.rotation.set(0,-1.57,0);


//CABAÑA completa
    var cabana1 = new THREE.Group();
    cabana1.add(cabana,alfombra,alfombra1,decoracion, esferaNegra4, esferaNegra5, esferaNegra6, esferaNegra7, chimeneaCOMPLETA);
    cabana1.position.set(0,10,0);

    var cabanaFINAL = new THREE.Group();
    cabanaFINAL.add(cabana1,perchero,decoracionc,decoracionc2,decoracionc3,decoracionc4,meshc,meshc2,meshc3,sillon,chiCOMPLETA,oso);
    //scene.add(cabanaFINAL);
    cabanaFINAL.position.set(x,y,z);
    return cabanaFINAL;

    }
