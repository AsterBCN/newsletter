/* const texto = 'Esto es un texto con "comillas" y con \\"comillas escapadas\\".';
const regex = /(?<!\\)"/g;
const resultado = regex.test(texto); */

/* const texto = 'Este es un texto con un caracter \\ que no está precedido por otro \\\\';
const regex = /(?<!\\)\\(?!\\)/;
const resultado = regex.test(texto); */

//const texto = 'Este es un texto con un caracter \\\\ y por un caracter \" ';
const texto = 'Este es un texto con \\\\ y con \\". También tiene \\ y "';
const regex = /\\{2}|\\"|\\n/g;

const textoModificado = texto.replace(regex, '**');

console.log(textoModificado);
// ***************************************************************
let rows = [
  [
    '2',
    'Activitats',
    'https://www.aster.cat/news/ca_ES/2024/03/20/0001/61e-curs-diniciacio-a-lastronomia',
    'https://lh3.googleusercontent.com/pw/AP1GczPNFDgoR5kLD_zqRRiBvGnxPqOQ53A9qgY5ha4YqQaynnlPEzBr4PVIZWLeioW_fjODEygfHSa9EjbpSzzTAn6gzR9bUGILxnSDJ50L_U0jl9l4g-Qp3jAuvQx7IzpaKbEhKgAJp19y5U-hlNBXFlgl=w2232-h1574-s-no?authuser=3',
    "61è Curs d'Iniciació a l'Astronomia",
    "\\\\\\\\\   \\\" L'Agrupació Astronòmica de Barcelona organitza a la seva seu social del carrer Viladomat 291, 6è, 1a, el 61è Curs d'Iniciació a l'Astronomia.\\nAquest curs presenta de forma plana i amena, una visió àmplia, completa i actual de l'astronomia en tots els seus àmbits, tant a la vessant teòrica com a la pràctica.\\nEl curs va dirigit a qualsevol persona interessada per l'astronomia, sigui quin sigui el nivell previ de coneixements sobre la  \\\\   \\\" matèria.",
    '100'
  ]
]


rows = rows.map(cells => {
  const row = cells.map(cell => {
    
    const texto = cell
    const regex = /\\{2}|\\"|\\n/g;
    const textoModificado = texto.replace(regex, '');

    if (textoModificado.includes('"') || textoModificado.includes('\\') || textoModificado.includes(String.fromCharCode(10)) ) {
      cell = '********** Caràcters incorrectes ************'
    }
    
    console.log(cell)})
  return row
})