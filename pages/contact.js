const $caralho = {
    halry: ["../assets/shinobu.jpg", "halry", "service_srb4y29", "template_kw7wu3e", "oRzc7aDkHGDtQ_Qb3"],
    bruno: ["../assets/dungamolusgo.jpg", "bruno", "service_qydzblp", "template_5452y2a", "nHH2XELvPjQr7O3oX"],
    carlos: ["../assets/zenitsu.jpg", "carlos", "service_srb4y29", "template_bxjtcqs", "oRzc7aDkHGDtQ_Qb3"],
}

let name = "";

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
