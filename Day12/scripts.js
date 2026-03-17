let pro = new Promise((resolve, reject)=>{
    let a=10;
    if(a>50){
        resolve()
    }
    else{
        reject()

    }
})
pro
.then(()=>console.log("promise resolved"))
.catch((err)=>console.error(err,"promise rejected"));

// when promise is resolved it goes to .then() method