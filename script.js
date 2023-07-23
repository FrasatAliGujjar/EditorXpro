// Size 
function plus() {

    let w = document.getElementById('edit_img').width;
    w = w + 10;
    document.getElementById('edit_img').width = w;

    let h = document.getElementById('edit_img').height;
    h = h + 10;
    document.getElementById('edit_img').height = h;
}

function minus() {

    let w = document.getElementById('edit_img').width;
    w = w - 10;
    document.getElementById('edit_img').width = w;

    let h = document.getElementById('edit_img').height;
    h = h - 10;
    document.getElementById('edit_img').height = h;
}

function s1080() {

    document.getElementById('edit_img').width = '1920';
    document.getElementById('edit_img').height = '1080';

}
function s720() {

    document.getElementById('edit_img').width = '1080';
    document.getElementById('edit_img').height = '720';

}
function s480() {

    document.getElementById('edit_img').width = '854';
    document.getElementById('edit_img').height = '480';

}
function s360() {

    document.getElementById('edit_img').width = '480';
    document.getElementById('edit_img').height = '360';

}
function s11() {

    document.getElementById('edit_img').width = '250';
    document.getElementById('edit_img').height = '250';

}

// =========================================================== 

// Dimension 
function apply() {
    let he = document.getElementById('height').value;
    let wi = document.getElementById('width').value;

    document.getElementById('edit_img').height = he;
    document.getElementById('edit_img').width = wi;

}


// =========================================================== 
// Opacity 
let o = 1;
function Oplus() {


    o = o + 0.1;

    document.getElementById('edit_img').style.opacity = o;
}

function Ominus() {

    o = o - 0.1;

    document.getElementById('edit_img').style.opacity = o;
}




// =========================================================== 
// Border Radius 
let Br = 1;
function Brplus() {


    Br = Br + 5;

    document.getElementById('edit_img').style.borderRadius = Br + 'px';
}

function Brminus() {


    Br = Br - 5;

    document.getElementById('edit_img').style.borderRadius = Br + 'px';
}


// =========================================================== 
// Brightness level

let Bl = 100;
function Blplus() {

    Bl = Bl + 5;

    document.getElementById("edit_img").style.filter = "brightness(" + Bl + "%)";
    // document.getElementById("edit_img").style.filter = "contrast(50%)";
}

function Blminus() {

    Bl = Bl - 5;

    document.getElementById("edit_img").style.filter = "brightness(" + Bl + "%)";
    // document.getElementById("edit_img").style.filter = "contrast(50%)";

}








// =========================================================== 
// Border
let = a2 = 0;

function Bplus() {

    a2 = a2 + 1;

    var color = document.getElementById('B-color').value;

    document.getElementById('edit_img').style.borderWidth = a2 + "px";
    document.getElementById('edit_img').style.borderColor = color;
    document.getElementById('edit_img').style.borderStyle = 'solid';

}

function Bminus() {

    a2 = a2 - 1;

    var color = document.getElementById('B-color').value;

    document.getElementById('edit_img').style.borderWidth = a2 + "px";
    document.getElementById('edit_img').style.borderColor = color;
    document.getElementById('edit_img').style.borderStyle = 'solid';

}


// =========================================================== 
// Contrast level

let Cl = 100;
function Clplus() {

    Cl = Cl + 5;

    document.getElementById("edit_img").style.filter = "contrast(" + Cl + "%)";
}

function Clminus() {

    Cl = Cl - 20;

    document.getElementById("edit_img").style.filter = "contrast(" + Cl + "%)";

}

// =========================================================== 
// B & W level

let BW = 0;
function BWplus() {

    BW = BW + 5;

    document.getElementById("edit_img").style.filter = "grayscale(" + BW + "%)";
}

function BWminus() {

    BW = BW - 20;

    document.getElementById("edit_img").style.filter = "grayscale(" + BW + "%)";

}