function dogAPImage(){
    let select4=document.getElementById('divCont4');
      function status(response) {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        } else {
          return Promise.reject(new Error(response.statusText))
        }
      };

    select4.innerHTML= 
    `
    <div class="spinner-border text-info "role="status">
        <span class="sr-only">Loading...</span>
        </div>
    `;
    
      const toJSON= response=>response.json();
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(status)
      .then(toJSON)
      .then( response=>{
        select4.innerHTML= 
        `
        <img src="${response.message}" alt="myDog" id="dogImg" class="img-thumbnail">
        <h1 id="h1dog"><span>❤My Dog's Health</span> and ID Records</h1>
        `;
      
      }).catch(function(error) {
        console.error('EROARE TIP:', error);
        select4.innerHTML= 
        `
        <h1 id="h1dog"><span>❤</span>'s Health and ID Records</h1>
        
        `;
      });
  } // DogAPI()

  export{dogAPImage}
