const menu = document.querySelector(".menu"),
        hamburger = document.querySelector("i"),
        ul = document.querySelector("ul")

        menu.addEventListener("click", () =>{
            ul.classList.toggle('open')
            hamburger.classList.toggle('fa-xmark')
            menu.classList.toggle("xmenu")

            ul.addEventListener("click", () =>{
                ul.classList.remove('open')
                hamburger.classList.remove('fa-xmark')
                menu.classList.remove("xmenu")
            })
        });