let count=10;
let URL=`https://api.unsplash.com/photos/random/?client_id=n0K0M-8346rPehYcJTOuWUUnp9MmHCzl5Cc8lulSc7w&count=${count}`
let imgsiplay=document.getElementById("imgdisplay");
async function getimage(){
    try{
    let res=await fetch(URL);
    let data=await res.json();
    // console.log(data);
    data.forEach(element => {
        // console.log(element)
        imgsiplay.innerHTML+=`<a href="${element.links.html}"><img src="${element.urls.small}" alt"" "></a>`
    });
}
catch (error){
    imgsiplay.innerHTML=error +" Something went wrong check with your internet connection and URL";
    console.log(error);

}
}
getimage();



window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight){
        getimage();
    }
})




