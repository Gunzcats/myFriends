const numberOfFriends = Math.floor(Math.random() * 9) + 1;
window.addEventListener('load',function(){
    let numberOfFriendDOM = document.querySelector("#numberOfFriend")
    numberOfFriendDOM.innerHTML =numberOfFriends
    console.log("onload")
})

//all about friend detail
let friends = []
let totalage = 0
let friendDetail = ""
let numberOfFriendNow = 0
let sentFriendDetail = () => {
    let nicknameDOM = document.querySelector('input[name =nickName]')
    let ageDOM = document.querySelector('input[name =age]')
    if(!nicknameDOM.value||!ageDOM.value) alert("กรุณาใส่ชื่อเพื่อนให้เสร็จ")
    else{
    numberOfFriendNow +=1
    totalage += parseInt(ageDOM.value)
    friendDetail += numberOfFriendNow+". "+nicknameDOM.value+" อายุ "+ageDOM.value
    console.log(friendDetail)
    let yourFriendDetailDOM = document.querySelector('#yourfrienddetail')
    yourFriendDetailDOM.innerHTML = friendDetail+='<br>'
    if(numberOfFriendNow == numberOfFriends){
        let buttonFriendDetailDOM = document.querySelector("#buttonFriendDetail")
        buttonFriendDetailDOM.disabled = true
    }
    friends.push({ name: nicknameDOM.value, age: parseInt(ageDOM.value) })
    nicknameDOM.value = ""
    ageDOM.value = ""
}
}

//all about button
let sentAllFriends = (event) => {
    if(numberOfFriendNow < numberOfFriends) alert("กรุณาใส่ชื่อเพื่อนให้ครบ")
    else {
        let buttonDOM = event.target
        buttonDOM.style.visibility = "hidden";
        let selectFunctionDOM = document.querySelector('#selectFunction')
        selectFunctionDOM.style.visibility = "visible";
}
}

let totalAge = () => {
    let functionResultDOM = document.querySelector("#functionResult")
    functionResultDOM.innerHTML = "<br>อายุรวมเพื่อนทั้งหมด "+ totalage
}
let meanAge = () => {
    let functionResultDOM = document.querySelector("#functionResult")
    functionResultDOM.innerHTML = "<br>อายุเฉลี่ยเพื่อนทั้งหมด "+ totalage/numberOfFriends
}
let minAge = () => {
    let functionResultDOM = document.querySelector("#functionResult")
    let minAge = Infinity;
    let youngestFriends = [];
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i]; 

        if (friend.age < minAge) {
   
            minAge = friend.age;

            youngestFriends = [];

            youngestFriends.push(friend);
        } else if (friend.age === minAge) {

            youngestFriends.push(friend);
        }
    }
    
    if (youngestFriends.length === 1) {
        functionResultDOM.innerHTML = "เพื่อนที่มีอายุน้อยที่สุดคือ <br>ชื่อ" + youngestFriends[0].name + " อายุ " + youngestFriends[0].age
    } else {
        textTmp = "เพื่อนที่มีอายุน้อยที่สุดคือ " 
        for (let i = 0; i < youngestFriends.length; i++) {
            textTmp += "<br>ชื่อ " + youngestFriends[i].name + " อายุ " + youngestFriends[i].age
        }
        functionResultDOM.innerHTML = textTmp
    }
}
let maxAge = () => {
    let functionResultDOM = document.querySelector("#functionResult")
    let maxAge = -1000;
    let oldestFriends = [];
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i]; 

        if (friend.age > maxAge) {
   
            maxAge = friend.age;

            oldestFriends = [];

            oldestFriends.push(friend);
        } else if (friend.age === maxAge) {

            oldestFriends.push(friend);
        }
    }
    
    if (oldestFriends.length === 1) {
        functionResultDOM.innerHTML = "เพื่อนที่มีอายุมากที่สุดคือ <br>ชื่อ" + oldestFriends[0].name + " อายุ " + oldestFriends[0].age
    } else {
        textTmp = "เพื่อนที่มีอายุมากสุดคือ " 
        for (let i = 0; i < oldestFriends.length; i++) {
            textTmp += "<br>ชื่อ " + oldestFriends[i].name + " อายุ " + oldestFriends[i].age
        }
        functionResultDOM.innerHTML = textTmp
    }
   
}
function reloadPage() {
    location.reload();
}
function somethingOnMe(event){
    let reloadButton = event.target
    reloadButton.style.backgroundColor = "red"
}
