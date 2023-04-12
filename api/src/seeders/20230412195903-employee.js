'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
     await queryInterface.bulkInsert('Employees', [

      {

name: "Alberto Escalona",
urlFile: "https://i.ibb.co/z5P202M/FOTO-ALBERTO-ESCALONA.png",
idSST: "QWER01TYUI",
eyeColor: "Brown",
height: "5'3\"",
issued: "2023-03-20",
expires: "2028-03-20",
test: "https://i.ibb.co/BTqx2W0/alberto-escalona-3.png",
test2: "https://i.ibb.co/qYgVhjQ/alberto-escalona.png",
test3: "https://i.ibb.co/vj9GRZ3/alberto-escalona-2.png",
certification: "OSHA 30 hour construction industry",
ctf2: "SST-302 2 hour drug and alcohol awareness",
ctf3: "SST-307 prevention of falls in 8 hours",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-19",
iuOn2: "2023-03-19",
iuOn3: "2023-03-19",

},
{

name: "Enrique Ramirez",
urlFile: "https://i.ibb.co/60C0Tnd/FOTO-ENRIQUE-RAMIREZ.png",
idSST: "QWER02TYUI",
eyeColor: "Black",
height: "5'1\"",
issued: "2023-03-20",
expires: "2028-03-20",
test: "https://i.ibb.co/dcvmQpR/DIPLOMA-30-HORAS-ENRIQUE-RAMIREZ.png",
test2: "https://i.ibb.co/gwFkDnJ/DIPLOMA-2-HORAS-ENRIQUE-RAMIREZ.png",
test3: "https://i.ibb.co/VSc5CGf/DIPLOMA-8-HORAS-ENRIQUE-RAMIREZ.png",
certification: "OSHA 30 Hour Construction Industry",
ctf2: "SST-302 2Hour Drug and Alcohol Awareness",
ctf3: "SST-307 Prevention of falls in 8 hours",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA ",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-19",
iuOn2: "2023-03-19",
iuOn3: "2023-03-19",

},
{
name: "Efrain Gustavo",
urlFile: "https://i.ibb.co/MCvB7yZ/FOTO-DE-PERFIL-DE-EFRAIN-GUSTAVO.png",
idSST: "QWER03TYUI",
eyeColor: "Brown",
height: "5'2\"",
issued: "2023-03-20",
expires: "2028-03-20",
test: "https://i.ibb.co/3rCZfBc/DIPLOMA-30-HORAS-DE-EFRAIN-GUSTAVO.png",
test2: "https://i.ibb.co/16jJc58/DIPLOMA-2-HORAS-DE-EFRAIN-GUSTAVO.png",
test3: "https://i.ibb.co/kxC4fQq/DIPLOMA-8-HORAS-DE-EFRAIN-GUSTAVO.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOURS",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-19",
iuOn2: "2023-03-19",
iuOn3: "2023-03-19",

},
{
name: "Eladio Peralta ",
urlFile: "https://i.ibb.co/5h85RtK/Foto-de-perfil-de-Eladio-Peralta.png",
idSST: "QWER04TYUI",
eyeColor: "Brown ",
height: "5'8\"",
issued: "2023-03-20",
expires: "2028-03-20",
test: "https://i.ibb.co/zmXbCFH/Diploma-de-30-de-Eladio-Peralta.jpg",
test2: "https://i.ibb.co/sQLYyHK/Diploma-2-horas-Eladio-Peralta.png",
test3: "https://i.ibb.co/1rcd03d/Diploma-8-horas-de-Eladio-Peralta.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY ",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOURS",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2018-05-10",
iuOn2: "2023-03-19",
iuOn3: "2023-03-19",

},
{
name: "Gilimersy Perdomo ",
urlFile: "https://i.ibb.co/Dk1p4k5/f-OTO-DE-PERFIL-DE-Gilimersy-Perdomo.png",
idSST: "QWER05TYUI",
eyeColor: "Black",
height: "5'4\"",
issued: "2023-03-20",
expires: "2028-03-20",
test: "https://i.ibb.co/7J2g048/Diploma-30-horas-de-Gilimersy-Perdomo.png",
test2: "https://i.ibb.co/6ZXGwFT/Diploma-2-horas-de-Gilimersy-Perdomo.png",
test3: "https://i.ibb.co/2W3zv3y/Diploma-8-horas-de-Gilimersy-Perdomo.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY ",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-19",
iuOn2: "2023-03-19",
iuOn3: "2023-03-19",

},
{
name: "Daniel Tuaza ",
urlFile: "https://i.ibb.co/ZLTkJRM/Foto-de-perfil-de-Daniel-Tuaza.png",
idSST: "QWER06TYUI",
eyeColor: "Black ",
height: "5'6\"",
issued: "2023-03-20",
expires: "2023-03-20",
test: "https://i.ibb.co/MsN1qPh/Diploma-de-30-horas-Daniel-Tuaza.png",
test2: "https://i.ibb.co/mtHdgFL/Diploma-de-2-horas-Daniel-Tuaza.png",
test3: "https://i.ibb.co/hdHPSFw/Diploma-de-8-horas-Daniel-Tuaza.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-19",
iuOn2: "2023-03-19",
iuOn3: "2023-03-19",

},
{
name: "Darwin Rodriguez",
urlFile: "https://i.ibb.co/wyHLXsd/FOTO-DE-PERFIL-DE-DARWIN.png",
idSST: "QWER07TYUI",
eyeColor: "Brown",
height: "5'4\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/frkWQL7/DIPLOMA-30-DARWIN-RODRIGUEZ.png",
test2: "https://i.ibb.co/2NVXTDH/DIPLOMA-2-HORAS-DARWIN-RODRIGUEZ.png",
test3: "https://i.ibb.co/wQ4rYJt/DIPLOMA-8-HORAS-DARWIN.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Jenny Chaluisa",
urlFile: "https://i.ibb.co/g6jnYf8/Foto-de-perfil-de-Jenny-Chaluisa.png",
idSST: "QWER08TYUI",
eyeColor: "Brown ",
height: "5'3\"",
issued: "2023-03-27",
expires: "2023-03-27",
test: "https://i.ibb.co/59Fb6SQ/Diploma-de-30-horas-Jenny-Chaluisa.png",
test2: "https://i.ibb.co/G0spYwW/Diploma-de-2-horas-Jenny-Chaluisa.png",
test3: "https://i.ibb.co/fHnJCWR/Diploma-de-8-horas-Jenny-Chaluisa.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST- 307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Henry Chusin",
urlFile: "https://i.ibb.co/MMQd7Y7/Foto-de-perfil-de-Henry-Chusin.png",
idSST: "QWER09TYUI",
eyeColor: "Black",
height: "5'4\"",
issued: "2023-03-27",
expires: "2023-03-27",
test: "https://i.ibb.co/Ld1WHGJ/Diploma-de-30-horas-Henry-Chusin.png",
test2: "https://i.ibb.co/7K8f9Vq/Diploma-de-2-horas-de-Henry-Chusin.png",
test3: "https://i.ibb.co/F8GxnKM/Diploma-de-8-horas-de-Henry-Chusin.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR ",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-27",
iuOn2: "2023-03-27",
iuOn3: "2023-03-27",

},
{
name: "Aleandro Gomes",
urlFile: "https://i.ibb.co/St5f5D7/Foto-de-perfil-de-Aleandro-Gomes.png",
idSST: "QWER10TYUI",
eyeColor: "Black",
height: "5'6\"",
issued: "2023-03-27",
expires: "2023-03-27",
test: "https://i.ibb.co/2crRWV7/Diploma-de-30-horas-de-Aleandro-Gomes.png",
test2: "https://i.ibb.co/BLCgVHL/Diploma-de-2-horas-de-Aleandro-Gomes.png",
test3: "https://i.ibb.co/2y1j0MD/Diploma-de-8-horas-de-Aleandro-Gomes.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-27",
iuOn2: "2023-03-27",
iuOn3: "2023-03-27",

},
{
name: "Christian Panza",
urlFile: "https://i.ibb.co/SP42QNy/Foto-de-perfil-de-Christian-Panza.png",
idSST: "QWER11TYUI",
eyeColor: "Brown",
height: "5'5\"",
issued: "2023-03-27",
expires: "2023-03-27",
test: "https://i.ibb.co/6b9p9w7/Diploma-de-30-horas-de-Christian-Panza.png",
test2: "https://i.ibb.co/c3MtTvN/Diploma-de-2-horas-de-Christian-Panza.png",
test3: "https://i.ibb.co/KjnYGjC/Diploma-de-8-horas-de-Christian-Panza.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-27",
iuOn2: "2023-03-27",
iuOn3: "2023-03-27",

},
{
name: "Rodrigo Pereira ",
urlFile: "https://i.ibb.co/FqJRy74/2023-04-04-19.png",
idSST: "QWER12TYUI",
eyeColor: "Brown ",
height: "5'5\"",
issued: "2023-03-12",
expires: "2023-03-27",
test: "https://i.ibb.co/ynjsfDb/2023-04-04-20.png",
test2: "https://i.ibb.co/L60Hjs1/2023-04-04-21.png",
test3: "https://i.ibb.co/YcRRjS5/2023-04-04-25.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY ",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-27",
iuOn2: "2023-03-27",
iuOn3: "2023-03-27",

},
{
name: "Aracely Taipe ",
urlFile: "https://i.ibb.co/k5DT6Zq/Foto-de-perfil-de-Aracely-Taipe.png",
idSST: "QWER13TYUI",
eyeColor: "Brown ",
height: "5'1\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/Vx663Lm/Diploma-de-30-horas-Aracely-Taipe.png",
test2: "https://i.ibb.co/JjbZCSS/Diploma-de-2-horas-de-Aracely-Taipe.png",
test3: "https://i.ibb.co/LQ8L2Cs/Diploma-de-8-horas-de-Aracely-Taipe.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY ",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-27",
iuOn2: "2023-03-27",
iuOn3: "2023-03-27",

},
{
name: "Manuel Beltre ",
urlFile: "https://i.ibb.co/hymTVWN/Foto-de-perfil-de-Manuel-Beltre.png",
idSST: "QWER14TYUI",
eyeColor: "Brown",
height: "5'7\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/3p1xRb6/Diploma-de-30-horas-de-Manuel-Beltre.png",
test2: "https://i.ibb.co/pwTKn26/Diploma-de-2-horas-de-Manuel-Beltre.png",
test3: "https://i.ibb.co/6Y9cmrD/Diploma-8-horas-de-Manuel-Beltre.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY ",
ctf2: "SST-302 2 HOURDRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-27",
iuOn2: "2023-03-27",
iuOn3: "2023-03-27",

},
{
name: "Robin Barahona",
urlFile: "https://i.ibb.co/748YTRw/Foto-de-perfil-de-Robin-Barahona.png",
idSST: "QWER15TYUI",
eyeColor: "Black",
height: "5'8\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/Wtq8km0/Diploma-de-30-horas-Robin-Barahona.png",
test2: "https://i.ibb.co/5FhGXPs/Diploma-de-2-horas-Robin-Barahona.png",
test3: "https://i.ibb.co/Lz5wY2L/Diploma-de-8-horas-Robin-Barahona.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY ",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Anaury Burgos",
urlFile: "https://i.ibb.co/FWX0SrW/Foto-de-perfil-de-Anaury-Burgos.png",
idSST: "QWER16TYUI",
eyeColor: "Brown",
height: "6'2\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/hVZjwfK/Diploma-de-30-horas-Anaury-Burgos.png",
test2: "https://i.ibb.co/X3jd306/Diploma-de-2-horas-Anaury-Burgos.png",
test3: "https://i.ibb.co/VxyQJtr/Diploma-de-8-horas-de-Anaury.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Darla Morocho",
urlFile: "https://i.ibb.co/fNhWvkv/Foto-de-perfil-de-Darla-Morocho.png",
idSST: "QWER17TYUI",
eyeColor: "Brown",
height: "5'0\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/VCpncLk/Diploma-de-30-horas-Darla-Morocho.png",
test2: "https://i.ibb.co/z6bW9Kw/Diploma-de-2-horas-Darla-Morocho.png",
test3: "https://i.ibb.co/B6F9Y9p/Diploma-de-8-horas-Darla-Morocho.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SS-307 PREVENTION OF FALLS IN 8 HOUR ",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Marcos Matta",
urlFile: "https://i.ibb.co/jHR3J61/Foto-de-perfil-de-Marcos-Matta.png",
idSST: "QWER18TYUI",
eyeColor: "Brown",
height: "5'7\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/N3dSG6b/Diploma-de-30-horas-Marcos-Matta.png",
test2: "https://i.ibb.co/NNNBN01/Diploma-de-2-horas-Marcos-Matta.png",
test3: "https://i.ibb.co/hHWSBMv/Diploma-de-8-horas-Marcos-Matta.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR ",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Frendel Marquez",
urlFile: "https://i.ibb.co/NZkNDzY/Foto-de-perfil-de-Frendel-Marquez.png",
idSST: "QWER19TYUI",
eyeColor: "Brown",
height: "6'1\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/HVLf9dG/Diploma-de-30-horas-de-Frendel-Marquez.png",
test2: "https://i.ibb.co/6DgGct1/Diploma-de-2-horas-Frendel-Marquez.png",
test3: "https://i.ibb.co/kyVd4q3/Diploma-de-8-horas-Frendel-Marquez.png",
certification: "",
ctf2: "",
ctf3: "",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Frendel Marquez ",
urlFile: "https://i.ibb.co/NZkNDzY/Foto-de-perfil-de-Frendel-Marquez.png",
idSST: "QWER19TYUI",
eyeColor: "Brown",
height: "6'1\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/HVLf9dG/Diploma-de-30-horas-de-Frendel-Marquez.png",
test2: "https://i.ibb.co/6DgGct1/Diploma-de-2-horas-Frendel-Marquez.png",
test3: "https://i.ibb.co/kyVd4q3/Diploma-de-8-horas-Frendel-Marquez.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR ",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Frendel Marquez",
urlFile: "https://i.ibb.co/NZkNDzY/Foto-de-perfil-de-Frendel-Marquez.png",
idSST: "QWER20TYUI",
eyeColor: "Brown",
height: "6'1\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/KsHxNnH/Foto-de-diploma-de-30-Frendel-Marquez.png",
test2: "https://i.ibb.co/6DgGct1/Diploma-de-2-horas-Frendel-Marquez.png",
test3: "https://i.ibb.co/kyVd4q3/Diploma-de-8-horas-Frendel-Marquez.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Elder Hernandez",
urlFile: "https://i.ibb.co/J5my1z4/Foto-de-perfil-de-Elder-Hernandez.png",
idSST: "QWER21TYUI",
eyeColor: "Brown",
height: "5'1\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/4p21z0b/Diploma-de-30-horas-Elder-Hernandez.png",
test2: "https://i.ibb.co/266SstW/Diploma-de-2-horas-Elder-Hnernandez.png",
test3: "https://i.ibb.co/jZpN3nN/Diploma-de-8-horas-Elder-Hernandez.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Wilson Martinez",
urlFile: "https://i.ibb.co/g7wyMSG/Foto-de-perfil-de-Wilson-Martinez.png",
idSST: "QWER22TYUI",
eyeColor: "Brown",
height: "5'6\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/ccJyF8H/Diploma-30-horas-Wilson-Martinez.png",
test2: "https://i.ibb.co/NmjZNJM/Diploma-2-horas-Wilson-Martinez.png",
test3: "https://i.ibb.co/qjWDKJH/Diploma-8-horas-Wilson-Martinez.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY ",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR ",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Juan Rodriguez",
urlFile: "https://i.ibb.co/Bz35wrR/foto-de-perfil-Juan-Rodriguez.png",
idSST: "QWER23TYUI",
eyeColor: "Brown",
height: "6'0\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/1TpR8sX/Diploma-de-30-horas-Juan-Rodriguez.png",
test2: "https://i.ibb.co/P1hJmCR/Diploma-de-2-horas-Juan-Rodriguez.png",
test3: "https://i.ibb.co/4p8f9w4/Diploma-de-8-horas-Juan-Rodriguez.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR ",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

},
{
name: "Yobreike Garcia",
urlFile: "https://i.ibb.co/KzZHDH0/Foto-de-perfil-Yobreike-Garcia.png",
idSST: "QWER24TYUI",
eyeColor: "Brown",
height: "5'6\"",
issued: "2023-03-27",
expires: "2028-03-27",
test: "https://i.ibb.co/FKFdjxz/Diploma-de-30-horas-Yobreike-Garcia.png",
test2: "https://i.ibb.co/0ZHNzdY/Diploma-de-2-horas-Yobreike-Garcia.png",
test3: "https://i.ibb.co/25B9MRv/2023-04-08-7.png",
certification: "OSHA 30 HOUR CONSTRUCTION INDUSTRY ",
ctf2: "SST-302 2 HOUR DRUG AND ALCOHOL AWARENESS",
ctf3: "SST-307 PREVENTION OF FALLS IN 8 HOUR ",
issuedBy: "OSHA",
iBy2: "Compu21",
iBy3: "Compu21",
verifiedBy: "OSHA",
vrf2: "Compu21",
vrf3: "Compu21",
issuedOn: "2023-03-26",
iuOn2: "2023-03-26",
iuOn3: "2023-03-26",

}
     ], {});

  },

  async down (queryInterface, Sequelize) {
   
 await queryInterface.bulkDelete('Employees', null, {});
    
  }
};
