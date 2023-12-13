document.addEventListener('DOMContentLoaded', function () {
    var show1 = document.getElementById("show1");
    var show2 = document.getElementById("show2");
    var cel = document.getElementById("cel");
    var fah = document.getElementById("fah");
    var kel = document.getElementById("kel");
    var k2cButton = document.getElementById("k2c");

    show2.style.display = "none"; 
    k2cButton.addEventListener('click', function () {
        if (show1.style.display === "block") {
            
            show1.style.display = "none";
            show2.style.display = "block";
        } else {
            
            show1.style.display = "block";
            show2.style.display = "none";
        }
    });

    cel.addEventListener('input', function () {
        let c = parseFloat(this.value);
        if (!isNaN(c)) {
            let f = (c * 9 / 5) + 32;
            if (!Number.isInteger(f)) {
                f = f.toFixed(4);
            }
            fah.value = f;

            let k = c + 273.15;
            kel.value = k.toFixed(4);
        } else {
            fah.value = "";
            kel.value = "";
        }
    });

    fah.addEventListener('input', function () {
        let f = parseFloat(this.value);

        if (!isNaN(f)) {
            let c = (f - 32) * 5 / 9;
            if (!Number.isInteger(c)) {
                c = c.toFixed(4);
            }
            cel.value = c;

            let k = (f + 459.67) * 5 / 9;
            kel.value = k.toFixed(4);
        } else {
            cel.value = "";
            kel.value = "";
        }
    });

    kel.addEventListener('input', function () {
        let k = parseFloat(this.value);
        if(k<0){
             alert("Kelvin temperature can't be negative");
        }
        else if (!isNaN(k)) {
            let c = k - 273.15;
            if (!Number.isInteger(c)) {
                c = c.toFixed(4);
            }
            cel.value = c;

            let f = (c * 9 / 5) + 32;
            fah.value = f.toFixed(4);
        } else {
            cel.value = "";
            fah.value = "";
        }
    });
});
