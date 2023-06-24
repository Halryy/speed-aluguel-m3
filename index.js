


const $descTitle = document.getElementById("description-title")
const descTitleText = [`Porsche 718 RS60 Spyder`, `Lightning McQueen`, `Lorem Ipsum1`, `Lorem Ipsum2`, `Lorem Ipsum3`]

const text = 
[`Porsche developed the 718 RS 60 Spyder for the 1960 season. This car featured a decisive modification: whereas its predecessor – the 718 RSK – had featured a cubic capacity of 1,498 cc, the Carrera engine in the new model boasted an increased capacity of 1,587 cc. This was implemented in response to a technical rule change by the FIA, which had raised the cubic capacity limit from 1,500 to 1,600 cc for the 1960 racing season.`, 
`Relâmpago Marquinhos`, 
`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`, 
`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`, 
`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`]
const $descText = document.getElementById("description-text")

const $caralho = {
    halry: ["../assets/shinobu.jpg", "halry", "service_srb4y29", "template_kw7wu3e", "oRzc7aDkHGDtQ_Qb3"],
    bruno: ["../assets/dungamolusgo.jpg", "bruno", "service_qydzblp", "template_qt4kg39", "nHH2XELvPjQr7O3oX"],
    carlos: ["../assets/zenitsu.jpg", "carlos", "service_srb4y29", "template_bxjtcqs", "oRzc7aDkHGDtQ_Qb3"],
}

let name = ""



window.addEventListener("DOMContentLoaded", () => {
    const $form = document.querySelector("form")
    $form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log($caralho[name][4]);
        emailjs.init($caralho[name][4]);
        emailjs.sendForm($caralho[name][2], $caralho[name][3], this).then(
            function () {
              console.log("SUCCESS!");
              alert("Sucesso!");
            },
            function (error) {
              console.log("FAILED...", error);
              alert("Falha/erro");
            }
          );
    })

    const $divText = document.querySelector("dialog > div > p")
    const $img = document.querySelector("dialog > div > img")

    const $contactbtn = document.querySelectorAll("#contact-selection > div > button")
    const $dialog = document.querySelector("dialog")

    $contactbtn.forEach((botao) => {
        botao.addEventListener("click", (event) =>{
            name = event.target.parentElement.id
            $divText.innerText = $caralho[name][1]
            $img.src = $caralho[name][0]
            $dialog.showModal()
            console.log(event.target.parentElement)
        })
    })

    const $slideBtns = document.querySelectorAll(".slides > input")
    let contador = 0;

    function reiniciarSetInterval(callback, tempo){

        let intervalID;
      
        function iniciarSetInterval() {
          intervalID = setInterval(callback, tempo);
        }
      
        function pararSetInterval() {
          clearInterval(intervalID);
        }
      
        // Iniciar o setInterval
        iniciarSetInterval();
      
        // Retornar as funções para uso posterior
        return {
          iniciar: iniciarSetInterval,
          parar: pararSetInterval
        };
      }
      
      // Exemplo de uso:
      const intervalo = reiniciarSetInterval( function(){
          if(contador > 4 ) {
              contador = 0;
          }
        document.getElementById('slide' + (contador + 1)).checked = true;
        $descText.innerText = text[contador]
        $descTitle.innerText = descTitleText[contador]
        contador++;
        console.log(contador)
    }, 7000 );

    // intervalo.iniciar()

    $slideBtns.forEach((botoes, i) =>{
        botoes.addEventListener("click", () =>{
            contador = i;
            document.getElementById('slide' + (contador + 1)).checked = true;
            $descText.innerText = text[contador]
            $descTitle.innerText = descTitleText[contador]
            if(contador > 5 ) {
                contador = 1;
            }
            intervalo.parar()
            intervalo.iniciar()
        })
    }) 

    const $dropdown = document.querySelector(".dropdownbtn"),
    $sidebar = document.querySelector("aside");

    const $sidebtns = document.querySelectorAll(".dropdowncontent > a");
    
    const anim = [{ width: "15%" }, { width: "5%" }];
    const animMS = 100;
    let clicked = false;
    let animIsRunning = false;


        $dropdown.addEventListener("click", () => {
            $sidebtns.forEach((bts) => {
                if (!clicked){
                    bts.style.marginLeft = "50%"
                }
                else {
                    bts.style.marginLeft = "-200%"
                }
            })

        
    

        
        if (!clicked) {
            clicked = true;
            animIsRunning = true;
            $sidebar.animate(anim, { duration: animMS, direction: "reverse" }).onfinish = () => {
                animIsRunning = false;
            }
            $sidebar.style.width = "15%";
            
        }
        else {
            clicked = false;
            $sidebar.animate(anim, animMS).onfinish = () => {
                animIsRunning = false;
            }
            $sidebar.style.width = "5%";
        }
        })

    $sidebar.addEventListener("mouseleave", () => {
        if (animIsRunning === true) return;
        clicked = false;
        animIsRunning = true;
        $sidebtns.forEach(bts => {
            bts.style.marginLeft = "-200%"
        })
        $sidebar.animate(anim, { duration: animMS }).onfinish = () => {
            $sidebar.style.width = "5%";
            animIsRunning = false;
        }
    })

    $sidebar.addEventListener("mouseenter", () => {
        if (animIsRunning === true) return;
            if (!clicked) {
                clicked = true
                animIsRunning = true;
                $sidebtns.forEach(bts => {
                    bts.style.marginLeft = "50%"
                })
                $sidebar.animate(anim, { duration: animMS, direction: "reverse" }).onfinish = () => {
                    $sidebar.style.width = "15%";
                    animIsRunning = false;
                }
            }
    })

    $sidebtns.forEach(($sidebtn) => {
        $sidebtn.addEventListener("mouseenter", (event) => {
                $sidebtn.children[0].classList.add("fa-fade")
        })
        
        $sidebtn.addEventListener("mouseleave", (event) => {
            $sidebtn.children[0].classList.remove("fa-fade")
    })
    })
})
