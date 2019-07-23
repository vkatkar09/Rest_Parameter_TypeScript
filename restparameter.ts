function authorDetails() {
    var authors = [{
            id: 1,
            coursename: 'HTML5',
            price: 400.50,
            rating: 4,
            author: 'minal',
            avl: true
        },
        {
            id: 2,
            coursename: 'CSS',
            price: 700.75,
            rating: 5,
            author: 'ashvini',
            avl: false
        },
        {
            id: 3,
            coursename: 'Bootstrap',
            price: 700,
            rating: 3,
            author: 'varsha',
            avl: true
        },
        {
            id: 4,
            coursename: 'JavaScript',
            price: 1000,
            rating: 4,
            author: 'Ram',
            avl: true
        },
    ];
    return authors;
};

 function AuthorId(id:number){
     let authors = authorDetails();
     return authors.filter(item => item.id === id )[0]
 };


function CreateAuthorId(...authorId:number[]):string[]{
let storeAuthordetails = [];
for(let id of authorId){
    let authId = AuthorId(id);
    if(authId.avl){
        storeAuthordetails.push(authId.id, authId.coursename, authId.price, authId.rating, authId.author);
    }
}
console.log(storeAuthordetails);
return storeAuthordetails;
}

CreateAuthorId(1,2,3);