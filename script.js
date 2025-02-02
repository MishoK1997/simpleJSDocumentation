
// Add and set copy cplipboard functionality 

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll("pre").forEach(pre=>{
        let button = document.createElement("button");
        button.innerText ="Copy";
        button.classList.add("copy-btn");

        // pre.style.position = "relative";
        pre.appendChild(button)


        // Copy functionality

        button.addEventListener("click", ()=>{
            let code = pre.querySelector("code").innerText;

            navigator.clipboard.writeText(code).then(()=>{
                button.innerText = "Copied!";
                button.classList.add("copied")

                setTimeout(()=> {
                    button.innerText = "Copy";
                    button.classList.remove("copied")
                }, 2000)
            }).catch(err=> console.error(err))
        })
    })
})

