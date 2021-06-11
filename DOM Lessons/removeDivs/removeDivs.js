//Напишите функцию, которая принимает html в виде строки и возвращает html без элементов div (и всего что внутри), 
//все остальные элементы сохраняются. Используйте createElement, querySelectorAll и innerHTML.

const removeDivs = html => {
    const root = document.createElement('span');
    root.innerHTML = html;
    const divs = root.querySelectorAll('div');
    divs.forEach(div =>{
        div.parentNode.removeChild(div);
    })

    return root.innerHTML;
}

const html = '<div></div>Hello<div><div><p>Hello world</p></div></div> <b>World!</b>';

alert(removeDivs(html));
alert( removeDivs(html) === 'Hello <b>World!</b>');