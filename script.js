
"use strict";

document.getElementById("passInp1").addEventListener('input', function() {
    document.getElementById("passInp2").value = document.getElementById("passInp1").value;
})