// Function called whenever the user taps on any box
function myFunc() {

    //  Setting DOM to all boxes
    var box1, box2, box3, box4, box5, box6, box7, box8, box9;
    box1 = document.getElementById("box1").value
    box2 = document.getElementById("box2").value
    box3 = document.getElementById("box3").value
    box4 = document.getElementById("box4").value
    box5 = document.getElementById("box5").value
    box6 = document.getElementById("box6").value
    box7 = document.getElementById("box7").value
    box8 = document.getElementById("box8").value
    box9 = document.getElementById("box9").value

    // Displaying which Player's turn it is
    if (player == 1) {
        document.getElementById('player').innerHTML = "Player X It's Your Turn"
    }
    else {
        document.getElementById('player').innerHTML = "Player O It's Your Turn"
    }

    // Checking if Player X won or not, then disabling all the other fields if
    // Player X wins
    if ((box1 == 'x' || box1 == 'X') && (box2 == 'x' || box2 == 'X') && (box3 == 'x' || box3 == 'X')) {
        document.getElementById('player').innerHTML = "Player X Won"
        document.getElementById("box4").disabled = true
        document.getElementById("box5").disabled = true
        document.getElementById("box6").disabled = true
        document.getElementById("box7").disabled = true
        document.getElementById("box8").disabled = true
        document.getElementById("box9").disabled = true
        window.alert('Player X Won')
    }
    else if ((box1 == 'x' || box1 == 'X') && (box4 == 'x' || box4 == 'X') && (box7 == 'x' || box7 == 'X')) {
        document.getElementById('player').innerHTML = "Player X Won"
        document.getElementById("box2").disabled = true
        document.getElementById("box3").disabled = true
        document.getElementById("box5").disabled = true
        document.getElementById("box6").disabled = true
        document.getElementById("box8").disabled = true
        document.getElementById("box9").disabled = true
        window.alert('Player X Won')
    }
    else if ((box7 == 'x' || box7 == 'X') && (box8 == 'x' || box8 == 'X') && (box9 == 'x' || box9 == 'X')) {
        document.getElementById('player').innerHTML = "Player X Won"
        document.getElementById("box1").disabled = true
        document.getElementById("box2").disabled = true
        document.getElementById("box3").disabled = true
        document.getElementById("box4").disabled = true
        document.getElementById("box5").disabled = true
        document.getElementById("box6").disabled = true
        window.alert('Player X Won')
    }
    else if ((box3 == 'x' || box3 == 'X') && (box6 == 'x' || box6 == 'X') && (box9 == 'x' || box9 == 'X')) {
        document.getElementById('player').innerHTML = "Player X Won"
        document.getElementById("box1").disabled = true
        document.getElementById("box2").disabled = true
        document.getElementById("box4").disabled = true
        document.getElementById("box5").disabled = true
        document.getElementById("box7").disabled = true
        document.getElementById("box8").disabled = true
        window.alert('Player X Won')
    }
    else if ((box1 == 'x' || box1 == 'X') && (box5 == 'x' || box5 == 'X') && (box9 == 'x' || box9 == 'X')) {
        document.getElementById('player').innerHTML = "Player X Won"
        document.getElementById("box2").disabled = true
        document.getElementById("box3").disabled = true
        document.getElementById("box4").disabled = true
        document.getElementById("box6").disabled = true
        document.getElementById("box7").disabled = true
        document.getElementById("box8").disabled = true
        window.alert('Player X Won')
    }
    else if ((box3 == 'x' || box3 == 'X') && (box5 == 'x' || box5 == 'X') && (box7 == 'x' || box7 == 'X')) {
        document.getElementById('player').innerHTML = "Player X Won"
        document.getElementById("box1").disabled = true
        document.getElementById("box2").disabled = true
        document.getElementById("box4").disabled = true
        document.getElementById("box6").disabled = true
        document.getElementById("box8").disabled = true
        document.getElementById("box9").disabled = true
        window.alert('Player X Won')
    }
    else if ((box2 == 'x' || box2 == 'X') && (box5 == 'x' || box5 == 'X') && (box8 == 'x' || box8 == 'X')) {
        document.getElementById('player').innerHTML = "Player X Won"
        document.getElementById("box1").disabled = true
        document.getElementById("box3").disabled = true
        document.getElementById("box4").disabled = true
        document.getElementById("box6").disabled = true
        document.getElementById("box7").disabled = true
        document.getElementById("box9").disabled = true
        window.alert('Player X Won')
    }
    else if ((box4 == 'x' || box4 == 'X') && (box5 == 'x' || box5 == 'X') && (box6 == 'x' || box6 == 'X')) {
        document.getElementById('player').innerHTML = "Player X Won"
        document.getElementById("box1").disabled = true
        document.getElementById("box2").disabled = true
        document.getElementById("box3").disabled = true
        document.getElementById("box7").disabled = true
        document.getElementById("box8").disabled = true
        document.getElementById("box9").disabled = true
        window.alert('Player X Won')
    }

    // Checking if Player O won or not, then disabling all the other fields if
    // Player O wins
    if ((box1 == 'o' || box1 == 'O') && (box2 == 'o' || box2 == 'O') && (box3 == 'o' || box3 == 'O')) {
        document.getElementById('player').innerHTML = "Player O Won"
        document.getElementById("box4").disabled = true
        document.getElementById("box5").disabled = true
        document.getElementById("box6").disabled = true
        document.getElementById("box7").disabled = true
        document.getElementById("box8").disabled = true
        document.getElementById("box9").disabled = true
        window.alert('Player O Won')
    }
    else if ((box1 == 'o' || box1 == 'O') && (box4 == 'o' || box4 == 'O') && (box7 == 'o' || box7 == 'O')) {
        document.getElementById('player').innerHTML = "Player O Won"
        document.getElementById("box2").disabled = true
        document.getElementById("box3").disabled = true
        document.getElementById("box5").disabled = true
        document.getElementById("box6").disabled = true
        document.getElementById("box8").disabled = true
        document.getElementById("box9").disabled = true
        window.alert('Player O Won')
    }
    else if ((box7 == 'o' || box7 == 'O') && (box8 == 'o' || box8 == 'O') && (box9 == 'o' || box9 == 'O')) {
        document.getElementById('player').innerHTML = "Player O Won"
        document.getElementById("box1").disabled = true
        document.getElementById("box2").disabled = true
        document.getElementById("box3").disabled = true
        document.getElementById("box4").disabled = true
        document.getElementById("box5").disabled = true
        document.getElementById("box6").disabled = true
        window.alert('Player O Won')
    }
    else if ((box3 == 'o' || box3 == 'O') && (box6 == 'o' || box6 == 'O') && (box9 == 'o' || box9 == 'O')) {
        document.getElementById('player').innerHTML = "Player O Won"
        document.getElementById("box1").disabled = true
        document.getElementById("box2").disabled = true
        document.getElementById("box4").disabled = true
        document.getElementById("box5").disabled = true
        document.getElementById("box7").disabled = true
        document.getElementById("box8").disabled = true
        window.alert('Player O Won')
    }
    else if ((box1 == 'o' || box1 == 'O') && (box5 == 'o' || box5 == 'O') && (box9 == 'o' || box9 == 'O')) {
        document.getElementById('player').innerHTML = "Player O Won"
        document.getElementById("box2").disabled = true
        document.getElementById("box3").disabled = true
        document.getElementById("box4").disabled = true
        document.getElementById("box6").disabled = true
        document.getElementById("box7").disabled = true
        document.getElementById("box8").disabled = true
        window.alert('Player O Won')
    }
    else if ((box3 == 'o' || box3 == 'O') && (box5 == 'o' || box5 == 'O') && (box7 == 'o' || box7 == 'O')) {
        document.getElementById('player').innerHTML = "Player O Won"
        document.getElementById("box1").disabled = true
        document.getElementById("box2").disabled = true
        document.getElementById("box4").disabled = true
        document.getElementById("box6").disabled = true
        document.getElementById("box8").disabled = true
        document.getElementById("box9").disabled = true
        window.alert('Player O Won')
    }
    else if ((box2 == 'o' || box2 == 'O') && (box5 == 'o' || box5 == 'O') && (box8 == 'o' || box8 == 'O')) {
        document.getElementById('player').innerHTML = "Player O Won"
        document.getElementById("box1").disabled = true
        document.getElementById("box3").disabled = true
        document.getElementById("box4").disabled = true
        document.getElementById("box6").disabled = true
        document.getElementById("box7").disabled = true
        document.getElementById("box9").disabled = true
        window.alert('Player O Won')
    }
    else if ((box4 == 'o' || box4 == 'O') && (box5 == 'o' || box5 == 'O') && (box6 == 'o' || box6 == 'O')) {
        document.getElementById('player').innerHTML = "Player O Won"
        document.getElementById("box1").disabled = true
        document.getElementById("box2").disabled = true
        document.getElementById("box3").disabled = true
        document.getElementById("box7").disabled = true
        document.getElementById("box8").disabled = true
        document.getElementById("box9").disabled = true
        window.alert('Player O Won')
    }

    // else if (document.getElementById('player').innerHTML == "Player X Won" || "Player O Won") 

    // Check if the game is a Cat's Game
    else if ((box1 == 'X' || box1 == 'O') && (box2 == 'X' || box2 == 'O') && (box3 == 'X' || box3 == 'O')
        && (box4 == 'X' || box4 == 'O') && (box5 == 'X' || box5 == 'O') && (box6 == 'X' || box6 == 'O')
        && (box7 == 'X' || box7 == 'O') && (box8 == 'X' || box8 == 'O') && (box9 == 'X' || box9 == 'O')) {
            if (!document.getElementById('player').innerHTML == "Player X Won" || "Player O Won") {
                document.getElementById('player').innerHTML = "Cat's Game"
                window.alert("Cat's Game")
        }
    }
}


