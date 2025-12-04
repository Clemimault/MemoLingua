/* data.js - Memolingua Vocabulary Data
   4 languages: German, French, Italian, English
   8 categories: Animals, Food, Family, Jobs, Body, Clothes, Colors, Numbers
   Same emojis across languages
*/

const DATA = {
  "German": {
    "Animals": [
      {emoji:"🐶", word:"der Hund", english:"dog"},
      {emoji:"🐱", word:"die Katze", english:"cat"},
      {emoji:"🐭", word:"die Maus", english:"mouse"},
      {emoji:"🐰", word:"das Kaninchen", english:"rabbit"},
      {emoji:"🐔", word:"das Hähnchen", english:"chicken"},
      {emoji:"🦆", word:"die Ente", english:"duck"},
      {emoji:"🐴", word:"das Pferd", english:"horse"},
      {emoji:"🐮", word:"die Kuh", english:"cow"},
      {emoji:"🐷", word:"das Schwein", english:"pig"},
      {emoji:"🐟", word:"der Fisch", english:"fish"}
    ],
    "Food": [
      {emoji:"🍎", word:"der Apfel", english:"apple"},
      {emoji:"🍓", word:"die Erdbeere", english:"strawberry"},
      {emoji:"🍅", word:"die Tomate", english:"tomato"},
      {emoji:"🥕", word:"die Karotte", english:"carrot"},
      {emoji:"🥔", word:"die Kartoffel", english:"potato"},
      {emoji:"🥖", word:"das Brot", english:"bread"},
      {emoji:"🧀", word:"der Käse", english:"cheese"},
      {emoji:"🥚", word:"das Ei", english:"egg"},
      {emoji:"🥗", word:"der Salat", english:"salad"},
      {emoji:"🍬", word:"die Bonbons", english:"sweets"}
    ],
    "Family":[
      {emoji:"👨", word:"der Vater", english:"father"},
      {emoji:"👩", word:"die Mutter", english:"mother"},
      {emoji:"👦", word:"der Sohn", english:"son"},
      {emoji:"👧", word:"die Tochter", english:"daughter"},
      {emoji:"👶", word:"das Baby", english:"baby"},
      {emoji:"👴", word:"der Großvater", english:"grandfather"},
      {emoji:"👵", word:"die Großmutter", english:"grandmother"},
      {emoji:"👉👨‍🤝‍👩", word:"der Bruder", english:"brother"},
      {emoji:"👨‍🤝‍👩👈", word:"die Schwester", english:"sister"},
      {emoji:"👯‍♂️", word:"die Zwillinge", english:"twins"}
    ],
    "Jobs":[
      {emoji:"👩‍⚕️", word:"der Arzt", english:"doctor"},
      {emoji:"👨‍🎤", word:"der Sänger", english:"singer"},
      {emoji:"👩‍🏫", word:"die Lehrerin", english:"teacher"},
      {emoji:"👨‍🚒", word:"der Feuerwehrmann", english:"firefighter"},
      {emoji:"👮‍♂️", word:"der Polizist", english:"policeman"},
      {emoji:"🪖", word:"der Soldat", english:"soldier"},
      {emoji:"🧑‍🌾", word:"der Bauer", english:"farmer"},
      {emoji:"👨‍🔧", word:"der Mechaniker", english:"mechanic"},
      {emoji:"🧑‍🎨", word:"der Kunstmaler", english:"painter"},
      {emoji:"👨‍🍳", word:"der Koch", english:"cook"}
    ],
    "Body":[
      {emoji:"👉🙂", word:"der Kopf", english:"head"},
      {emoji:"👀", word:"die Augen", english:"eyes"},
      {emoji:"👃", word:"die Nase", english:"nose"},
      {emoji:"👄", word:"der Mund", english:"mouth"},
      {emoji:"🦷", word:"der Zahn", english:"tooth"},
      {emoji:"👂", word:"das Ohr", english:"ear"},
      {emoji:"💪", word:"der Arm", english:"arm"},
      {emoji:"🖐️", word:"die Hand", english:"hand"},
      {emoji:"🦵", word:"das Bein", english:"leg"},
      {emoji:"🦶", word:"der Fuß", english:"foot"}
    ],
    "Clothes":[
      {emoji:"👗", word:"das Kleid", english:"dress"},
      {emoji:"👖", word:"die Hose", english:"trousers"},
      {emoji:"👕", word:"das T-Shirt", english:"T-Shirt"},
      {emoji:"👔", word:"das Hemd", english:"shirt"},
      {emoji:"🧦", word:"der Kniestrumpf", english:"socks"},
      {emoji:"👟👟", word:"die Schuhe", english:"shoes"},
      {emoji:"🩲", word:"der Slip", english:"briefs"},
      {emoji:"🧥", word:"der Mantel", english:"coat"},
      {emoji:"👒", word:"der Hut", english:"hat"},
      {emoji:"🧢", word:"die Schirmmütze", english:"cap"}
    ],
    "Colors":[
      {emoji:"🟦", word:"blau", english:"blue"},
      {emoji:"🟩", word:"grün", english:"green"},
      {emoji:"🟨", word:"gelb", english:"yellow"},
      {emoji:"🟧", word:"orange", english:"orange"},
      {emoji:"🟫", word:"braun", english:"brown"},
      {emoji:"🟥", word:"rot", english:"red"},
      {emoji:"🟪", word:"lila", english:"violet"},
      {emoji:"⬛", word:"schwarz", english:"black"},
      {emoji:"🌫️", word:"grau", english:"grey"},
      {emoji:"⬜", word:"weiß", english:"white"}
    ],
    "Numbers":[
      {emoji:"0️⃣", word:"null", english:"zero"},
      {emoji:"1️⃣", word:"eins", english:"one"},
      {emoji:"2️⃣", word:"zwei", english:"two"},
      {emoji:"3️⃣", word:"drei", english:"three"},
      {emoji:"4️⃣", word:"vier", english:"four"},
      {emoji:"5️⃣", word:"fünf", english:"five"},
      {emoji:"6️⃣", word:"sechs", english:"six"},
      {emoji:"7️⃣", word:"sieben", english:"seven"},
      {emoji:"8️⃣", word:"acht", english:"eight"},
      {emoji:"9️⃣", word:"neun", english:"nine"}
    ]
  },

  "French": {
    "Animals": [
      {emoji:"🐶", word:"le chien", english:"dog"},
      {emoji:"🐱", word:"le chat", english:"cat"},
      {emoji:"🐭", word:"la souris", english:"mouse"},
      {emoji:"🐰", word:"le lapin", english:"rabbit"},
      {emoji:"🐔", word:"le poulet", english:"chicken"},
      {emoji:"🦆", word:"le canard", english:"duck"},
      {emoji:"🐴", word:"le cheval", english:"horse"},
      {emoji:"🐮", word:"la vache", english:"cow"},
      {emoji:"🐷", word:"le cochon", english:"pig"},
      {emoji:"🐟", word:"le poisson", english:"fish"}
    ],
    "Food":[
      {emoji:"🍎", word:"la pomme", english:"apple"},
      {emoji:"🍓", word:"la fraise", english:"strawberry"},
      {emoji:"🍅", word:"la tomate", english:"tomato"},
      {emoji:"🥕", word:"la carotte", english:"carrot"},
      {emoji:"🥔", word:"la pomme de terre", english:"potato"},
      {emoji:"🥖", word:"le pain", english:"bread"},
      {emoji:"🧀", word:"le fromage", english:"cheese"},
      {emoji:"🥚", word:"l'œuf", english:"egg"},
      {emoji:"🥗", word:"la salade", english:"salad"},
      {emoji:"🍬", word:"les bonbons", english:"sweets"}
    ],
    "Family":[
      {emoji:"👨", word:"le père", english:"father"},
      {emoji:"👩", word:"la mère", english:"mother"},
      {emoji:"👦", word:"le fils", english:"son"},
      {emoji:"👧", word:"la fille", english:"daughter"},
      {emoji:"👶", word:"le bébé", english:"baby"},
      {emoji:"👴", word:"le grand-père", english:"grandfather"},
      {emoji:"👵", word:"la grand-mère", english:"grandmother"},
      {emoji:"👉👨‍🤝‍👩", word:"le frère", english:"brother"},
      {emoji:"👨‍🤝‍👩👈", word:"la soeur", english:"sister"},
      {emoji:"👯‍♂️", word:"les jumeaux", english:"twins"}
    ],
    "Jobs":[
      {emoji:"👩‍⚕️", word:"le médecin", english:"doctor"},
      {emoji:"👨‍🎤", word:"le chanteur", english:"singer"},
      {emoji:"👩‍🏫", word:"le professeur", english:"teacher"},
      {emoji:"👨‍🚒", word:"le pompier", english:"firefighter"},
      {emoji:"👮‍♂️", word:"le policier", english:"policeman"},
      {emoji:"🪖", word:"le soldat", english:"soldier"},
      {emoji:"🧑‍🌾", word:"le fermier", english:"farmer"},
      {emoji:"👨‍🔧", word:"le mécanicien", english:"mechanic"},
      {emoji:"🧑‍🎨", word:"le peintre", english:"painter"},
      {emoji:"👨‍🍳", word:"le cuisinier", english:"cook"}
    ],
    "Body":[
      {emoji:"👉🙂", word:"la tête", english:"head"},
      {emoji:"👀", word:"les yeux", english:"eyes"},
      {emoji:"👃", word:"le nez", english:"nose"},
      {emoji:"👄", word:"la bouche", english:"mouth"},
      {emoji:"🦷", word:"la dent", english:"tooth"},
      {emoji:"👂", word:"l'oreille", english:"ear"},
      {emoji:"💪", word:"le bras", english:"arm"},
      {emoji:"🖐️", word:"la main", english:"hand"},
      {emoji:"🦵", word:"la jambe", english:"leg"},
      {emoji:"🦶", word:"le pied", english:"foot"}
    ],
    "Clothes":[
      {emoji:"👗", word:"la robe", english:"dress"},
      {emoji:"👖", word:"le pantalon", english:"trousers"},
      {emoji:"👕", word:"le T-Shirt", english:"T-Shirt"},
      {emoji:"👔", word:"la chemise", english:"shirt"},
      {emoji:"🧦", word:"les chaussettes", english:"socks"},
      {emoji:"👟👟", word:"les chaussures", english:"shoes"},
      {emoji:"🩲", word:"le slip", english:"briefs"},
      {emoji:"🧥", word:"le manteau", english:"coat"},
      {emoji:"👒", word:"le chapeau", english:"hat"},
      {emoji:"🧢", word:"la casquette", english:"cap"}
    ],
    "Colors":[
      {emoji:"🟦", word:"bleu", english:"blue"},
      {emoji:"🟩", word:"vert", english:"green"},
      {emoji:"🟨", word:"jaune", english:"yellow"},
      {emoji:"🟧", word:"orange", english:"orange"},
      {emoji:"🟫", word:"marron", english:"brown"},
      {emoji:"🟥", word:"rouge", english:"red"},
      {emoji:"🟪", word:"violet", english:"violet"},
      {emoji:"⬛", word:"noir", english:"black"},
      {emoji:"🌫️", word:"gris", english:"grey"},
      {emoji:"⬜", word:"blanc", english:"white"}
    ],
    "Numbers":[
      {emoji:"0️⃣", word:"zéro", english:"zero"},
      {emoji:"1️⃣", word:"un", english:"one"},
      {emoji:"2️⃣", word:"deux", english:"two"},
      {emoji:"3️⃣", word:"trois", english:"three"},
      {emoji:"4️⃣", word:"quatre", english:"four"},
      {emoji:"5️⃣", word:"cinq", english:"five"},
      {emoji:"6️⃣", word:"six", english:"six"},
      {emoji:"7️⃣", word:"sept", english:"seven"},
      {emoji:"8️⃣", word:"huit", english:"eight"},
      {emoji:"9️⃣", word:"neuf", english:"nine"}
    ]
  },

  "Italian": {
    "Animals": [
      {emoji:"🐶", word:"il cane", english:"dog"},
      {emoji:"🐱", word:"il gatto", english:"cat"},
      {emoji:"🐭", word:"il topo", english:"mouse"},
      {emoji:"🐰", word:"il coniglio", english:"rabbit"},
      {emoji:"🐔", word:"il pollo", english:"chicken"},
      {emoji:"🦆", word:"l'anatra", english:"duck"},
      {emoji:"🐴", word:"il cavallo", english:"horse"},
      {emoji:"🐮", word:"la mucca", english:"cow"},
      {emoji:"🐷", word:"il maiale", english:"pig"},
      {emoji:"🐟", word:"il pesce", english:"fish"}
    ],
    "Food":[
      {emoji:"🍎", word:"la mela", english:"apple"},
      {emoji:"🍓", word:"la fragola", english:"strawberry"},
      {emoji:"🍅", word:"il pomodoro", english:"tomato"},
      {emoji:"🥕", word:"la carota", english:"carrot"},
      {emoji:"🥔", word:"la patata", english:"potato"},
      {emoji:"🥖", word:"il pane", english:"bread"},
      {emoji:"🧀", word:"il formaggio", english:"cheese"},
      {emoji:"🥚", word:"l'uovo", english:"egg"},
      {emoji:"🥗", word:"l'insalata", english:"salad"},
      {emoji:"🍬", word:"i dolci", english:"sweets"}
    ],
    "Family":[
      {emoji:"👨", word:"il padre", english:"father"},
      {emoji:"👩", word:"la madre", english:"mother"},
      {emoji:"👦", word:"il figlio", english:"son"},
      {emoji:"👧", word:"la figlia", english:"daughter"},
      {emoji:"👶", word:"il bambino", english:"baby"},
      {emoji:"👴", word:"il nonno", english:"grandfather"},
      {emoji:"👵", word:"la nonna", english:"grandmother"},
      {emoji:"👉👨‍🤝‍👩", word:"il fratello", english:"brother"},
      {emoji:"👨‍🤝‍👩👈", word:"la sorella", english:"sister"},
      {emoji:"👯‍♂️", word:"i gemelli", english:"twins"}
    ],
    "Jobs":[
      {emoji:"👩‍⚕️", word:"il dottore", english:"doctor"},
      {emoji:"👨‍🎤", word:"il cantante", english:"singer"},
      {emoji:"👩‍🏫", word:"il professore", english:"teacher"},
      {emoji:"👨‍🚒", word:"il pompiere", english:"firefighter"},
      {emoji:"👮‍♂️", word:"il poliziotto", english:"policeman"},
      {emoji:"🪖", word:"il soldato", english:"soldier"},
      {emoji:"🧑‍🌾", word:"il contadino", english:"farmer"},
      {emoji:"👨‍🔧", word:"il meccanico", english:"mechanic"},
      {emoji:"🧑‍🎨", word:"il pittore", english:"painter"},
      {emoji:"👨‍🍳", word:"lo chef", english:"cook"}
    ],
    "Body":[
      {emoji:"👉🙂", word:"la testa", english:"head"},
      {emoji:"👀", word:"gli occhi", english:"eyes"},
      {emoji:"👃", word:"il naso", english:"nose"},
      {emoji:"👄", word:"la bocca", english:"mouth"},
      {emoji:"🦷", word:"la dente", english:"tooth"},
      {emoji:"👂", word:"l'orecchio", english:"ear"},
      {emoji:"💪", word:"il braccio", english:"arm"},
      {emoji:"🖐️", word:"la mano", english:"hand"},
      {emoji:"🦵", word:"la gamba", english:"leg"},
      {emoji:"🦶", word:"il piede", english:"foot"}
    ],
    "Clothes":[
      {emoji:"👗", word:"il vestito", english:"dress"},
      {emoji:"👖", word:"i pantaloni", english:"trousers"},
      {emoji:"👕", word:"la maglietta", english:"T-Shirt"},
      {emoji:"👔", word:"la camicia", english:"shirt"},
      {emoji:"🧦", word:"le calze", english:"socks"},
      {emoji:"👟👟", word:"le scarpe", english:"shoes"},
      {emoji:"🩲", word:"lo slip", english:"briefs"},
      {emoji:"🧥", word:"il cappotto", english:"coat"},
      {emoji:"👒", word:"il cappello", english:"hat"},
      {emoji:"🧢", word:"il berretto", english:"cap"}
    ],
    "Colors":[
      {emoji:"🟦", word:"blu", english:"blue"},
      {emoji:"🟩", word:"verde", english:"green"},
      {emoji:"🟨", word:"giallo", english:"yellow"},
      {emoji:"🟧", word:"arancione", english:"orange"},
      {emoji:"🟫", word:"marrone", english:"brown"},
      {emoji:"🟥", word:"rosso", english:"red"},
      {emoji:"🟪", word:"viola", english:"violet"},
      {emoji:"⬛", word:"nero", english:"black"},
      {emoji:"🌫️", word:"grigio", english:"grey"},
      {emoji:"⬜", word:"bianco", english:"white"}
    ],
    "Numbers":[
      {emoji:"0️⃣", word:"zero", english:"zero"},
      {emoji:"1️⃣", word:"uno", english:"one"},
      {emoji:"2️⃣", word:"due", english:"two"},
      {emoji:"3️⃣", word:"tre", english:"three"},
      {emoji:"4️⃣", word:"quattro", english:"four"},
      {emoji:"5️⃣", word:"cinque", english:"five"},
      {emoji:"6️⃣", word:"sei", english:"six"},
      {emoji:"7️⃣", word:"sette", english:"seven"},
      {emoji:"8️⃣", word:"otto", english:"eight"},
      {emoji:"9️⃣", word:"nove", english:"nine"}
    ]
  },

  "English": {
    "Animals": [
      {emoji:"🐶", word:"dog", english:"dog"},
      {emoji:"🐱", word:"cat", english:"cat"},
      {emoji:"🐭", word:"mouse", english:"mouse"},
      {emoji:"🐰", word:"rabbit", english:"rabbit"},
      {emoji:"🐔", word:"chicken", english:"chicken"},
      {emoji:"🦆", word:"duck", english:"duck"},
      {emoji:"🐴", word:"horse", english:"horse"},
      {emoji:"🐮", word:"cow", english:"cow"},
      {emoji:"🐷", word:"pig", english:"pig"},
      {emoji:"🐟", word:"fish", english:"fish"}
    ],
    "Food":[
      {emoji:"🍎", word:"apple", english:"apple"},
      {emoji:"🍓", word:"strawberry", english:"strawberry"},
      {emoji:"🍅", word:"tomato", english:"tomato"},
      {emoji:"🥕", word:"carrot", english:"carrot"},
      {emoji:"🥔", word:"potato", english:"potato"},
      {emoji:"🥖", word:"bread", english:"bread"},
      {emoji:"🧀", word:"cheese", english:"cheese"},
      {emoji:"🥚", word:"egg", english:"egg"},
      {emoji:"🥗", word:"salad", english:"salad"},
      {emoji:"🍬", word:"sweets", english:"sweets"}
    ],
    "Family":[
      {emoji:"👨", word:"father", english:"father"},
      {emoji:"👩", word:"mother", english:"mother"},
      {emoji:"👦", word:"son", english:"son"},
      {emoji:"👧", word:"daughter", english:"daughter"},
      {emoji:"👶", word:"baby", english:"baby"},
      {emoji:"👴", word:"grandfather", english:"grandfather"},
      {emoji:"👵", word:"grandmother", english:"grandmother"},
      {emoji:"👉👨‍🤝‍👩", word:"brother", english:"brother"},
      {emoji:"👨‍🤝‍👩👈", word:"sister", english:"sister"},
      {emoji:"👯‍♂️", word:"twins", english:"twins"}
    ],
    "Jobs":[
      {emoji:"👩‍⚕️", word:"doctor", english:"doctor"},
      {emoji:"👨‍🎤", word:"singer", english:"singer"},
      {emoji:"👩‍🏫", word:"teacher", english:"teacher"},
      {emoji:"👨‍🚒", word:"firefighter", english:"firefighter"},
      {emoji:"👮‍♂️", word:"policeman", english:"policeman"},
      {emoji:"🪖", word:"soldier", english:"soldier"},
      {emoji:"🧑‍🌾", word:"farmer", english:"farmer"},
      {emoji:"👨‍🔧", word:"mechanic", english:"mechanic"},
      {emoji:"🧑‍🎨", word:"painter", english:"painter"},
      {emoji:"👨‍🍳", word:"cook", english:"cook"}
    ],
    "Body":[
      {emoji:"👉🙂", word:"head", english:"head"},
      {emoji:"👀", word:"eyes", english:"eyes"},
      {emoji:"👃", word:"nose", english:"nose"},
      {emoji:"👄", word:"mouth", english:"mouth"},
      {emoji:"🦷", word:"tooth", english:"tooth"},
      {emoji:"👂", word:"ear", english:"ear"},
      {emoji:"💪", word:"arm", english:"arm"},
      {emoji:"🖐️", word:"hand", english:"hand"},
      {emoji:"🦵", word:"leg", english:"leg"},
      {emoji:"🦶", word:"foot", english:"foot"}
    ],
    "Clothes":[
      {emoji:"👗", word:"dress", english:"dress"},
      {emoji:"👖", word:"trousers", english:"trousers"},
      {emoji:"👕", word:"T-Shirt", english:"T-Shirt"},
      {emoji:"👔", word:"shirt", english:"shirt"},
      {emoji:"🧦", word:"socks", english:"socks"},
      {emoji:"👟👟", word:"shoes", english:"shoes"},
      {emoji:"🩲", word:"briefs", english:"briefs"},
      {emoji:"🧥", word:"coat", english:"coat"},
      {emoji:"👒", word:"hat", english:"hat"},
      {emoji:"🧢", word:"cap", english:"cap"}
    ],
    "Colors":[
      {emoji:"🟦", word:"blue", english:"blue"},
      {emoji:"🟩", word:"green", english:"green"},
      {emoji:"🟨", word:"yellow", english:"yellow"},
      {emoji:"🟧", word:"orange", english:"orange"},
      {emoji:"🟫", word:"brown", english:"brown"},
      {emoji:"🟥", word:"red", english:"red"},
      {emoji:"🟪", word:"violet", english:"violet"},
      {emoji:"⬛", word:"black", english:"black"},
      {emoji:"🌫️", word:"grey", english:"grey"},
      {emoji:"⬜", word:"white", english:"white"}
    ],
    "Numbers":[
      {emoji:"0️⃣", word:"zero", english:"zero"},
      {emoji:"1️⃣", word:"one", english:"one"},
      {emoji:"2️⃣", word:"two", english:"two"},
      {emoji:"3️⃣", word:"three", english:"three"},
      {emoji:"4️⃣", word:"four", english:"four"},
      {emoji:"5️⃣", word:"five", english:"five"},
      {emoji:"6️⃣", word:"six", english:"six"},
      {emoji:"7️⃣", word:"seven", english:"seven"},
      {emoji:"8️⃣", word:"eight", english:"eight"},
      {emoji:"9️⃣", word:"nine", english:"nine"}
    ]
  }
};