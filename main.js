function printTime() {
  const now = new Date()
  const formatteDate = now.getHours() + ":" +
      now.getMinutes() + ":" + now.getSeconds()
  const hours = now.getHours() + ":"
  const minutes = now.getMinutes() + ":"
  const seconds = now.getSeconds()
  
  //orologioDiv.innerHTML = formatteDate  
  const ore = document.getElementById("ore")
  ore.innerHTML = hours
  const minuti = document.getElementById("minuti")  
  minuti.innerHTML = minutes
  const secondi = document.getElementById("secondi")  
  secondi.innerHTML = seconds

  //console.log(formatteDate)
}

setInterval(printTime, 1000)

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  async function fetchAsync () {
    // await response of fetch call
    let response = await fetch('https://reqres.in/api/users/');
    // only proceed once promise is resolved
    let res = await response.json();
    // only proceed once second promise is resolved
    return res;
  } 
  
  // trigger async function
  // log response or catch error of fetch promise
  fetchAsync()
      //.then(data => console.log(data.data[0].first_name))
      
      //.catch(reason => console.log(reason.message))
      .then(res => {
        //console.log(res.data.lenght)
      for(let i of res.data){
        let div = document.createElement("div")
        div.classList.add("row", "col-4")
        
        let divnode = document.createTextNode("Nome: " + i.first_name + " " )
        let elem = document.createElement("img")
        let divnode1 = document.createTextNode("Cognome: "+ i.last_name +" "  )
         
        elem.setAttribute("src", i.avatar)
        div.appendChild(divnode)
        div.appendChild(divnode1)
        div.appendChild(elem)        
        document.getElementById("news").appendChild(div)
            
        
        
        
      }
    })
    var ora = new Date();
    document.getElementById("ora").innerHTML = "Prima prova sommatoria del " 
    + ora.getDate() + "/" + (ora.getMonth() + 1) + "/" + ora.getFullYear();
    
  