// Function to reset the game
function myFunc_2() {
    location.reload()
    document.getElementById('box1').value = ''
    document.getElementById('box2').value = ''
    document.getElementById('box3').value = ''
    document.getElementById('box4').value = ''
    document.getElementById('box5').value = ''
    document.getElementById('box6').value = ''
    document.getElementById('box7').value = ''
    document.getElementById('box8').value = ''
    document.getElementById('box9').value = ''
}


// Function to check which player's turn it is and apply the correct value to the box
player = 1
function myFunc_3() {
    if (player == 1) {
        document.getElementById("box1").value = "X"
        document.getElementById("box1").disabled = true
        player = 2
    }
    else {
        document.getElementById("box1").value = "O"
        document.getElementById("box1").disabled = true
        player = 1
    }
}

function myFunc_4() {
    if (player == 1) {
        document.getElementById("box2").value = "X"
        document.getElementById("box2").disabled = true
        player = 2
    }
    else {
        document.getElementById("box2").value = "O"
        document.getElementById("box2").disabled = true
        player = 1
    }
}

function myFunc_5() {
    if (player == 1) {
        document.getElementById("box3").value = "X"
        document.getElementById("box3").disabled = true
        player = 2
    }
    else {
        document.getElementById("box3").value = "O"
        document.getElementById("box3").disabled = true
        player = 1
    }
}

