let four = document.getElementById('four');
let header = document.getElementById('header');
let menuIcon = document.getElementById('menuIcon');
let onTop = document.getElementById('onTop');

const arr = [
    {
        icon: 'icon-icon',
        text: "Keep track of stadiums that you have visited. Find out how many stadiums you've been to across the leagues."
    }, {
        icon: 'icon-medal',
        text: "Earn Badges and rewards for each group of stadiums you visit. Compare your numbers on our leaderboard!"
    }, {
        icon: 'icon-massage',
        text: "Leave reviews and hints and tips for fellow users! Read our own guides to make the best of your trip."
    }, {
        icon: 'icon-icon',
        text: "Discover new stadiums across multiple leagues and sports. Find out the latest news on new developments for your clubs!"
    }, 
]

arr.map( element =>{

    let fourContent = document.createElement('div')
    fourContent.className = 'fourContent'
    four.appendChild(fourContent)

    let icon = document.createElement('div')
    icon.className = 'icon'
    icon.classList.add(element.icon)
    fourContent.appendChild(icon)

    let text = document.createElement('p')
    text.className = 'iconText'
    text.innerText = element.text
    fourContent.appendChild(text)
})


let isMobileHeader = false;

menuIcon.addEventListener('click',()=>{
    isMobileHeader = !isMobileHeader
    if(isMobileHeader){
        header.classList.remove('header');
        header.classList.add('headerMobile')
        onTop.style.marginTop = 0
    }else{
        onTop.style.marginTop = 80 + 'px'
        header.classList.remove('headerMobile');
        header.classList.add('header')
    }
    
})