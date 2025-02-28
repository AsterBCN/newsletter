const texto = `
<p class="mn-paragraph-article-p">
 <span style="white-space:pre-line">
  <!-- -->
  <!-- -->
  Guanyador:
  Rigel José
 </span>
</p>
`;

// Sustitución
const resultado = texto.replace(/\s*<!-- -->\s*/g, '');

console.log(resultado);