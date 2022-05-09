const time = document.getElementById("time")
const day = document.getElementById("days")
const dayImage = document.getElementById("day-night-img")
const mainImage = document.getElementById("main-img")
const morningAudio = new Audio("/sounds/morning.mp3")
const nightAudio = new Audio("/sounds/night.mp3")
const health = document.getElementById("health")
const energy = document.getElementById("energy")
const hunger = document.getElementById("hunger")
const thirst = document.getElementById("thirst")
const fishBackpack = document.getElementById("fish-inventory")
const fishCaughtNotification = document.getElementById("fish-caught")

fishCaughtNotification.style.display = "none"

class Person{
    constructor(name){
        this._name = name;
        this._health = 100;
        this._energy = 100;
        this._hunger = 100;
        this._thirst = 0;
    }
    get name(){
        return this._name;
    }
    get _health(){
        return this._health;
    }
    get _energy(){
        return this._energy;
    }
    get _hunger(){
        return this._hunger;
    }
    get _thirst(){
        return this._thirst;
    }
    set _health(health){
        this.health = 100
    }
    set _energy(energy){
        this.energy = 100
    }
    set _hunger(hunger){
        this.hunger = 100
    }
    set _thirst(thirst){
        this.thirst = 100
    }
    }
    const character = new Person("character")

let daysPassed = 0

let timeClock = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"]

let clockTimer = setInterval(function(){
    time.innerText = timeClock.shift()
    if(time.innerText === "12:00"){
        timeClock.push("13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00")
    } if(time.innerText === "00:00"){
        daysPassed++
        day.innerText = `Day ${daysPassed}`
    }
    switch(time.innerText){
        case "05:00":
            document.body.style.backgroundColor = "lightblue"
            document.body.style.transition = "4s"
            dayImage.src = "/images/day.png"
            mainImage.src = "/images/strandedwithfire.jpg"
            morningAudio.play()
            morningAudio.playbackRate = 0.25
            break;
        case "17:00":
            document.body.style.backgroundColor = "#b098cd"
            document.body.style.transition = "4s"
            break;
        case "20:00":
            document.body.style.backgroundColor = "##2c317b"
            document.body.style.transition = "4s"
            dayImage.src = "/images/night.png"
            break;
            case "22:00":
                document.body.style.backgroundColor = "#191a32"
                document.body.style.transition = "4s"
                mainImage.src = "/images/strandedwithfirenight.jpg"
                nightAudio.play()
                nightAudio.playbackRate = 0.5
        }
    }, 1500)
    
    let healthDecrease = setInterval(function(){
        character.health -= 2
        health.innerText = character.health
        if(character.health === 0){
            clearInterval(healthDecrease)
        }
    }, 1200)

    let energyDecrease = setInterval(function(){
        character.energy -= 10
        energy.innerText = character.energy
        if(character.energy === 0){
            clearInterval(energyDecrease)
        }
    }, 1200)

    let hungerDecrease = setInterval(function(){
        character.hunger -= 5
        hunger.innerText = character.hunger
        if(character.hunger === 0){
            clearInterval(hungerDecrease)
        }
    }, 1200)

    let thirstDecrease = setInterval(function(){
        character.thirst -= 10
        thirst.innerText = character.thirst
        if(character.thirst === 0){
            clearInterval(thirstDecrease)
        }
    }, 1200)
    
    let fishInventory = 0

function fish(){
    if(dayImage.src === "/images/day.png"){
        mainImage.src = "/images/strandedday.JPG"
    } else if(dayImage.src === "/images/day.png"){
        mainImage.src = "/images/strandednight.JPG"
    }
    let fishGenerator = Math.round(Math.random()* 1) + 1
    console.log(fishGenerator)
    switch(fishGenerator){
        case 1:
            console.log("You got a fish!")
            fishInventory++
            fishBackpack.innerText = `Fish x ${fishInventory}`
            fishCaughtNotification.style.display = "initial"
            fishCaughtNotification.classList.add("notification-animation")
            fishNotification()
            break;
        case 2:
            document.getElementById("fish-caught-text").innerText = "No fish biting!"
            fishCaughtNotification.style.display = "initial"
            fishCaughtNotification.classList.add("notification-animation")
            fishNotification()
            break;
    }
    console.log(fishInventory)
}
function eatFish(){
    if(fishInventory > 1){
    character.hunger += 5
    hunger.innerText = character.hunger
    fishInventory --
    fishBackpack.innerText = `Fish x ${fishInventory}`
    } else if(fishInventory === 1){
        console.log("no fish")
        fishInventory = 0
        fishBackpack.innerText = ""
    }
}


function fishNotification(){
    setTimeout(function(){
        fishCaughtNotification.classList.remove("notification-animation")
        
    },5000)
}