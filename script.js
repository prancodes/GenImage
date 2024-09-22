let api = "https://picsum.photos/150/200";

async function RandomImg() {
    
    const generateBtnIcon = document.querySelector("#generateBtn i");
    generateBtnIcon.classList.add("fa-spin");

    try{
        let [res1,res2,res3,res4] = await Promise.all([
            fetch(api),
            fetch(api),
            fetch(api),
            fetch(api)])

        document.querySelector("#img1").src = res1.url;
        document.querySelector("#img2").src = res2.url;
        document.querySelector("#img3").src = res3.url;
        document.querySelector("#img4").src = res4.url;

        document.querySelector("#ErrorTab").innerText = "";
    }
    catch(e){
        document.querySelector("#ErrorTab").innerText = "Failed to load images. Please try again.";
    }
    finally{
        generateBtnIcon.classList.remove("fa-spin");
    }
}

document.querySelector("#generateBtn").addEventListener("click", RandomImg);