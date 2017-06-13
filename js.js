var punter = 0;
var imatgesdissenys1;
var imatgesdissenys2;
var imatgesdissenys3;
var imatgesdissenys4;
var imatgesdissenys5;
var botocanvi1;
var botocanvi2;
var botocanvi3;
var botocanvi4;
var botocanvi5;
var modelsfab;
var animacio2d;
var animacio3d;
var renderitzats;
var unity2d;

window.onload = function(){
    


document.getElementById("botocanvi").onclick = function () {
        if (punter == 0) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/bamboo_forest_nit300pp.gif";
        }
        else if (punter == 1) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/dissenyjoc.gif";
        }
        else if (punter == 2) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/dissenyjoc2.gif";
        }
        else if (punter == 3) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/normalform11.gif";
        }
        else if (punter == 4) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/normalform2.gif";
        }
        else if (punter == 5) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/demonform21.gif";
        }
        else if (punter == 6) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/recoloreados.gif";
        }
        else if (punter == 7) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/tauletadibuix.gif";
        }
        else if (punter == 8) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/Untitled1.gif";
        }
        else if (punter == 9) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/personatgefinalJPG1.gif";
        }
        else if (punter == 10) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/personatgefinalfons5.gif";
        }
        else if (punter == 11) {
            document.getElementById('imatgesdissenys1').src = "media/2D/Imatges/Dissenys/bamboo_forest_dia_300pp.gif";
            punter = -1;
        }
        punter++;
    }
    /*
    document.getElementById("botocanvi2").onclick = function ()
    {

        
        punter--;
    }
    */
document.getElementById("botocanvi2").onclick = function () {
        if (punter == 0) {
            document.getElementById('imatgesdissenys2').src = "media/3D/Imatges/Illuminacio/dia1.gif";
        }
        else if (punter == 1) {
            document.getElementById('imatgesdissenys2').src = "media/3D/Imatges/Illuminacio/foto1.gif";
        }
        else if (punter == 2) {
            document.getElementById('imatgesdissenys2').src = "media/3D/Imatges/Illuminacio/foto2.gif";
        }
        else if (punter == 3) {
            document.getElementById('imatgesdissenys2').src = "media/3D/Imatges/Illuminacio/foto3.gif";
        }
        else if (punter == 4) {
            document.getElementById('imatgesdissenys2').src = "media/3D/Imatges/Illuminacio/imatgefinallamp.gif";
        }
        else if (punter == 5) {
            document.getElementById('imatgesdissenys2').src = "media/3D/Imatges/Illuminacio/nit1.gif";
        }
        else if (punter == 6) {
            document.getElementById('imatgesdissenys2').src = "media/3D/Imatges/Illuminacio/nitfinal.gif";
        }
        else if (punter == 7) {
            document.getElementById('imatgesdissenys2').src = "media/3D/Imatges/Illuminacio/nitfinal2.gif";
        }
        else if (punter == 8) {
            document.getElementById('imatgesdissenys2').src = "media/3D/Imatges/Illuminacio/nitfinal3.gif";
            punter = -1;
        }
        punter++;
    }
    /*textures*/
document.getElementById("botocanvi3").onclick = function () {
        if (punter == 0) {
            document.getElementById('imatgesdissenys3').src = "media/3D/Imatges/Textures/blody-helmet.gif";
        }
        else if (punter == 1) {
            document.getElementById('imatgesdissenys3').src = "media/3D/Imatges/Textures/blody-helmet2.gif";
        }
        else if (punter == 2) {
            document.getElementById('imatgesdissenys3').src = "media/3D/Imatges/Textures/cascorenderbo1.gif";
        }
        else if (punter == 3) {
            document.getElementById('imatgesdissenys3').src = "media/3D/Imatges/Textures/cascorenderbo2.gif";
        }
        else if (punter == 4) {
            document.getElementById('imatgesdissenys3').src = "media/3D/Imatges//Textures/texturalinx.gif";
        }
        else if (punter == 5) {
            document.getElementById('imatgesdissenys3').src = "media/3D/Imatges/Textures/linx2.gif";
        }
        else if (punter == 6) {
            document.getElementById('imatgesdissenys3').src = "media/3D/Imatges/Textures/linx3.gif";
        }
        else if (punter == 7) {
            document.getElementById('imatgesdissenys3').src = "media/3D/Imatges/Textures/linx1.gif";
            punter = -1;
        }
        punter++;
    }
    /*fotomontatges*/
