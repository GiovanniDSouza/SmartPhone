//criando uma array
var day = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');
var month = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

const showTimeNow = () =>{
   
    //Selecinando a tag de destino
      const clockTag = document.querySelector('time');
      const clockTagg =  document.getElementById('time');
      const clockTaggg =  document.getElementById('timet');
    //Instanciando a classe Date
      let dateNow = new Date();
    
    //pegando os valores desejados
      let hh = dateNow.getHours();
      let mm = dateNow.getMinutes();
      let ss = dateNow.getSeconds();
      
      hh = hh < 10 ? '0'+ hh : hh; 
      mm = mm < 10 ? '0'+ mm : mm; 
                                                                   //concatenado
      var fullDate = day[dateNow.getDay()] + ', '  +  dateNow.getDate()  +  ' de '  +  month[dateNow.getMonth()] ; 

      clockTag.innerText = hh +':'+ mm;
      clockTagg.innerText = hh +':'+ mm;
      clockTaggg.innerText = hh +':'+ mm;
      document.getElementById("date").innerHTML = fullDate;
    }
    
    //executando a funcao a cada 1 segundo
    showTimeNow()
    setInterval(showTimeNow, 1000);

    const controls = document.querySelectorAll(".control");
    const controlss = document.querySelectorAll(".parteB");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const itemms = document.querySelectorAll(".itemm");
const iteemms = document.querySelectorAll(".iteemm");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");

    itemms.forEach((item) => item.classList.remove("current-itemm"));
    itemms[currentItem].classList.add("current-itemm");

    iteemms.forEach((item) => item.classList.remove("current-iteemm"));
    iteemms[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });
    iteemms[currentItem].classList.add("current-iteemm");
  });
});


function logar(){
   
  var senha = document.getElementById('resultado').value;

  //aqui estou passando o nome é a senha do usuario se for este ele aceita se não da erro, usuario criado manualmete
  if(  senha == "1234"){
      console.log('Bem-Vindo');
      location.href = "index.html"; // location.href ele vai carrega o arquivo que estiver ai dentro
  } else{
      alert('Usuario ou senha não encontrados');
      
  }
}