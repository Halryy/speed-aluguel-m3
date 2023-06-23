


const $descTitle = document.getElementById("description-title")
const descTitleText = [`Porsche 718 RS60 Spyder`, `Lightning McQueen`, `Lorem Ipsum1`, `Lorem Ipsum2`, `Lorem Ipsum3`]

const text = [`Porsche developed the 718 RS 60 Spyder for the 1960 season. This car featured a decisive modification: whereas its predecessor - 
the 718 RSK - had featured a cubic capacity of 1,498 cc, the Carrera en.`, 
`Relâmpago Marquinhos`, 
`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`, 
`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`, 
`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`]
const $descText = document.getElementById("description-text")

const $slideBtns = document.querySelectorAll(".slides > input")


window.addEventListener("DOMContentLoaded", () => {
    let contador = 1;
    
    const qualquernome = setInterval( function(){
        document.getElementById('slide' + contador).checked = true;
        $descText.innerText = text[contador - 1]
        $descTitle.innerText = descTitleText[contador - 1]
        contador++;
        if(contador > 5 ) {
            contador = 1;
        }
    }, 8000 );
    
    $slideBtns.forEach((botoes) =>{
        botoes.addEventListener("click", () =>{
            document.getElementById('slide' + contador).checked = true;
            $descText.innerText = text[contador - 1]
            $descTitle.innerText = descTitleText[contador - 1]
            if (descTitleText.innerText === text[contador - 1]){
                console.log ("asgafdsa")
            }
            // contador++;
            if(contador > 5 ) {
                contador = 1;
            }
            clearInterval (qualquernome)
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
