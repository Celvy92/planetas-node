const { listarPlanetas, agregarPlaneta } = require("./planetas");

// Muestra la lista inicial
listarPlanetas();

// Ejemplo de agregar un planeta extra
agregarPlaneta("Plutón");

// Mostrar la lista actualizada
listarPlanetas();
