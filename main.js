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
    let response = await fetch('https://reqres.in/api/users?page=2');
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
  } 
  
  // trigger async function
  // log response or catch error of fetch promise
  fetchAsync()
      .then(data => console.log(data.data[0].first_name))
      .then(data.data[0].first_name => document.getElementById("fetch").innerHTML)
      //.catch(reason => console.log(reason.message))