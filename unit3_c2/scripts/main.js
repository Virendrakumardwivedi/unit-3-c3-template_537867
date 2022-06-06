function Nuser(n,e,ad,am){
    this.name=n;
    this.email=e;
    this.address=ad;
    this.amount=am;
}

function users(e){
    e.preventDefault();

    let from = document.getElementById("form");

    let name=from.name.value;
    let email = from.email.value;
    let address=from.address.value;
    let amount=from.amount.value;

    //console.log(name,email,address,amount)
   let u1 = new Nuser(name,email,address,amount)
   let data =JSON.parse(localStorage.getItem("user"))|| [];
   data.push(u1)

   localStorage.setItem("user",JSON.stringify(data))

}

