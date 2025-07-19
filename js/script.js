const header = document.querySelector("header");
const section = document.querySelector("section");

const requestURL = "https://fakestoreapi.com/products";

//haciendo peticiones primero generar el objeto
const request = new XMLHttpRequest();

//para traerse los datos  con el metodo get
request.open("GET", requestURL);


request.responseType = "json"; //las opciones son cadena de caracteres u objeto json

//enviar solicitud
request.send();

request.onload = function (){
    const productos = request.response;
    console.log(productos);
    pintarCabecera(productos);
    pintarSeccion(productos);
}

function pintarCabecera(jsonObj){
    //console.log("Desde pintarCabecera");
    const etiquetaH1 = document.createElement("h1"); //creando la etiqueta
    etiquetaH1.textContent = "Tiend de productos";
    header.appendChild(etiquetaH1);

}

function pintarSeccion(jsonObj){
    //const s1=jsonObj.members[0];
    //console.log(s1);
    const etiquetaH1 = document.createElement("h1"); //creando la etiqueta
    etiquetaH1.textContent = jsonObj[0].title;
    header.appendChild(etiquetaH1);

    const etiquetaP = document.createElement("p");
    
    etiquetaP.textContent = jsonObj[0].description;
    console.log(jsonObj.description);
    header.appendChild(etiquetaP);


    const listaProductos = jsonObj;
    for(var i=0; i <listaProductos.length; i++){
        //console.lig(i);
        const article = document.createElement("article");
        const img= document.createElement("img")
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const span = document.createElement("span");
        const p3 = document.createElement("p");
        const b1 = document.createElement("button");

        //agregan contenido a las etiquetas
        img.src = listaProductos[i].image; 
        h2.textContent = listaProductos[i].title;

        p1.textContent = "Secrete Identity: " + listaProductos[i].title;
        span.textContent = "Price: " + listaProductos[i].price;
        p3.textContent = "Description: " + listaProductos[i].description;
        b1.textContent = "Comprar";


        //agregan la etiqueta como hijo
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(span);
        article.appendChild(p3);
        article.appendChild(b1);
        


        section.appendChild(article);
    }
}