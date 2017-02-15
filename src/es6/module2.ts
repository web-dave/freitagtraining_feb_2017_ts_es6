export const getArticleCard = (article: any, price: number, img: any) => `
    <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="${img}" alt="Card image cap">
        <div class="card-block">
            <h4 class="card-title">${article.name}</h4>
            <p class="card-text">${article.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`;
    