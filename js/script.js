/* =========================================================
   ACÁ COMPLETÁS VOS
   ---------------------------------------------------------
   Cada objeto { titulo, texto } es una tarjeta de la página.
   - titulo: la razón en pocas palabras.
   - texto:  la explicación, la anécdota, el detalle.

   Podés agregar todas las que quieras (copiá y pegá una línea)
   o borrar las que te sobren. Respetá las comas y las comillas.
   ========================================================= */

const razones = [
  { titulo: "Sos muy inteligente", texto: "A veces vos pensas lo contrario, pero cualquier persona que hable más de 2 minutos con vos, se da cuenta de lo inteligente e interesante que sos. Además creeme que si no fueses inteligente, no estaría haciendo esto" },
  {titulo:"Sos hermosa", texto:"!!!!!! Por dios, sos tan linda que cuando cierro los ojos no puedo evitar seguir viendote. ME FASCINAS ! tu bellaza es simple y llanamente inefable"},
  {titulo:"Sos amable", texto:"Me derrite de amor lo buena gente que sos y lo bien que tratas a las personas (no cambies nunca). A pesar de que el mundo y la gente no se cansan de ser malos, vos mantenes tu bondad y cariño y eso me enamora."},
  {titulo:"Sos graciosa", texto:"Que manera de reirme con vos loco... Mira que yo tenía el prejuicio de que las mujeres no son graciosas, pero tu sentido del humor y elocuencia me enamoraron."},
  {titulo:"Sos compañera", texto:"Que loco sentirse tan acompañado (lo digo por mi). Me enamora saber que si te necesito estás ahí y que si tengo ganas de hacer algo, vos te sumas"},
  {titulo:"Sos divertida", texto:"No, no es lo mismo que graciosa. Sos divertida porque siempre tenes algo en mente para que hagamos, si no es un plan, es una peli, un juego de mesa o algo que nos entretenga"},
  {titulo:"Tus detalles", texto:"Me dan mucha ternura ciertas cosas que haces y que voy descubriendo. Por ejemplo, que cuando usas aderezos haces como una pileta de todos. O que cuando te estas por dormir te quejas y haces ruidos raros"},
  {titulo:"Tus elocuencias", texto:"Hay veces que saltas con cada cosa que me da ternura o me hace reir. !!!! Como te vas a derpertar y escuchar 'linda mujer' ¿vos querés que te llene de besos?"},
  {titulo:"Sos ambiciosa", texto:"Vos podrás ver como una debilidad cuando dudas de tus estudios, de lo que haces, de lo que queres, etc. Pero yo lo único que veo, es a una mujer hermosa preocupandose por su futuro y queriendo ser alguien en la vida. Y que cosa mas hot que no ser una vaga"},
  {titulo:"Sos empática", texto:"Va un poco de la mano con lo bondadosa que sos, pero me enamora lo cariñosa y comprensible que podes llegar a ser cuando la otra persona está pasando por un mal momento"},
  {titulo:"Que buenos mimos que haces", texto:"No hace falta profundizar"},
  {titulo:"Sos hermosa e inteligente", texto:"Creo que ya lo dije, pero bueno, no está de más recordarlo !!"},
  {titulo:"La química que tenemos", texto:"No se si vos la sentis, supongo que sí, pero que fácil que es estar con vos, POR DIOSSSS"},
  {titulo:"Me aguantas", texto:"No se como haces con lo autista y molesto que puedo llegar a ser, con los chistes pelotudos que hago, los juegos de palabras, lo antisocial, y el resto de miles de defectos que tengo. Así que no se como haces, pero me alegro que lo hagas !!!"}
  
];

/* =========================================================
   De acá para abajo no hace falta que toques nada
   ========================================================= */

const lista = document.getElementById("lista-razones");
const contador = document.getElementById("contador");

// Dibuja una tarjeta por cada razón del array
razones.forEach((razon, i) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "razon";

  const estaVacia = !razon.titulo && !razon.texto;
  if (estaVacia) tarjeta.classList.add("razon--vacia");

  const numero = String(i + 1).padStart(2, "0");

  tarjeta.innerHTML = `
    <span class="razon__numero">RAZÓN ${numero}</span>
    <h2 class="razon__titulo">${razon.titulo || "Razón por completar"}</h2>
    <p class="razon__texto">${razon.texto || "Escribila en js/script.js"}</p>
  `;

  lista.appendChild(tarjeta);
});

// El contador del header muestra solo las razones ya escritas
contador.textContent = razones.filter(r => r.titulo || r.texto).length;

// Las tarjetas aparecen a medida que hacés scroll
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".razon").forEach((tarjeta) => {
  observador.observe(tarjeta);
});

/* =========================================================
   FOTO FLOTANTE
   Rebota por la pantalla estilo logo de DVD.
   Para que vaya más rápido o más lento, cambiá vx y vy.
   ========================================================= */
 
const flotante = document.getElementById("flotante");
const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 
if (flotante && !menosMovimiento) {
  let x = Math.random() * (window.innerWidth - 120);
  let y = Math.random() * (window.innerHeight - 120);
  let vx = 0.9;   // velocidad horizontal
  let vy = 0.7;   // velocidad vertical
 
  function mover() {
    const ancho = flotante.offsetWidth;
    const alto = flotante.offsetHeight;
 
    x += vx;
    y += vy;
 
    // Rebota contra los bordes de la ventana
    if (x <= 0 || x + ancho >= window.innerWidth) {
      vx *= -1;
      x = Math.max(0, Math.min(x, window.innerWidth - ancho));
    }
    if (y <= 0 || y + alto >= window.innerHeight) {
      vy *= -1;
      y = Math.max(0, Math.min(y, window.innerHeight - alto));
    }
 
    flotante.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(mover);
  }
 
  mover();
}