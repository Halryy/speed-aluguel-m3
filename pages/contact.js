const $caralho = {
    halry: ["../assets/shinobu.jpg", "Halry", "service_srb4y29", "template_kw7wu3e", "oRzc7aDkHGDtQ_Qb3"],
    bruno: ["../assets/dungamolusgo.jpg", "Bruno", "service_qydzblp", "template_5452y2a", "nHH2XELvPjQr7O3oX"],
    carlos: ["../assets/zenitsu.jpg", "Carlos", "service_srb4y29", "template_bxjtcqs", "oRzc7aDkHGDtQ_Qb3"],
}

let personName = "";

window.addEventListener("DOMContentLoaded", () => {
    const $form = document.querySelector("form")
    $form.addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.init($caralho[personName][4]);
        emailjs.sendForm($caralho[personName][2], $caralho[personName][3], this).then(
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

    const $sidebar = document.querySelector("aside");
    const $dropdown = document.querySelector(".dropdowncontent")
    const $dropdownBtn = document.querySelector(".dropdownbtn")
    const $sidebtns = document.querySelectorAll(".dropdowncontent > a");
    const windowWidth = window.screen.width;

    let click = false;

    $dropdownBtn.addEventListener("click", () => {
        if (!click) {
            click = true
            if (windowWidth <= 480) {
                $sidebar.style.width = '55%';
            }
            else {
                $sidebar.classList.add('open');
            }
            $dropdown.classList.add('openDropDown');
            $sidebtns.forEach((bts) => {
                bts.classList.add('openSideBarIcons');
            })
        }
        else {
            click = false
            $sidebar.classList.remove('open');
            $dropdown.classList.remove('openDropDown');
            $sidebtns.forEach((bts) => {
                bts.classList.remove('openSideBarIcons');
            })
        }
    })
    

    const $divText = document.querySelector("dialog > div > p")
    const $img = document.querySelector("dialog > div > img")

    const $contactbtn = document.querySelectorAll("#contact-selection > div > button")
    const $dialog = document.querySelector("dialog")

    $contactbtn.forEach((botao) => {
        botao.addEventListener("click", (event) =>{
            personName = event.target.parentElement.id
            $divText.innerText = $caralho[personName][1]
            $img.src = $caralho[personName][0]
            $dialog.showModal()
        })
    })
})