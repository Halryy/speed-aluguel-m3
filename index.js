


const descTitleText = [`Porsche 718 RS60 Spyder`, `Lightning McQueen`, `Lorem Ipsum1`, `Lorem Ipsum2`, `Lorem Ipsum3`]
const $descTitle = document.getElementById("description-title")

const $descPrices  = [`Rent now - 500,00 $`, `Rent now - 325,00 $`, `Rent now - 210,00 $`, `Rent now - 150,00 $`, `Rent now - 200,00 $`]
const $descBtn = document.getElementById("description-btn")

const text = 
[`Porsche developed the 718 RS 60 Spyder for the 1960 season. This car featured a decisive modification: whereas its predecessor – the 718 RSK – had featured a cubic capacity of 1,498 cc, the Carrera engine in the new model boasted an increased capacity of 1,587 cc. This was implemented in response to a technical rule change by the FIA, which had raised the cubic capacity limit from 1,500 to 1,600 cc for the 1960 racing season.`, 
`Relâmpago Marquinhos`, 
`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`, 
`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`, 
`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`]
const $descText = document.getElementById("description-text")

let name = "";



window.addEventListener("DOMContentLoaded", () => {
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

        iniciarSetInterval();

        return {
          iniciar: iniciarSetInterval,
          parar: pararSetInterval
        };
      }
      
      
      const intervalo = reiniciarSetInterval( function(){
          if(contador > 4 ) {
              contador = 0;
          }
        document.getElementById('slide' + (contador + 1)).checked = true;
        $descText.innerText = text[contador]
        $descTitle.innerText = descTitleText[contador]
        $descBtn.innerText = $descPrices[contador]
        contador++;
        console.log(contador)
    }, 7000 );

    $slideBtns.forEach((botoes, i) =>{
        botoes.addEventListener("click", () =>{
            contador = i;
            document.getElementById('slide' + (contador + 1)).checked = true;
            $descText.innerText = text[contador]
            $descTitle.innerText = descTitleText[contador]
            $descBtn.innerText = $descPrices[contador]
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
