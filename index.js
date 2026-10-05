const generatebtn=document.getElementById('btn')
const button1=document.getElementById('btn1')
const button2=document.getElementById('btn2')

generatebtn.addEventListener('click',function(){
    let char=''
    const characters=['t','$','9','H','%','3','j','L','/','_','O','@','!']
    for (i=0;i<characters.length;i++){
        let rand=Math.floor(Math.random()*characters.length)
        char+=characters[rand]
    }
    button1.textContent=char

    let char2=''
    
    const characters2=['t','$','9','H','%','3','j','L','/','_','O','@','!']
    for (i=0;i<characters2.length;i++){
        let rand=Math.floor(Math.random()*characters2.length)
        char2+=characters2[rand]
        
    }
    
    button2.textContent=char2
})

