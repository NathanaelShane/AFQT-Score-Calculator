var AR_Correct;
var MK_Correct;
var PC_Correct;
var WK_Correct;

var arStandard;
var mkStandard;
var veStandard;

var percentile;

function ScaledAR() { //Converts correct AR answers to a scaled score
  AR_Correct = parseInt(document.getElementById("AR").value);

  if (AR_Correct==30||AR_Correct==31){
     arStandard = 66;
  } else if (AR_Correct==28||AR_Correct==29){
     arStandard = 63;
  } else if (AR_Correct==26||AR_Correct==27){
     arStandard = 61;
  } else if (AR_Correct==24||AR_Correct==25){
     arStandard = 60;
  } else if (AR_Correct==22||AR_Correct==23){
     arStandard = 56;
  } else if (AR_Correct==20||AR_Correct==21){
     arStandard = 53;
  } else if (AR_Correct==18||AR_Correct==19){
     arStandard = 50;
  } else if (AR_Correct==16||AR_Correct==17){
     arStandard = 48;
  } else if (AR_Correct==14||AR_Correct==15){
     arStandard = 45;
  } else if (AR_Correct==12||AR_Correct==13){
    arStandard = 42;
  } else if (AR_Correct==10||AR_Correct==11){
    arStandard = 39;
  } else if (AR_Correct==8||AR_Correct==9){
    arStandard = 37;
  } else if (AR_Correct==6||AR_Correct==7){
    arStandard = 34;
  } else if (AR_Correct==4||AR_Correct==5){
    arStandard = 32;
  } else if (AR_Correct==2||AR_Correct==3){
    arStandard = 29;
  } else if (AR_Correct===0||AR_Correct==1){
    arStandard = 26;
  } else {
    alert("Input AR value between 0 and 31");
  }
  console.log(arStandard); //Test grabs arStandard
}

function ScaledMK() { //Converts correct MK answers to a scaled score
  MK_Correct = parseInt(document.getElementById("MK").value);

  if (MK_Correct==24||MK_Correct==25) {
    mkStandard = 61;
  } else if (MK_Correct==22||MK_Correct==23){
    mkStandard = 57;
  } else if (MK_Correct==20||MK_Correct==21){
    mkStandard = 53;
  } else if (MK_Correct==18||MK_Correct==19){
    mkStandard = 49;
  } else if (MK_Correct==16||MK_Correct==17){
    mkStandard = 45;
  } else if (MK_Correct==14||MK_Correct==15){
    mkStandard = 41;
  } else if (MK_Correct==12||MK_Correct==13){
    mkStandard = 37;
  } else if (MK_Correct==10||MK_Correct==11){
    mkStandard = 33;
  } else if (MK_Correct==8||MK_Correct==9){
    mkStandard = 29;
  } else if (MK_Correct==6||MK_Correct==7){
    mkStandard = 26;
  } else if (MK_Correct==4||MK_Correct==5){
    mkStandard = 23;
  } else if (MK_Correct==2||MK_Correct==3){
    mkStandardL = 21;
  } else if (MK_Correct===0||MK_Correct==1){
    mkStandard = 20;
  } else {
    alert("Input value between 0 and 25");
  }
  console.log(mkStandard);
}

