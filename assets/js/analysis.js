var url1 = document.getElementById("url1"); // default url
var prev_url1 = url1.getAttribute('src'); // iframe url src
function stock_button() {
    var stock = document.getElementById('stock').value;
    var new_url1 = prev_url1.concat(stock);
    document.getElementById('url1').setAttribute('src', new_url1);
}