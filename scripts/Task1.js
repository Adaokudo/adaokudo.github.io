const photo= 'images/adaobi.jpg'

document.querySelector('#photo').setAttribute('src', photo);


document.querySelector('#photo').setAttribute('alt', photo);

const currentDate = new Date();

document.querySelector('#year').textContent = currentDate.getFullYear();


