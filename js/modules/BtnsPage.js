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
  let newInputSettings='<h3 class="text-center"><button class="btn btn-warning" id="btnSettingsUp"><p id="p1a">Page settings ▲</p></button></h3>';
   SelectDiv0.innerHTML=`
   ${newInputSettings}
   <div class="row" id="row0">
            <div class="col-sm-3">
              <h6><p id="p2a">Language:</p></h6>
              <select name="Language"  class="form-control">
                <option value="1">English</option>
                <option value="2">Italiano</option>
                <option value="3">Romana</option>
              </select>
            </div>
              <div class="col-sm-3">
                <h6><p id="p3a">Background Color:</p></h6>
                <input type="range" name="rangeBack"  min="0" max="5" class="form-control-range">
              </div>
              <div class="col-sm-3">
                <h6><p id="p4a">Font:</p></h6>
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
  let newInput='<h3 class="text-center"><button class="btn btn-warning" id="btnTermsUp"><p id="p5a">Terms and Conditions ▲</p></button></h3>';
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
  let newInput='<h3 class="text-center"><button class="btn btn-warning" id="btnAboutUp"><p id="p6a">About Us ▲</p></button></h3>';
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
let breedOption=undefined;

  SelectBtns3.setAttribute('hidden','');
  let newInput='<h3 class="text-center"><button class="btn btn-warning" id="btnRecordingdataUp">Recording data ▲</button></h3>';
   SelectDiv3.innerHTML=`
              ${newInput}
              <form id="formSelect">
        <div class="row" id="row2">
          <h6><p id="p12">Name:</p></h6>
            <div class="col-sm-3">
              <input type="text" name="dogName"  class="form-control" maxlength="12" placeholder="Rex">
            </div>
          <h6><p id="p12">Birth:</p></h6>
            <div class="col-sm-3">
              <input type="date" name="dateBirth"  class="form-control">
            </div>
          <h6><p id="p11">Years:</p></h6>
            <div class="col-sm-3">
              <input type="text" name="years" maxlength="2" class="form-control">
            </div>
          </div><br>
          <div class="row" id="row3">
            <h6><p id="p12">Weight:</p></h6>
            <div class="col-sm-3">
              <input type="text" name="weight" maxlength="3" class="form-control" placeholder="Kg">
            </div>
            <h6><p id="p12"> Dog breed:</p></h6>
              <div class="col-sm-3">
                    <select name="dogSelect" class="form-control">
                      <option value="affenpinscher">affenpinscher</option>
                      <option value="african">african</option>
                      <option value="airedale">airedale</option>
                      <option value="akita">akita</option>
                      <option value="appenzeller">appenzeller</option>
                      <option value="basenji">basenji</option>
                      <option value="beagle">beagle</option>
                      <option value="bluetick">bluetick</option>
                      <option value="borzoi">borzoi</option>
                      <option value="bouvier">bouvier</option>
                      <option value="boxer">boxer</option>
                      <option value="brabancon">brabancon</option>
                      <option value="briard">briard</option>
                      <option value="bulldog-boston">boston bulldog</option>
                      <option value="bulldog-french">french bulldog</option>
                      <option value="bullterrier-staffordshire">staffordshire bullterrier</option>
                      <option value="cairn">cairn</option>
                      <option value="cattledog-australian">australian cattledog</option>
                      <option value="chihuahua">chihuahua</option>
                      <option value="chow">chow</option>
                      <option value="clumber">clumber</option>
                      <option value="cockapoo">cockapoo</option>
                      <option value="collie-border">border collie</option>
                      <option value="coonhound">coonhound</option>
                      <option value="corgi-cardigan">cardigan corgi</option>
                      <option value="cotondetulear">cotondetulear</option>
                      <option value="dachshund">dachshund</option>
                      <option value="dalmatian">dalmatian</option>
                      <option value="dane-great">great dane</option>
                      <option value="deerhound-scottish">scottish deerhound</option>
                      <option value="dhole">dhole</option><option value="dingo">dingo</option>
                      <option value="doberman">doberman</option>
                      <option value="elkhound-norwegian">norwegian elkhound</option>
                      <option value="entlebucher">entlebucher</option>
                      <option value="eskimo">eskimo</option>
                      <option value="frise-bichon">bichon frise</option>
                      <option value="germanshepherd">germanshepherd</option>
                      <option value="greyhound-italian">italian greyhound</option>
                      <option value="groenendael">groenendael</option>
                      <option value="hound-afghan">afghan hound</option>
                      <option value="hound-basset">basset hound</option>
                      <option value="hound-blood">blood hound</option>
                      <option value="hound-english">english hound</option>
                      <option value="hound-ibizan">ibizan hound</option>
                      <option value="hound-walker">walker hound</option>
                      <option value="husky">husky</option>
                      <option value="keeshond">keeshond</option>
                      <option value="kelpie">kelpie</option>
                      <option value="komondor">komondor</option>
                      <option value="kuvasz">kuvasz</option>
                      <option value="labrador">labrador</option>
                      <option value="leonberg">leonberg</option>
                      <option value="lhasa">lhasa</option>
                      <option value="malamute">malamute</option>
                      <option value="malinois">malinois</option>
                      <option value="maltese">maltese</option>
                      <option value="mastiff-bull">bull mastiff</option>
                      <option value="mastiff-english">english mastiff</option>
                      <option value="mastiff-tibetan">tibetan mastiff</option>
                      <option value="mexicanhairless">mexicanhairless</option>
                      <option value="mix">mix</option>
                      <option value="mountain-bernese">bernese mountain</option>
                      <option value="mountain-swiss">swiss mountain</option>
                      <option value="newfoundland">newfoundland</option>
                      <option value="otterhound">otterhound</option>
                      <option value="papillon">papillon</option>
                      <option value="pekinese">pekinese</option>
                      <option value="pembroke">pembroke</option>
                      <option value="pinscher-miniature">miniature pinscher</option>
                      <option value="pointer-german">german pointer</option>
                      <option value="pointer-germanlonghair">germanlonghair pointer</option>
                      <option value="pomeranian">pomeranian</option>
                      <option value="poodle-miniature">miniature poodle</option>
                      <option value="poodle-standard">standard poodle</option>
                      <option value="poodle-toy">toy poodle</option>
                      <option value="pug">pug</option>
                      <option value="puggle">puggle</option>
                      <option value="pyrenees">pyrenees</option>
                      <option value="redbone">redbone</option>
                      <option value="retriever-chesapeake">chesapeake retriever</option>
                      <option value="retriever-curly">curly retriever</option>
                      <option value="retriever-flatcoated">flatcoated retriever</option>
                      <option value="retriever-golden">golden retriever</option>
                      <option value="ridgeback-rhodesian">rhodesian ridgeback</option>
                      <option value="rottweiler">rottweiler</option>
                      <option value="saluki">saluki</option>
                      <option value="samoyed">samoyed</option>
                      <option value="schipperke">schipperke</option>
                      <option value="schnauzer-giant">giant schnauzer</option>
                      <option value="schnauzer-miniature">miniature schnauzer</option>
                      <option value="setter-english">english setter</option>
                      <option value="setter-gordon">gordon setter</option>
                      <option value="setter-irish">irish setter</option>
                      <option value="sheepdog-english">english sheepdog</option>
                      <option value="sheepdog-shetland">shetland sheepdog</option>
                      <option value="shiba">shiba</option>
                      <option value="shihtzu">shihtzu</option>
                      <option value="spaniel-blenheim">blenheim spaniel</option>
                      <option value="spaniel-brittany">brittany spaniel</option>
                      <option value="spaniel-cocker">cocker spaniel</option>
                      <option value="spaniel-irish">irish spaniel</option>
                      <option value="spaniel-japanese">japanese spaniel</option>
                      <option value="spaniel-sussex">sussex spaniel</option>
                      <option value="spaniel-welsh">welsh spaniel</option>
                      <option value="springer-english">english springer</option>
                      <option value="stbernard">stbernard</option>
                      <option value="terrier-american">american terrier</option>
                      <option value="terrier-australian">australian terrier</option>
                      <option value="terrier-bedlington">bedlington terrier</option>
                      <option value="terrier-border">border terrier</option>
                      <option value="terrier-dandie">dandie terrier</option>
                      <option value="terrier-fox">fox terrier</option>
                      <option value="terrier-irish">irish terrier</option>
                      <option value="terrier-kerryblue">kerryblue terrier</option>
                      <option value="terrier-lakeland">lakeland terrier</option>
                      <option value="terrier-norfolk">norfolk terrier</option>
                      <option value="terrier-norwich">norwich terrier</option>
                      <option value="terrier-patterdale">patterdale terrier</option>
                      <option value="terrier-russell">russell terrier</option>
                      <option value="terrier-scottish">scottish terrier</option>
                      <option value="terrier-sealyham">sealyham terrier</option>
                      <option value="terrier-silky">silky terrier</option>
                      <option value="terrier-tibetan">tibetan terrier</option>
                      <option value="terrier-toy">toy terrier</option><option value="terrier-westhighland">westhighland terrier</option>
                      <option value="terrier-wheaten">wheaten terrier</option>
                      <option value="terrier-yorkshire">yorkshire terrier</option>
                      <option value="vizsla">vizsla</option>
                      <option value="weimaraner">weimaraner</option>
                      <option value="whippet">whippet</option>
                      <option value="wolfhound-irish">irish wolfhound</option>
                    </select>
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
               <h6><p id="p12">Vaccines:</p></h6>
            <div class="col-sm-3">
                <select name="vaccinesList" class="form-control" multiple="">
                      <option value="Rabies 1-year" id="p7">Rabies 1-year</option>
                      <option value="Rabies 3-year" id="p8">Rabies 3-year</option>
                      <option value="Distemper" id="p9">Distemper</option>
                      <option value="Parvovirus" id="p10">Parvovirus</option>
                      <option value="Adenovirus,type 1" id="p130">Adenovirus,type 1 (CAV-1, canine hepatitis)</option>
                      <option value="Adenovirus,type 2" id="p1330">Adenovirus,type 2 (CAV-2, kennel cough)</option>
                      <option value="Bordetella bronchiseptica" id="p10">Bordetella bronchiseptica (kennel cough)</option>
                      <option value="Lyme disease" id="p1123">Lyme disease</option>
                      <option value="Canine influenza" id="p12">Canine influenza</option>
                  </select>
              </div>
              <h6><p id="p12">Phone:</p></h6>
              <div class="col-sm-3">
                <input type="text" name="phoneNumber" maxlength="12" class="form-control" placeholder="Phone Number">
              </div>
          </div>
          <div class="row" id="row5">
            <div class="col-sm-12">
              <button type="submit" class="btn btn-success" id="submit" >Index the dog</button>
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

      // Submit form