document.getElementById("botocanvi4").onclick = function () {
        if (punter == 0) {
            document.getElementById('imatgesdissenys4').src = "media/2D/Imatges/Fotomontatges/fotomuntatge.gif";
        }
        else if (punter == 1) {
            document.getElementById('imatgesdissenys4').src = "media/2D/Imatges/Fotomontatges/graffiti.gif";
        }
        else if (punter == 2) {
            document.getElementById('imatgesdissenys4').src = "media/2D/Imatges/Fotomontatges/retrat.gif";
        }
        else if (punter == 3) {
            document.getElementById('imatgesdissenys4').src = "media/2D/Imatges/Fotomontatges/retrat2.gif";
            punter = -1;
        }
        punter++;
    }
    /*art*/
document.getElementById("botocanvi5").onclick = function () {
        if (punter == 0) {
            document.getElementById('imatgesdissenys5').src = "media/2D/Imatges/art/kaneki.gif";
        }
        else if (punter == 1) {
            document.getElementById('imatgesdissenys5').src = "media/2D/Imatges/art/Gaara.gif";
        }
        else if (punter == 2) {
            document.getElementById('imatgesdissenys5').src = "media/2D/Imatges/art/invisiblegirlfinal.gif";
        }
        else if (punter == 3) {
            document.getElementById('imatgesdissenys5').src = "media/2D/Imatges/art/kuma2.gif";
        }
        else if (punter == 4) {
            document.getElementById('imatgesdissenys5').src = "media/2D/Imatges/art/Kyubey.gif";
        }
        else if (punter == 5) {
            document.getElementById('imatgesdissenys5').src = "media/2D/Imatges/art/Mew2.gif";
        }
        else if (punter == 6) {
            document.getElementById('imatgesdissenys5').src = "media/2D/Imatges/art/slendermanfinal.gif";
            punter = -1;
        }
        punter++;
    }

    
}

 /*
    function amagar() {
        document.getElementById('imatgesdissenys1').style.display = 'none';
        document.getElementById('imatgesdissenys2').style.display = 'none';
        document.getElementById('imatgesdissenys3').style.display = 'none';
        document.getElementById('imatgesdissenys4').style.display = 'none';
        document.getElementById('imatgesdissenys5').style.display = 'none';
        document.getElementById('botocanvi').style.display = 'none';
        document.getElementById('botocanvi2').style.display = 'none';
        document.getElementById('botocanvi3').style.display = 'none';
        document.getElementById('botocanvi4').style.display = 'none';
        document.getElementById('botocanvi5').style.display = 'none';
         document.getElementById('animacio2d').style.display = 'none';
         document.getElementById('animacio3d').style.display = 'none';
        document.getElementById('renderitzats').style.display = 'none';
    }*/
 
