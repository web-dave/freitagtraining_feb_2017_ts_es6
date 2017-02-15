import { getArticleCard } from './module2';
import { img } from './img';

const article = {
    name: 'Laptop i7',
    description: 'Top Gerät, Muss man haben!'
};
const image = img;

document.querySelector('.article').innerHTML = getArticleCard(article, 3200, image);