let selectForm=document.querySelector('#formSelect');

selectForm.addEventListener('submit', submitForm);


function submitForm(event) {
  event.preventDefault();

      let dogName = event.target.dogName.value;
      let dateBirth = event.target.dateBirth.value;
      let years = +event.target.years.value;
      let weight = event.target.weight.value;
      let vaccinesList = event.target.vaccinesList.value;
      let dogsex=event.target.dogsex.value;
      let signs=event.target.signs.value;
      let dogSelect=event.target.dogSelect.value;
      let phoneNumber=event.target.phoneNumber.value;
      let allDataDog={dogName,dateBirth,years,weight,vaccinesList,dogsex,signs,dogSelect,phoneNumber}
      allDataDog.constructor;
      console.log(allDataDog);

      showValues();

      event.target.dogName.value='';
      event.target.dateBirth.value='';
      event.target.years.value='';
      event.target.weight.value='';
      event.target.vaccinesList.value='';
      event.target.dogsex.value='';
      event.target.signs.value='';

      function showValues() {
        let sel=document.querySelector('#ulData');
        sel.innerHTML=
        `
         
           <tr class="table-warning">
            <td class="LestTr">Name:</td>
            <td class="bg-warning">${allDataDog.dogName.toLocaleUpperCase()}</td>
          </tr>
     
          <tr class="table-warning">
            <td class="LestTr">Date of Birth:</td>
            <td class="bg-warning">${allDataDog.dateBirth.toLocaleUpperCase()}</td>
          </tr>
          <tr class="table-warning">
            <td class="LestTr">Years:</td>
            <td class="bg-warning">${allDataDog.years}</td>
          </tr>
          <tr class="table-warning">
            <td class="LestTr" >Weight:</td>
            <td class="bg-warning">${allDataDog.weight}</td>
          </tr>
          <tr class="table-warning">
            <td class="LestTr">Sex: </td>
            <td class="bg-warning">${allDataDog.dogsex}</td>
          </tr>
          <tr class="table-warning">
            <td class="LestTr">Signs: </td>
            <td class="bg-warning">${allDataDog.signs.toLocaleUpperCase()}</td>
          </tr>
          <tr class="table-warning">
            <td class="LestTr">Vaccines: </td>
            <td class="bg-warning">${allDataDog.vaccinesList.toLocaleUpperCase()}</td>
          </tr>
          <tr class="table-warning">
            <td class="LestTr">Dog Breed: </td>
            <td class="bg-warning">${allDataDog.dogSelect.toLocaleUpperCase()}</td>
          </tr>
          <tr class="table-warning">
            <td class="LestTr">Phone Number: </td>
            <td class="bg-warning">${allDataDog.phoneNumber}</td>
          </tr>

        `;

      };

};   // Submitform

    };

  };

export {BtnsPage}



