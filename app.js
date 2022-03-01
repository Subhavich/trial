// const form = document.querySelector('form')
// const quant = document.querySelector('#qty')
// const item = document.querySelector('#namae')
// const list = document.querySelector('ul')
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const items = item.value;
//     const quantity = quant.value;
//     const toInsert = `${items} - ${quantity}`;
//     const newer = document.createElement('li');
//     newer.innerText=toInsert;
//     list.append(newer)
// })

// const ben = document.querySelector('input');
// var h1 = document.querySelector('h1');
// ben.addEventListener('input',function(e){
//     if (ben.value===""){
//         h1.innerText='none'
//     } else {
//         h1.innerText=`Welcome, ${ben.input}`
//     }
// })

const form = document.querySelector('form');
const user = document.querySelector('#username');
const tweet = document.querySelector('#tweet')
const list = document.querySelector('#taeyeon')
form.addEventListener('submit',function(evt){
    evt.preventDefault()
    const us = user.value;
    const tw = tweet.value;
    const tweetface = `<b>${us}</b> tweeted <i>${tw}</i>`;
    const newLi = document.createElement('li');
    newLi.innerHTML = tweetface;
    list.append(newLi)
})

function randColor (){
    const r = math.floor(Math.random()*255);
    const g = math.floor(Math.random()*255);
    const b = math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}

list.addEventListener('click',function(e){
    e.target.nodeName ==='LI' && e.target.remove();
})