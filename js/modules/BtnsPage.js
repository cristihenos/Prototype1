 function BtnsPage() {

//Select <button>
let SelectBtns0=document.querySelector('#btnSettings');
let SelectBtns1=document.querySelector('#btnTerms');
let SelectBtns2=document.querySelector('#btnAbout');
let SelectBtns3=document.querySelector('#btnRecordingdata');



// Select <div>
let SelectDiv0=document.querySelector('#divCont0');
let SelectDiv1=document.querySelector('#divCont1');
let SelectDiv2=document.querySelector('#divCont2');
let SelectDiv3=document.querySelector('#divCont3');

SelectBtns0.addEventListener('click', showSettings);
SelectBtns1.addEventListener('click', showTerms);
SelectBtns2.addEventListener('click', showAbout);
SelectBtns3.addEventListener('click', showRecordingdata);


// Show me the page settings
function showSettings(){
  SelectBtns0.setAttribute('hidden','');
  let newInputSettings='<h3 class="text-center"><button class="btn btn-warning" id="btnSettingsUp">Page settings ▲</button></h3>';
   SelectDiv0.innerHTML=`
   ${newInputSettings}
   <div class="row" id="row0">
            <div class="col-sm-3">
              <h6><p id="p12">Language:</p></h6>
              <select name="Language"  class="form-control">
                <option value="1">English</option>
                <option value="2">Italiano</option>
                <option value="3">Romana</option>
              </select>
            </div>
              <div class="col-sm-3">
                <h6><p id="p12">Background Color:</p></h6>
                <input type="range" name="rangeBack"  min="0" max="5" class="form-control-range">
              </div>
              <div class="col-sm-3">
                <h6><p id="p12">Font:</p></h6>
                <input type="range" name="rangeFont"  min="0" max="5" class="form-control-range">
              </div>
          </div>
   `;
   let SelectbtnSettingsUp=document.querySelector('#btnSettingsUp');
           SelectbtnSettingsUp.addEventListener('click', removeSettings);
              function removeSettings() {
                SelectBtns0.removeAttribute('hidden','');
                SelectDiv0.innerHTML=''
              };
  };

// Show me the terms 
function showTerms() {
  SelectBtns1.setAttribute('hidden','');
  let newInput='<h3 class="text-center"><button class="btn btn-warning" id="btnTermsUp">Terms and Conditions ▲</button></h3>';
   SelectDiv1.innerHTML=`
              ${newInput}
              <div class="row" id="row1">
                <div class="col-sm-12">
                  <h3 class="text-center">TERMENII SI CONDITII</h3><br>
                    <h5>ACCEPTAREA CONDITIILOR</h5>
                      <p>- Prin accesarea acestui site web si/sau a oricarei pagini a acestuia sunteti de acord cu aceste conditii de utilizare. Daca NU sunteti de acord cu acesti termeni si conditii de utilizare NU accesati acest site. </P>
                    <h5>NEANGAJAREA RASPUNDERII</h5>
                      <p>- Catelus.netlify.com nu poate fi facut raspunzatoar in nici un fel de pierderile sau daunele pe care cineva le-ar putea suferi ca urmare a folosirii in vreun fel a informatiilor prezentate in acest site web.</p>
                      <p>- Catelus.netlify.com nu garanteaza in nici un fel acuratetea, gradul de utilitate sau caracterul complet al informatiilor sau al materialelor cuprinse in acest site. Catelus.netlify.com nu garanteaza rezultatele ce s-ar putea obtine din utilizarea informatiilor prezentate prin intermediul acestui site si nici disponibilitatea spre folosire a oricaror informatii prezente pe site.</p>
                      <p>- Catelus.netlify.com nu isi asuma nici o responsabilitate pentru continutul nici unui material prezentat pe acest site. Acestea sunt prezentate in scop informativ si fiind considerate ca fiind utile.</p>
                      <p>- Catelus.netlify.com nu poate fi tras la raspundere pentru materialele prezente pe site, acestea sunt prezentate in scop informativ, nu in scop comercial.</p>
                    <h5>REGULI GENERALE</h5>
                      <p>- Orice utilizator care viziteaza acest site o face pe propria raspundere. Materialele si informatiile continute in acest site sunt furnizate în scop de informare generala, nefiind insotite de nici un fel de garantii, explicite sau implicite.</p>
                      <p>Catelus.netlify.com nu isi asuma nici o raspundere pentru continutul website-urilor tertelor parţi pentru care exista link-uri pe Catelus.netlify.com. Utilizarea acestora atrage parasirea website-ului Catelus.netlify.com si se face pe propria raspundere a utilizatorului.</p>
                    <h5>LIMITARI DE ORDIN TEHNIC ALE SERVICIILOR</h5>
                      <p>- Catelus.netlify.com nu isi asuma nici o responsabilitate in cazul in care serviciile site-ului nu pot fi accesate de catre utilizatori, pe o perioada nelimitata/nedeterminata de timp, din orice motive tehnice sau comerciale.</p>
                    <h5>INCHEIEREA ACORDULUI</h5>
                      <p>- Catelus.netlify.com isi rezerva dreptul de a schimba termenii, conditiile si politicile in orice moment fara a anunta in prealabil, prin urmare sunteti rugat sa revedeti in mod regulat aceasta sectiune pentru a fi la curent cu modificarile aduse.</p>
                  </div>
                </div>
   `;
      let SelectbtnTermsUp=document.querySelector('#btnTermsUp');
            SelectbtnTermsUp.addEventListener('click', removeTextTerms);
              function removeTextTerms() {
                SelectBtns1.removeAttribute('hidden','');
                SelectDiv1.innerHTML=''
              };
  };

// Show me the About Us 
function showAbout() {
  SelectBtns2.setAttribute('hidden','');
  let newInput='<h3 class="text-center"><button class="btn btn-warning" id="btnAboutUp">About Us ▲</button></h3>';
   SelectDiv2.innerHTML=`
              ${newInput}
              <div class="row" id="row1">
                <div class="col-sm-12">
                  <h3 class="text-center">COMING SOON</h3><br>

                  </div>
                </div>
   `;
      let SelectbtnAboutUp=document.querySelector('#btnAboutUp');
            SelectbtnAboutUp.addEventListener('click', removeTextAbout);
              function removeTextAbout() {
                SelectBtns2.removeAttribute('hidden','');
                SelectDiv2.innerHTML=''
              };
  };


// Show me the Recording Data
function showRecordingdata() {
  SelectBtns3.setAttribute('hidden','');
  let newInput='<h3 class="text-center"><button class="btn btn-warning" id="btnRecordingdataUp">Recording data ▲</button></h3>';
   SelectDiv3.innerHTML=`
              ${newInput}
              <form>
        <div class="row" id="row2">
          <h6><p id="p12">Name:</p></h6>
            <div class="col-sm-3">
              <input type="text" name="dogName"  class="form-control" maxlength="12" placeholder="Rex">
            </div>
          <h6><p id="p12">Birth:</p></h6>
            <div class="col-sm-3">
              <input type="date" name="date"  class="form-control">
            </div>
          <h6><p id="p11">Years:</p></h6>
            <div class="col-sm-3">
              <input type="text" name="years" maxlength="2" class="form-control">
            </div>
          </div><br>
          <div class="row" id="row3">
          <h6><p id="p12">Weight:</p></h6>
            <div class="col-sm-3">
              <input type="text" name="weight" maxlength="2" class="form-control" placeholder="Kg">
            </div>
            <h6><p id="p12">Vaccines:</p></h6>
            <div class="col-sm-3">
              <select name="foodList" class="form-control" multiple="">
                    <option value="1" id="p7">Rabies 1-year</option>
                    <option value="2" id="p8">Rabies 3-year</option>
                    <option value="3" id="p9">Distemper</option>
                    <option value="4" id="p10">Parvovirus</option>
                    <option value="4" id="p10">Adenovirus,type 1 (CAV-1, canine hepatitis)</option>
                    <option value="4" id="p10">Adenovirus,type 2 (CAV-2, kennel cough)</option>
                    <option value="4" id="p10">Bordetella bronchiseptica (kennel cough)</option>
                    <option value="4" id="p10">Lyme disease</option>
                    <option value="4" id="p10">Canine influenza</option>
                </select>
                <label class="form-check-label"><a href="">Vaccines information</a></label>
            </div>
            <h6><p id="p12">Sex:</p></h6>
            <div class="col-sm-3">
              <input type="radio"  name="dogsex"  value="M">M<br>
              <input type="radio"  name="dogsex" checked="" value="F">F
            </div>
          </div><br>
          <div class="row" id="row4">
            <h6><p id="p12">Particular signs:</p></h6>
            <div class="col-sm-3">
              <input type="text" name="signs" maxlength="30" class="form-control" placeholder="Signs">
            </div>
            <h6><p id="p12">Breed of dogs:</p></h6>
            <div class="col-sm-3">
              <input type="text" name="breed" maxlength="30" class="form-control" placeholder="Breed">
              </div>
            <div class="col-sm-3">
              <button class="btn btn-warning" id="showbreed">Show me all Breed of dogs</button>
            </div>
          </div>
          <div class="row" id="row5">
            <div class="col-sm-12">
              <button type="submit" class="btn btn-warning" id="submit" >Index the dog</button>
            </div>
          </div>
        </div><br>
      </form>
   `;
      let SelectbtnRecordUp=document.querySelector('#btnRecordingdataUp');
            SelectbtnRecordUp.addEventListener('click', removeTextRecordingdata);
              function removeTextRecordingdata() {
                SelectBtns3.removeAttribute('hidden','');
                SelectDiv3.innerHTML=''
              };
    };

  };

export {BtnsPage}