function myFunc_6() {
    if (player == 1) {
        document.getElementById("box4").value = "X"
        document.getElementById("box4").disabled = true
        player = 2
    }
    else {
        document.getElementById("box4").value = "O"
        document.getElementById("box4").disabled = true
        player = 1
    }
}

function myFunc_7() {
    if (player == 1) {
        document.getElementById("box5").value = "X"
        document.getElementById("box5").disabled = true
        player = 2
    }
    else {
        document.getElementById("box5").value = "O"
        document.getElementById("box5").disabled = true
        player = 1
    }
}

function myFunc_8() {
    if (player == 1) {
        document.getElementById("box6").value = "X"
        document.getElementById("box6").disabled = true
        player = 2
    }
    else {
        document.getElementById("box6").value = "O"
        document.getElementById("box6").disabled = true
        player = 1
    }
}

function myFunc_9() {
    if (player == 1) {
        document.getElementById("box7").value = "X"
        document.getElementById("box7").disabled = true
        player = 2
    }
    else {
        document.getElementById("box7").value = "O"
        document.getElementById("box7").disabled = true
        player = 1
    }
}

function myFunc_10() {
    if (player == 1) {
        document.getElementById("box8").value = "X"
        document.getElementById("box8").disabled = true
        player = 2
    }
    else {
        document.getElementById("box8").value = "O"
        document.getElementById("box8").disabled = true
        player = 1
    }
}

function myFunc_11() {
    if (player == 1) {
        document.getElementById("box9").value = "X"
        document.getElementById("box9").disabled = true
        player = 2
    }
    else {
        document.getElementById("box9").value = "O"
        document.getElementById("box9").disabled = true
        player = 1
    }
}