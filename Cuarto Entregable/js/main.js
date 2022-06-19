function convert(){
    var cop = parseFloat(document.getElementById("cop").value);
    let result = cop * 0.00026;
    document.getElementById('dollar').value = result.toFixed(2);
    

}