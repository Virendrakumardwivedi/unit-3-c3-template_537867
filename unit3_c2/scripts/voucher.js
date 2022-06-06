
const datas=JSON.parse(localStorage.getItem("user"))
//document.querySelector("#wallet_balance").innerText=amou

let amou=0;
for(var i=0; i<datas.length; i++){
    let amou=""
    amou=amou+(datas[i].amount)
    //console.log(amou)
let allmoney= document.querySelector("#wallet_balance").innerText=amou

}


let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"

let voucher_list = document.getElementById("voucher_list")

fetch(url)
.then(function(res){
    return res.json();
}).then(function(res){
    console.log(res)
    appendData(res[0].vouchers)
})
.catch(function(err){
    console.log(err)
})


function appendData(data){
    console.log(data)
    data.forEach(function(el){
        var box = document.createElement("div")
  
        var img = document.createElement("img")
        img.src=el.image

        var name = document.createElement("p")
        name.innerText=el.name;

        var price = document.createElement("p")
        price.innerText=el.price;

        var btn = document.createElement("button")
        btn.innerText="Buy"
        btn.setAttribute("class", "buy_voucher")
       btn.addEventListener("click",function(){
           buyitem(data)
       })


        box.append(img,name,price,btn)

    voucher_list.append(box)
    })
}

buyitem = (data)=>{
    var user = JSON.parse(localStorage.getItem("user"))

    if(user.wallet >=data.price){
        user.wallet -=data.price
        localStorage.setItem("user",JSON.stringify(user))
        alert("Hurray! purchase successful")
        document.querySelector("#wallet_balance").innerText=user.wallet;

        var purc = JSON.parse(localStorage.getItem("purchase"))
        if(purc ==null){
            purc=[]
        }
        purc.push(data)
        localStorage.setItem("purchase",JSON.stringify(purc))
        appen_purc()
    }
    else{
        alert("Sorry! insufficient balance")
    }
}
