let linkArr=document.links
for(let obj of linkArr){
    console.log('Tömb:',obj.href)
    console.log('URL:',document.URL)
    if(obj.href==document.URL){
        obj.style.color="white"
    }
}