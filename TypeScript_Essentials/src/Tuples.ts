let article:[number,string,boolean] = [25,"magdy",true];
article.push(100);
article.push("Mohamed");
article.push(false);
console.log(article);
/*
*if we made it like this ->let article:readonly[number,string,boolean] = [25,"magdy",true];
*we cannot mutable it
*/

const [id,title,published] = article;
console.log('ids are-> ',id);
console.log('titles are-> ',title);
console.log('is Published -> ',published);
