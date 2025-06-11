const planetasFavoritos = [
    "Mercurio",
    "Venus",
    "Tierra",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Neptuno",
  ];
  
  function listarPlanetas() {
    console.log("🌌 Lista de planetas favoritos:");
    planetasFavoritos.forEach((planeta, index) => {
      console.log(`${index + 1}. ${planeta}`);
    });
  }
  
  function agregarPlaneta(planeta) {
    if (!planeta || typeof planeta !== "string") {
      console.log("Debes proporcionar un nombre válido para el planeta.");
      return;
    }
    planetasFavoritos.push(planeta);
    console.log(`Planeta "${planeta}" agregado a la lista.`);
  }
  
  module.exports = {
    listarPlanetas,
    agregarPlaneta,
  };
  