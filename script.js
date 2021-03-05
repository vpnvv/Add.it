function buttonClick(num) {
    console.log('number', num);
    document.getElementById('screen').value+=num;
    
}

function clearDisplay() {
    document.getElementById('screen').value='';
    
}

function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}

function equelto() {
    var text = document.getElementById('screen').value;
    console.log('textttt', text);
    var result = eval(text)
    document.getElementById('screen').value = result;
    
}