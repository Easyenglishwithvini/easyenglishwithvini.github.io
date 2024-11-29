function displayQRCode(data) {
    var qrcode = new QRCode("qrcode", {width: 160, height: 160});
    qrcode.makeCode(data);
    document.getElementById('qrcode').classList.remove('hidden');
    window.localStorage.removeItem('levelTestScore');
    document.querySelector('.levels-message p').innerHTML += '<br>You can share the screenshot of the above QR code with Vini at easyenglishwithvini@gmail.com';
}

var score = window.localStorage.getItem('levelTestScore');
if (score != null) {
    displayQRCode(score);
}