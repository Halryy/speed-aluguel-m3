


const descTitleText = [`Porsche 718 RS60 Spyder`, `Lightning McQueen`, `Lorem Ipsum1`, `Lorem Ipsum2`, `Lorem Ipsum3`]
const $descTitle = document.getElementById("description-title")

const $descPrices = [`Rent now - 500,00 $`, `Rent now - 325,00 $`, `Rent now - 210,00 $`, `Rent now - 150,00 $`, `Rent now - 200,00 $`]
const $descBtn = document.getElementById("description-btn")

const text =
    [`Porsche developed the 718 RS 60 Spyder for the 1960 season. This car featured a decisive modification: whereas its predecessor – the 718 RSK – had featured a cubic capacity of 1,498 cc, the Carrera engine in the new model boasted an increased capacity of 1,587 cc. This was implemented in response to a technical rule change by the FIA, which had raised the cubic capacity limit from 1,500 to 1,600 cc for the 1960 racing season.`,
        `Relâmpago Marquinhos`,
        `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
        `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
        `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`]
const $descText = document.getElementById("description-text")

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = 4 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > 4) { slideIndex = 0 }
    $descText.innerText = text[slideIndex]
    $descTitle.innerText = descTitleText[slideIndex]
    $descBtn.innerText = $descPrices[slideIndex]
    slides[slideIndex].style.display = "block";
}
window.addEventListener("DOMContentLoaded", () => {

    const $slideBtns = document.querySelectorAll(".slides > input")
    let contador = 0;

    $slideBtns.forEach((botoes, i) => {
        botoes.addEventListener("click", () => {
            contador = i;
            document.getElementById('slide' + (contador + 1)).checked = true;
            $descText.innerText = text[contador]
            $descTitle.innerText = descTitleText[contador]
            $descBtn.innerText = $descPrices[contador]
            if (contador > 5) {
                contador = 1;
            }
            intervalo.parar()
            intervalo.iniciar()
        })
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
                $sidebar.style.width = '56%';
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
})
