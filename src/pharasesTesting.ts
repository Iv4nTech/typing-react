export const testPhrases: string[] = [
  "el perro corre por el campo", "la niña busca su juguete", "un gato duerme en el sofa", "quiero comer pan con queso", "mañana sera un gran dia",
  "el sol brilla mucho hoy", "mi amigo vive en españa", "la musica suena muy bien", "tengo sueño y quiero dormir", "esta sopa sabe a cebolla",
  "los pajaros vuelan alto", "me gusta jugar al futbol", "el coche es de color rojo", "necesito mas tiempo libre", "la piñata tiene dulces",
  "mi mama me mima mucho", "el rio lleva mucha agua", "tengo una idea genial", "las flores huelen rico", "el niño pequeño rie",
  "hace calor en el verano", "la luna sale de noche", "un barco navega por el mar", "espero que estes muy bien", "la llave abre la puerta",
  "me encanta el chocolate", "el libro es muy largo", "hoy no quiero trabajar", "la mesa es de madera", "mi casa tiene ventanas",
  "el oso come mucha miel", "tengo diez dedos en las manos", "el cielo es azul y claro", "la vaca da mucha leche", "puedo ver las estrellas",
  "la araña teje su red", "un zapato me queda chico", "el fuego quema la leña", "mi tia vive en la ciudad", "la fruta es muy sana",
  "el camino es muy largo", "quiero aprender a cocinar", "el reloj marca la hora", "la nieve es muy fria", "un pez nada en el rio",
  "la reina tiene una corona", "el señor lee el diario", "mi hermana tiene un gato", "el puente es de hierro", "la uva es una fruta",
  "el viento mueve las hojas", "tengo ganas de bailar", "la sopa esta muy caliente", "el raton come queso", "el lobo aulla fuerte",
  "la silla es muy comoda", "el papel es de color blanco", "mi papa usa camisa azul", "la piña es muy dulce", "el tigre vive en la selva",
  "la nube tapa el sol", "un elefante es muy grande", "la leche esta en el vaso", "el mono sube al arbol", "la bota es de cuero",
  "el pato nada en el lago", "la gallina pone huevos", "mi abuelo cuenta cuentos", "la radio suena fuerte", "el nido tiene huevos",
  "la ventana esta abierta", "el lapiz escribe bien", "la goma borra el error", "el niño juega con arena", "la ropa esta limpia",
  "el tren llega pronto", "la abeja busca flores", "el conejo salta mucho", "la tortuga camina lento", "el leon es el rey",
  "la bufanda me abriga", "el espejo me refleja", "la mochila pesa mucho", "el zumo es de naranja", "la calle esta vacia",
  "el martillo clava clavos", "la pinza sujeta la ropa", "el jabon hace espuma", "la esponja esta mojada", "el peine es de plastico",
  "la carta llego tarde", "el sobre es amarillo", "la señal indica el camino", "el huevo se rompio", "la harina hace pan",
  "el tomate es de la huerta", "la cebolla me hace llorar", "el aceite brilla mucho", "la sal da sabor", "el arroz esta cocido"
];

export const pharaseRandom = ():string[] => {
    return testPhrases[Math.floor(Math.random() * testPhrases.length)].split('');
}