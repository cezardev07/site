        const form = document.querySelector(".form");
        const search = document.querySelector(".fm-inp");
        const btn = document.querySelector(".btn-search");

        btn.addEventListener("click", function(){
            if (search.value.length > 0) {
                window.location = "https://cezardev07.github.io/" + search.value;
                search.value = "";
            }else {
                form.classList.toggle("actived");
            }
        })