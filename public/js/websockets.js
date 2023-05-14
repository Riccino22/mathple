const socket = io.connect(location.origin, { forceNew: true });
console.log(socket);

let formulary = document.querySelector("#formularyHighScore");
let nickForm = document.querySelector("#nickname");
let scoreDiv = document.querySelector("#score");
let gameZone = document.querySelector("#game");
let lastScoreDiv = document.querySelector("#lastScore");
let err = document.querySelector("#err");
let formFinished = false;

let formOmit = false;

function omitir() {
  gameZone.style.display = "block";
  formulary.style.display = "none";
  err.style.display = "none";
  formOmit = true;
}


function showForm(score) {


  if (score > parseInt(lastScoreDiv.className)) {
    gameZone.style.display = "none";
    formulary.style.display = "block";


    window.addEventListener("submit", e => {


      e.preventDefault();


      if (nickForm.value.length > 5) {
        alert("El nombre no puede exeder los 5 caracteres");
      } else {

        if (socket.connected) {

          formulary.style.display = "none";


          socket.on("prueba1", data => {
          })

          socket.emit("high score", {
            score: score,
            nickname: nickForm.value
          });

          socket.on("last score", data => {

            console.log(data);

            if (!data.lastScore || score > data.lastScore.score) {
              socket.on("show high score", data => {
              });
            }
          })

          formFinished = true;
          document.querySelector("#form").submit();


        } else {

          err.style = `        
            width: 400px;
            height: 30px;
            color: red;
            border-style: solid;
            border-color: red;
            background-color: rgba(255, 0, 0, 0.204);
            border-radius: 5px;
          `;

          err.innerHTML = "Error... Presiona 'omitir' e inténtelo luego";

        }

      }


    });
  }
}