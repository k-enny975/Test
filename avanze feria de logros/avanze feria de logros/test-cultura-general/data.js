const questions = {
    historia: [
      { question: "¿En qué año comenzó la Segunda Guerra Mundial?", options: ["1939", "1945", "1914", "1920"], answer: "1939" },
      { question: "¿Quién fue el primer presidente de Estados Unidos?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], answer: "George Washington" },
    { question: "¿Quién fue el líder de la Revolución Francesa?", options: ["Napoleón Bonaparte", "Maximilien Robespierre", "Luis XVI", "Jean-Jacques Rousseau"], answer: "Maximilien Robespierre" },
    { question: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?", options: ["1776", "1783", "1804", "1754"], answer: "1776" },
    { question: "¿Qué imperio construyó la Gran Muralla China?", options: ["Imperio Ming", "Imperio Han", "Imperio Qin", "Imperio Tang"], answer: "Imperio Qin" },
    { question: "¿Quién descubrió América en 1492?", options: ["Cristóbal Colón", "Américo Vespucio", "Fernando de Magallanes", "Hernán Cortés"], answer: "Cristóbal Colón" },
    { question: "¿En qué año cayó el Imperio Romano de Occidente?", options: ["476", "1453", "800", "1215"], answer: "476" },
    { question: "¿Qué país fue liderado por Adolf Hitler durante la Segunda Guerra Mundial?", options: ["Alemania", "Italia", "Japón", "Rusia"], answer: "Alemania" },
    { question: "¿Quién fue el faraón que ordenó la construcción de la Gran Pirámide de Guiza?", options: ["Tutankamón", "Ramsés II", "Keops", "Akhenatón"], answer: "Keops" },
    { question: "¿Qué tratado puso fin a la Primera Guerra Mundial?", options: ["Tratado de Versalles", "Tratado de París", "Tratado de Utrecht", "Tratado de Tordesillas"], answer: "Tratado de Versalles" },
    ],


    arte: [
      { question: "¿Quién pintó la Mona Lisa?", options: ["Leonardo da Vinci", "Picasso", "Van Gogh", "Michelangelo"], answer: "Leonardo da Vinci" },
      { question: "¿Qué estilo artístico representa a Salvador Dalí?", options: ["Surrealismo", "Realismo", "Cubismo", "Impresionismo"], answer: "Surrealismo" },
      { question: "¿Cual es la pricipal función del arte ?", options: ["crear un negocio lucrativo", "Generar emociones y reflexiones", "Decorar espacios públicos", "Expresar únicamente ideas abstractas"], answer: "Generar emociones y reflexiones" },
      { question: "¿Quién es el autor de 'La noche estrellada'?", options: ["Vincent van Gogh", "Claude Monet", "Paul Cézanne", "Edvard Munch"], answer: "Vincent van Gogh" },
      { question: "¿Qué movimiento artístico es conocido por el uso de puntos de colores para crear imágenes?", options: ["Impresionismo", "Puntillismo", "Cubismo", "Surrealismo"], answer: "Puntillismo" },
      { question: "¿Qué famoso escultor creó 'El David'?", options: ["Miguel Ángel", "Donatello", "Bernini", "Rodin"], answer: "Miguel Ángel" },
      { question: "¿Qué técnica de pintura utiliza pigmentos mezclados con agua sobre yeso húmedo?", options: ["Óleo", "Acuarela", "Fresco", "Témpera"], answer: "Fresco" },
      { question: "¿Qué pintor es conocido por sus obras de girasoles?", options: ["Vincent van Gogh", "Claude Monet", "Paul Gauguin", "Edgar Degas"], answer: "Vincent van Gogh" },
      { question: "¿Qué artista es famoso por sus obras de arte pop, como las latas de sopa Campbell?", options: ["Andy Warhol", "Roy Lichtenstein", "Keith Haring", "Jean-Michel Basquiat"], answer: "Andy Warhol" },
      { question: "¿Qué pintor español es conocido por su obra 'Las Meninas'?", options: ["Diego Velázquez", "Francisco de Goya", "El Greco", "Pablo Picasso"], answer: "Diego Velázquez" },
    ],
    
    ciencia: [
      { question: "¿Qué planeta es conocido como el planeta rojo?", options: ["Marte", "Júpiter", "Saturno", "Venus"], answer: "Marte" },
      { question: "¿Cuál es el elemento químico con el símbolo O?", options: ["Oxígeno", "Oro", "Osmio", "Oxalato"], answer: "Oxígeno" },
      { question: "¿Qué científico propuso la teoría de la relatividad?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], answer: "Albert Einstein" },
      { question: "¿Cuál es el órgano más grande del cuerpo humano?", options: ["La piel", "El hígado", "El cerebro", "El corazón"], answer: "La piel" },
      { question: "¿Qué gas es esencial para la respiración humana?", options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"], answer: "Oxígeno" },
      { question: "¿Qué fuerza mantiene a los planetas en órbita alrededor del sol?", options: ["Gravedad", "Magnetismo", "Fricción", "Inercia"], answer: "Gravedad" },
      { question: "¿Qué tipo de sangre es considerado el donante universal?", options: ["O negativo", "O positivo", "AB positivo", "A negativo"], answer: "O negativo" },
      { question: "¿Qué instrumento se utiliza para medir los terremotos?", options: ["Sismógrafo", "Barómetro", "Anemómetro", "Higrómetro"], answer: "Sismógrafo" },
      { question: "¿Qué planeta es el más grande del sistema solar?", options: ["Júpiter", "Saturno", "Urano", "Neptuno"], answer: "Júpiter" },
      { question: "¿Qué partícula subatómica tiene carga negativa?", options: ["Electrón", "Protón", "Neutrón", "Quark"], answer: "Electrón" },
    ],
    
    tecnología: [
        { question: "¿Quién es conocido como el padre de la computación?", options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Ada Lovelace"], answer: "Charles Babbage" },
        { question: "¿Qué significa 'HTTP'?", options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transfer Process", "HyperText Transmission Process"], answer: "HyperText Transfer Protocol" },
        { question: "¿Qué empresa desarrolló el sistema operativo Windows?", options: ["Microsoft", "Apple", "IBM", "Google"], answer: "Microsoft" },
        { question: "¿Qué lenguaje de programación es conocido por su logo de una taza de café?", options: ["Java", "Python", "C++", "Ruby"], answer: "Java" },
        { question: "¿Qué es un 'byte'?", options: ["Una unidad de almacenamiento de datos", "Un tipo de procesador", "Un lenguaje de programación", "Un tipo de red"], answer: "Una unidad de almacenamiento de datos" },
        { question: "¿Qué significa 'CPU'?", options: ["Central Processing Unit", "Central Programming Unit", "Computer Processing Unit", "Core Processing Unit"], answer: "Central Processing Unit" },
        { question: "¿Qué red social fue creada por Mark Zuckerberg?", options: ["Facebook", "Twitter", "Instagram", "LinkedIn"], answer: "Facebook" },
        { question: "¿Qué es un 'algoritmo'?", options: ["Una secuencia de pasos para resolver un problema", "Un tipo de hardware", "Un lenguaje de programación", "Un sistema operativo"], answer: "Una secuencia de pasos para resolver un problema" },
        { question: "¿Qué dispositivo se utiliza para convertir señales digitales en analógicas y viceversa?", options: ["Módem", "Router", "Switch", "Hub"], answer: "Módem" },
        { question: "¿Qué significa 'IoT'?", options: ["Internet of Things", "Internet of Technology", "Integration of Technology", "Internet of Tools"], answer: "Internet of Things" },
        ]
  };
  