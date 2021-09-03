let dice =  6 //กำหนดค่าลูกเต๋า
function play(round) {// round กำหนดจำนวนรอบ
    for(let count=1;count <= round ;count++){ // กำหนดจำนวนรอบในการเล่น
        player1.roll = rollDice(); //player1 ทอยลูกเต๋า
        player2.roll = rollDice(); //player2 ทอยลูกเต๋า
		console.log( player1.roll,player2.roll)
        console.log("round :"+count);
        if(player1.roll > player2.roll){ //player1 ชนะ
            player1.result = results.WIN
            player2.result = results.LOSE
            console.log(player1);
            console.log(player2);
            console.log(player1.name +":  Win!!")
        }else if(player1.roll === player2.roll){ // เสมอ
            player1.result = results.DRAW
            player2.result = results.DRAW
            console.log(player1);
            console.log(player2);
            console.log("Draw!!")
        }else{                              //player2 ชนะ
            player1.result = results.LOSE
            player2.result = results.WIN
            console.log(player1);
            console.log(player2);
            console.log(player2.name +":  Win!!")
        }
        
    }
}
const results = {   //เก็บค่าผลการแข่งขัน
    WIN: "Win",
    DRAW: "Draw",
    LOSE: "Lose"
}


function rollDice() {   //สุ่มเลขลูกเต๋า
    return  Math.floor( 1 + Math.random() * 6 ); //Math.floor: กำหนดผลลัพธ์ให้เป็นจำนวนเต็ม
}                                                   //Math.random: สุ่มเลขในช่วง 1-6


let player1 = { //เก็บค่าต่างๆของ player1
    name: "Mild", //ชื่อ player1
    roll: 0, //แต้มลูกเต๋า
    result: results //ผลลัพธ์ที่ได้
}
let player2 = { //เก็บค่าต่างๆของ player2
    name: "Mint", //ชื่อ player1
    roll: 0, //แต้มลูกเต๋า
    result: results //ผลลัพธ์ที่ได้
}
// console.log(player1.name)
play(3);
