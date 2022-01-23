

const anchorTag = document.querySelectorAll("a");
for(tag of anchorTag){
    const url = tag.getAttribute("href");
    const idOfLink = tag.getAttribute("id");
    const success=false
    checkLinks(url).then((res)=>{
        if(res===200){
            const aTag=document.getElementById(idOfLink)
            aTag.insertAdjacentHTML("afterend", "   This Link is working.");


        }else{
            const aTag=document.getElementById(idOfLink)
            aTag.insertAdjacentHTML("afterend", "   This Link is not working.");


        }

    })


}


async function checkLinks(link) {
    var myRequest = new Request(link);
    const response = await fetch(myRequest, {
      mode: "no-cors",
    });
    const statusOfLink = await response.status;
    return statusOfLink

}
