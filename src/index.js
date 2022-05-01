// alert("aaaaaaaaaaaaa")

// link=https://api.unsplash.com/search/photos/?query=${value}&order_by=${sort}&orientation=${filter}&per_page=20&client_id=
// Api = 7bgNMPQ4P7mFMazXVi4QNFCwDH16eE8czokj3x0UGF4 


const API="7bgNMPQ4P7mFMazXVi4QNFCwDH16eE8czokj3x0UGF4"
import "../style/index.css";
import "../style/navbar.css";

import {navbar} from "../components/navbar.js"

import {searchImages,appends } from "./fetch.js";

let n = document.getElementById("navbar")
n.innerHTML=navbar();

let id;
let search = (e)=>{
    if(e.key === "Enter"){
        console.log("Enter")
        if(id){
            clearTimeout(id)
        }
        id=setTimeout(()=>{ 
            console.log("Debounce")
            let value=document.getElementById("query").value;
            let sort=document.getElementById("sort").value;
            let filter=document.getElementById("filter").value;
            searchImages(API,value,sort,filter).then((data)=>{
                console.log(data)
                let box=document.getElementById("container")
                box.innerHTML=null;
                appends(data.results,box)
            }) 
        }, 1000)   
    }
};

document.getElementById("query").addEventListener("keydown", search)

let categories=document.getElementById("categories").children;
// console.log(categories)

for( let el of categories){
    el.addEventListener("click",csearch)
}

function csearch(){
    // console.log(this.id)
    let sort=document.getElementById("sort").value;
    let filter=document.getElementById("filter").value;
    searchImages(API,this.id,sort,filter).then((data)=>{
        // console.log(data)
        let box=document.getElementById("container")
        box.innerHTML=null;
        appends(data.results,box)
    })
}



// let searchImages = async()=>{
//     // console.log("chetna")
// let value=document.getElementById("query").value;
// try{
//     let res = await fetch(
//         `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`
//         );
//     let data= await res.json();
//         console.log(data)
// }
// catch(err){
//     console.log(err)
// }
// }


