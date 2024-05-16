// let key ='6796e8504a6b4e578421d55c4391c5b3';
// let pais ='us'
// let url = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${key}`;
// let mostrar_noticias = document.getElementById('noticias');

// fetch(url).then((resp) => resp.json()).then(dato =>{
//     console.log(dato);
//     let noticias = (dato.articles);
//     noticias.map(function(numero){
//         let div = document.createElement('noticias');
//         div.innerHTML= `<br>
//                         <img style="max-width:800px" src=${numero.urlToImage}><br>
//                         <h1>${numero.title}</h1>
//                         <h2>${numero.description}</h2>
//                         <h3>${numero.url}</h3>`;
//         mostrar_noticias.appendChild(div);
//     })
// });

let key = '6796e8504a6b4e578421d55c4391c5b3';
let sources = 'bbc-news';
let url = `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${key}`;
let mostrar_noticias = document.getElementById('noticias');
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6796e8504a6b4e578421d55c4391c5b3
fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
        let noticias = data.articles.slice(0, 3); // Obtener solo los primeros 3 elementos
        noticias.forEach((article) => {
            let div = document.createElement('div');
            div.classList.add('col-md-4');
            div.innerHTML = `
                <div class="card">
                    <img class="card-img-top" src="${article.urlToImage}" alt="${article.title}">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text1">${article.description}</p>
                        <a href="${article.url}" target="_blank">${article.url}</a>
                    </div>
                </div>
            `;
            mostrar_noticias.appendChild(div);
        });
    })
    .catch((error) => console.error('Error al obtener noticias:', error));