function escollir(pestanya) {
    /*imatgedisenys1*/
    if (pestanya == 'imatge2') {
        document.getElementById("imatgesdissenys1").style.display = "none";
        document.getElementById("imatgesdissenys2").style.display = 'none';
        document.getElementById("imatgesdissenys3").style.display = 'none';
        document.getElementById("imatgesdissenys4").style.display = 'none';
        document.getElementById("imatgesdissenys5").style.display = 'none';
        document.getElementById("botocanvi").style.display = 'none';
        document.getElementById("botocanvi2").style.display = 'none';
        document.getElementById("botocanvi3").style.display = 'none';
        document.getElementById("botocanvi4").style.display = 'none';
        document.getElementById("botocanvi5").style.display = 'none';
        document.getElementById("modelsfab").style.display = 'block';
        document.getElementById('animacio2d').style.display = 'none';
        document.getElementById('animacio3d').style.display = 'none';
        document.getElementById('renderitzats').style.display = 'none';
         document.getElementById('unity2d').style.display = 'none';
    }
    if (pestanya == 'imatge3') {
        document.getElementById("imatgesdissenys1").style.display = "none";
        document.getElementById("imatgesdissenys2").style.display = 'block';
        document.getElementById("imatgesdissenys3").style.display = 'none';
        document.getElementById("imatgesdissenys4").style.display = 'none';
        document.getElementById("imatgesdissenys5").style.display = 'none';
        document.getElementById("botocanvi").style.display = 'none';
        document.getElementById("botocanvi2").style.display = 'block';
        document.getElementById("botocanvi3").style.display = 'none';
        document.getElementById("botocanvi4").style.display = 'none';
        document.getElementById("botocanvi5").style.display = 'none';
        document.getElementById("modelsfab").style.display = 'none';
        document.getElementById('animacio2d').style.display = 'none';
        document.getElementById('animacio3d').style.display = 'none';
        document.getElementById('renderitzats').style.display = 'none';
         document.getElementById('unity2d').style.display = 'none';
    }
    if (pestanya == 'imatge4') {
        document.getElementById("imatgesdissenys1").style.display = "none";
        document.getElementById("imatgesdissenys2").style.display = 'none';
        document.getElementById("imatgesdissenys3").style.display = 'block';
        document.getElementById("imatgesdissenys4").style.display = 'none';
        document.getElementById("imatgesdissenys5").style.display = 'none';
        document.getElementById('botocanvi').style.display = 'none';
        document.getElementById('botocanvi2').style.display = 'none';
        document.getElementById('botocanvi3').style.display = 'block';
        document.getElementById('botocanvi4').style.display = 'none';
        document.getElementById('botocanvi5').style.display = 'none';
        document.getElementById("modelsfab").style.display = 'none';
        document.getElementById('animacio2d').style.display = 'none';
        document.getElementById('animacio3d').style.display = 'none';
        document.getElementById('renderitzats').style.display = 'none';
         document.getElementById('unity2d').style.display = 'none';
    }
        if (pestanya == 'imatge5') {
        document.getElementById("imatgesdissenys1").style.display = "none";
        document.getElementById("imatgesdissenys2").style.display = 'none';
        document.getElementById("imatgesdissenys3").style.display = 'none';
        document.getElementById("imatgesdissenys4").style.display = 'none';
        document.getElementById("imatgesdissenys5").style.display = 'none';
        document.getElementById('botocanvi').style.display = 'none';
        document.getElementById('botocanvi2').style.display = 'none';
        document.getElementById('botocanvi3').style.display = 'none';
        document.getElementById('botocanvi4').style.display = 'none';
        document.getElementById('botocanvi5').style.display = 'none';
        document.getElementById("modelsfab").style.display = 'none';
        document.getElementById('animacio2d').style.display = 'none';
        document.getElementById('animacio3d').style.display = 'none';
        document.getElementById('renderitzats').style.display = 'block';
             document.getElementById('unity2d').style.display = 'none';
    }
    if (pestanya == 'imatge6') {
        document.getElementById("imatgesdissenys1").style.display = "none";
        document.getElementById("imatgesdissenys2").style.display = 'none';
        document.getElementById("imatgesdissenys3").style.display = 'none';
        document.getElementById("imatgesdissenys4").style.display = 'none';
        document.getElementById("imatgesdissenys5").style.display = 'none';
        document.getElementById('botocanvi').style.display = 'none';
        document.getElementById('botocanvi2').style.display = 'none';
        document.getElementById('botocanvi3').style.display = 'none';
        document.getElementById('botocanvi4').style.display = 'none';
        document.getElementById('botocanvi5').style.display = 'none';
        document.getElementById("modelsfab").style.display = 'none';
        document.getElementById('animacio2d').style.display = 'none';
        document.getElementById('animacio3d').style.display = 'block';
        document.getElementById('renderitzats').style.display = 'none';
         document.getElementById('unity2d').style.display = 'none';
    }
    if (pestanya == 'imatge7') {
        document.getElementById("imatgesdissenys1").style.display = "block";
        document.getElementById("imatgesdissenys2").style.display = 'none';
        document.getElementById("imatgesdissenys3").style.display = 'none';
        document.getElementById("imatgesdissenys4").style.display = 'none';
        document.getElementById("imatgesdissenys5").style.display = 'none';
        document.getElementById("botocanviar").style.display = 'block';
        document.getElementById("botocanvi2").style.display = 'none';
        document.getElementById("botocanvi3").style.display = 'none';
        document.getElementById("botocanvi4").style.display = 'none';
        document.getElementById("botocanvi5").style.display = 'none';
        document.getElementById("modelsfab").style.display = 'none';
        document.getElementById('animacio2d').style.display = 'none';
        document.getElementById('animacio3d').style.display = 'none';
        document.getElementById('renderitzats').style.display = 'none';
         document.getElementById('unity2d').style.display = 'none';
    }
    if (pestanya == 'imatge8') {
        document.getElementById("imatgesdissenys1").style.display = "none";
        document.getElementById("imatgesdissenys2").style.display = 'none';
        document.getElementById("imatgesdissenys3").style.display = 'none';
        document.getElementById("imatgesdissenys4").style.display = 'none';
        document.getElementById("imatgesdissenys5").style.display = 'block';
        document.getElementById('botocanvi').style.display = 'none';
        document.getElementById('botocanvi2').style.display = 'none';
        document.getElementById('botocanvi3').style.display = 'none';
        document.getElementById('botocanvi4').style.display = 'none';
        document.getElementById('botocanvi5').style.display = 'block';
        document.getElementById("modelsfab").style.display = 'none';
        document.getElementById('animacio2d').style.display = 'none';
        document.getElementById('animacio3d').style.display = 'none';
        document.getElementById('renderitzats').style.display = 'none';
         document.getElementById('unity2d').style.display = 'none';
    }
    if (pestanya == 'imatge9') {
        document.getElementById("imatgesdissenys1").style.display = "none";
        document.getElementById("imatgesdissenys2").style.display = 'none';
        document.getElementById("imatgesdissenys3").style.display = 'none';
        document.getElementById("imatgesdissenys4").style.display = 'block';
        document.getElementById("imatgesdissenys5").style.display = 'none';
        document.getElementById('botocanvi').style.display = 'none';
        document.getElementById('botocanvi2').style.display = 'none';
        document.getElementById('botocanvi3').style.display = 'none';
        document.getElementById('botocanvi4').style.display = 'block';
        document.getElementById('botocanvi5').style.display = 'none';
        document.getElementById("modelsfab").style.display = 'none';
        document.getElementById('animacio2d').style.display = 'none';
        document.getElementById('animacio3d').style.display = 'none';
        document.getElementById('renderitzats').style.display = 'none';
         document.getElementById('unity2d').style.display = 'none';
    }
    if (pestanya == 'imatge10') {
        document.getElementById("imatgesdissenys1").style.display = "none";
        document.getElementById("imatgesdissenys2").style.display = 'none';
        document.getElementById("imatgesdissenys3").style.display = 'none';
        document.getElementById("imatgesdissenys4").style.display = 'none';
        document.getElementById("imatgesdissenys5").style.display = 'none';
        document.getElementById('botocanvi').style.display = 'none';
        document.getElementById('botocanvi2').style.display = 'none';
        document.getElementById('botocanvi3').style.display = 'none';
        document.getElementById('botocanvi4').style.display = 'none';
        document.getElementById('botocanvi5').style.display = 'none';
        document.getElementById("modelsfab").style.display = 'none';
        document.getElementById('animacio2d').style.display = 'block';
        document.getElementById('animacio3d').style.display = 'none';
        document.getElementById('renderitzats').style.display = 'none';
         document.getElementById('unity2d').style.display = 'none';
    }

     if (pestanya == 'imatge12') {
        document.getElementById("imatgesdissenys1").style.display = "none";
        document.getElementById("imatgesdissenys2").style.display = 'none';
        document.getElementById("imatgesdissenys3").style.display = 'none';
        document.getElementById("imatgesdissenys4").style.display = 'none';
        document.getElementById("imatgesdissenys5").style.display = 'none';
        document.getElementById('botocanvi').style.display = 'none';
        document.getElementById('botocanvi2').style.display = 'none';
        document.getElementById('botocanvi3').style.display = 'none';
        document.getElementById('botocanvi4').style.display = 'none';
        document.getElementById('botocanvi5').style.display = 'none';
        document.getElementById("modelsfab").style.display = 'none';
        document.getElementById('animacio2d').style.display = 'none';
        document.getElementById('animacio3d').style.display = 'none';
        document.getElementById('renderitzats').style.display = 'none';
          document.getElementById('unity2d').style.display = 'block';
    }
}