function VE(){
  var PCandWK = parseInt(document.getElementById("PC").value) +
  parseInt(document.getElementById("WK").value);

  if (PCandWK==50) {
    veStandard = 62;
  } else if (PCandWK==48||PCandWK==49){
    veStandard = 60;
  } else if (PCandWK==46||PCandWK==47) {
    veStandard = 58;
  } else if (PCandWK==44||PCandWK==45){
    veStandard = 56;
  } else if (PCandWK==42||PCandWK==43) {
    veStandard = 54;
  } else if (PCandWK==40||PCandWK==41){
    veStandard = 52;
  } else if (PCandWK==38||PCandWK==39) {
    veStandard = 50;
  } else if (PCandWK==36||PCandWK==37){
    veStandard = 49;
  } else if (PCandWK==34||PCandWK==35) {
    veStandard = 47;
  } else if (PCandWK==32||PCandWK==33){
    veStandard = 45;
  } else if (PCandWK==30||PCandWK==31) {
    veStandard = 44;
  } else if (PCandWK==28||PCandWK==29){
    veStandard = 42;
  } else if (PCandWK==26||PCandWK==27) {
    veStandard = 40;
  } else if (PCandWK==24||PCandWK==25){
    veStandard= 38;
  } else if (PCandWK==22||PCandWK==23) {
    veStandard = 36;
  } else if (PCandWK==20||PCandWK==21){
    veStandard = 34;
  } else if (PCandWK==18||PCandWK==19) {
    veStandard = 32;
  } else if (PCandWK==16||PCandWK==17){
    veStandard= 31;
  } else if (PCandWK==14||PCandWK==15) {
    veStandard= 29;
  } else if (PCandWK==12||PCandWK==13){
    veStandard= 27;
  } else if (PCandWK==10||PCandWK==11) {
    veStandard = 25;
  } else if (PCandWK==8||PCandWK==9){
    veStandard= 22;
  } else if (PCandWK==6||PCandWK==7) {
    veStandard= 22;
  } else if (PCandWK==4||PCandWK==5){
    veStandard= 21;
  } else if (PCandWK==2||PCandWK==3) {
    veStandard= 20;
  } else if (PCandWK===0||PCandWK==1){
    veStandard = 20;
  } else {
    alert("Invalid range.");
  }
  console.log(veStandard);
}
function AFQT() {
  var standard = veStandard*2 + mkStandard + arStandard;

  if (standard<121){
    percentile = 1;
  } else if (standard<125){
    percentile = 2;
  } else if (standard<128){
    percentile = 3;
  } else if (standard<132){
    percentile = 4;
  } else if (standard<135){
    percentile = 5;
  } else if (standard<138){
    percentile = 6;
  } else if (standard<140){
    percentile = 7;
  } else if (standard<143){
    percentile = 8;
  } else if (standard<145){
    percentile = 9;
  } else if (standard<147){
    percentile = 10;
  } else if (standard<149){
    percentile = 11;
  } else if (standard<151){
    percentile = 12;
  } else if (standard<154){
    percentile = 13;
  } else if (standard<155){
    percentile = 14;
  } else if (standard<157){
    percentile = 15;
  } else if (standard<159){
    percentile = 16;
  } else if (standard<161){
    percentile = 17;
  } else if (standard<163){
    percentile = 18;
  } else if (standard<165){
    percentile = 19;
  } else if (standard<166){
    percentile = 20;
  } else if (standard<168){
    percentile = 21;
  } else if (standard<170){
    percentile = 22;
  } else if (standard<172){
    percentile = 23;
  } else if (standard<173){
    percentile = 24;
  } else if (standard<175){
    percentile = 25;
  } else if (standard<176){
    percentile = 26;
  } else if (standard<178){
    percentile = 27;
  } else if (standard<179){
    percentile = 28;
  } else if (standard<181){
    percentile = 29;
  } else if (standard<182){
    percentile = 30;
  } else if (standard<183){
    percentile = 31;
  } else if (standard<185){
    percentile = 32;
  } else if (standard<186){
    percentile = 33;
  } else if (standard<187){
    percentile = 34;
  } else if (standard<189){
    percentile = 35;
  } else if (standard<190){
    percentile = 36;
  } else if (standard<191){
    percentile = 37;
  } else if (standard<192){
    percentile = 38;
  } else if (standard<193){
    percentile = 39;
  } else if (standard<194){
    percentile = 40;
  } else if (standard<195){
    percentile = 41;
  } else if (standard<196){
    percentile = 42;
  } else if (standard<197){
    percentile = 43;
  } else if (standard<198){
    percentile = 44;
  } else if (standard<199){
    percentile = 45;
  } else if (standard<200){
    percentile = 46;
  } else if (standard<201){
    percentile = 47;
  } else if (standard<202){
    percentile = 48;
  } else if (standard<203){
    percentile = 49;
  } else if (standard<204){
    percentile = 50;
  } else if (standard<205){
    percentile = 51;
  } else if (standard<206){
    percentile = 52;
  } else if (standard<207){
    percentile = 53;
  } else if (standard<209){
    percentile = 54;
  } else if (standard<210){
    percentile = 55;
  } else if (standard<211){
    percentile = 56;
  } else if (standard<212){
    percentile = 57;
  } else if (standard<213){
    percentile = 58;
  } else if (standard<214){
    percentile = 59;
  } else if (standard<215){
    percentile = 60;
  } else if (standard<216){
    percentile = 61;
  } else if (standard<217){
    percentile = 62;
  } else if (standard<218){
    percentile = 63;
  } else if (standard<219){
    percentile = 64;
  } else if (standard<220){
    percentile = 65;
  } else if (standard<221){
    percentile = 66;
  } else if (standard<222){
    percentile = 67;
  } else if (standard<223){
    percentile = 68;
  } else if (standard<224){
    percentile = 69;
  } else if (standard<225){
    percentile = 70;
  } else if (standard<226){
    percentile = 71;
  } else if (standard<227){
    percentile = 72;
  } else if (standard<228){
    percentile = 73;
  } else if (standard<229){
    percentile = 74;
  } else if (standard<230){
    percentile = 75;
  } else if (standard<231){
    percentile = 76;
  } else if (standard<232){
    percentile = 77;
  } else if (standard<233){
    percentile = 78;
  } else if (standard<234){
    percentile = 79;
  } else if (standard<236){
    percentile = 80;
  } else if (standard<237){
    percentile = 81;
  } else if (standard<238){
    percentile = 82;
  } else if (standard<239){
    percentile = 83;
  } else if (standard<240){
    percentile = 84;
  } else if (standard<241){
    percentile = 85;
  } else if (standard<242){
    percentile = 86;
  } else if (standard<243){
    percentile = 87;
  } else if (standard<244){
    percentile = 88;
  } else if (standard<245){
    percentile = 89;
  } else if (standard<246){
    percentile = 90;
  } else if (standard<247){
    percentile = 91;
  } else if (standard<248){
    percentile = 92;
  } else if (standard<249){
    percentile = 93;
  } else if (standard<250){
    percentile = 94;
  } else if (standard<251){
    percentile = 95;
  } else if (standard<252){
    percentile = 96;
  } else if (standard<253){
    percentile = 97;
  } else if (standard<254){
    percentile = 98;
  } else if (standard<320){
    percentile = 99;
  } else {
    alert("Invalid Range")
  }

  document.getElementById("Percentile").innerHTML = percentile;

}
