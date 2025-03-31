function fetchData(){
    var input = document.getElementById("input").value;
    var url = `https://api.github.com/users/${input}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var parent = document.getElementById("parent");
        var div = document.createElement("div");
        parent.append(div)
        div.innerHTML=`<img src=${data.avatar_url}/> 
        <h1>Name: ${data.name}</h1> 
         <h1>login Name: ${data.login}</h1>                  
         <h3>id: ${data.id}</h3> 
         <p>DATA BIO: ${data.bio}</p> 
         <p>FOLLOWERS: ${data.followers}</p> 
         <p>FOLLOWING: ${data.following}</p> 
         <p>PUBLIC REP: ${data.public_repos}</p> 
         <a href=${data.html_url} target="_blank"> PROFILE</a>`

    })
    
}

