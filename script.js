function buttonClick(num) {
    console.log('number', num);
    document.getElementById('screen').value+=num;
    var audio = new Audio( 
    'sounds/num.mp3'); 
    audio.play(); 
                    
    
}

function clearDisplay() {
    document.getElementById('screen').value='';
    var audio = new Audio( 'sounds/equ.mp3'); 
    audio.play(); 

    
}

function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
    var audio = new Audio( 'sounds/equ.mp3'); 
    audio.play(); 
}

function equelto() {
    var text = document.getElementById('screen').value;
    console.log('textttt', text);
    var result = eval(text)
    document.getElementById('screen').value = result;
    var audio = new Audio( 'sounds/equ.mp3'); 
    audio.play(); 
                       

    
}