window.addEventListener("DOMContentLoaded", () => {
    const $dropdown = document.querySelector(".dropdownbtn"),
        $sidebar = document.querySelector("aside");

    const anim = [{ width: "15%" }, { width: "5%" }];
    const animMS = 100;
    let clicked = false;
    let animIsRunning = false;


    $dropdown.addEventListener("click", () => {
        
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
        $sidebar.animate(anim, { duration: animMS }).onfinish = () => {
            $sidebar.style.width = "5%";
            animIsRunning = false;
        }
    })

    $sidebar.addEventListener("mouseenter", () => {
        if (animIsRunning === true) return;
        setTimeout(() => {
            if (!clicked) {
                clicked = true
                animIsRunning = true;
                $sidebar.animate(anim, { duration: animMS, direction: "reverse" }).onfinish = () => {
                    $sidebar.style.width = "15%";
                    animIsRunning = false;
                }
            }
        }, 250)
    })
})
