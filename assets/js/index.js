const propiedades = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

    /* Mostrando todas las tarjetas antes de aplicar el filtro */
let showCards = ``;
let showCounter = document.querySelector('#counter');
let properties = document.querySelector('#propiedades');
let showCount = 0;
for(items of propiedades){
  showCount += 1;
  showCards += 
  `<div class="propiedad">
      <div class="img" style="background-image: url('${items.src}')"></div>
      <section>
        <h5>${items.name}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${items.rooms}</p>
          <p>Metros: ${items.m}</p>
        </div>
        <p class="my-3">${items.description}</p>
        <button class="btn btn-info">Ver más</button>
      </section>
  </div>`;
}
showCounter.innerHTML = showCount;
properties.innerHTML = showCards;


    /* Mostrando las tarjetas despues de aplicar el filtro */
const search = document.getElementById('search');
search.addEventListener('click', () => {
  let rooms = document.getElementById('rooms').value;
  let minimum = document.getElementById('minimum').value;
  let maximum = document.getElementById('maximum').value;
  let property = document.getElementById('propiedades');
  let counter = document.getElementById('counter');
  count = 0;
  let addCards = ``;
  checkInputs: if(rooms == 0 || minimum == 0 || maximum == 0){
    alert('Faltan campos por llenar');
    break checkInputs;
  } else {
    for(items of propiedades){
      if(rooms == items.rooms && items.m >= minimum  && items.m <= maximum){
        count += 1
        addCards += 
        `<div class="propiedad">
            <div class="img" style="background-image: url('${items.src}')"></div>
            <section>
              <h5>${items.name}</h5>
              <div class="d-flex justify-content-between">
                <p>Cuartos: ${items.rooms}</p>
                <p>Metros: ${items.m}</p>
              </div>
              <p class="my-3">${items.description}</p>
              <button class="btn btn-info">Ver más</button>
            </section>
        </div>`
      }
    }
    property.innerHTML = addCards;
    counter.innerHTML = count;
  }
})