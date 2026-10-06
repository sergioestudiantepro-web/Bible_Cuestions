// ===== Bible Questions =====
const BOOKS=["Génesis","Éxodo","Levítico","Números","Deuteronomio","Josué","Jueces","Rut","1 Samuel","2 Samuel","1 Reyes","2 Reyes","1 Crónicas","2 Crónicas","Esdras","Nehemías","Ester","Job","Salmos","Proverbios","Eclesiastés","Cantares","Isaías","Jeremías","Lamentaciones","Ezequiel","Daniel","Oseas","Joel","Amós","Abdías","Jonás","Miqueas","Nahúm","Habacuc","Sofonías","Hageo","Zacarías","Malaquías","Mateo","Marcos","Lucas","Juan","Hechos","Romanos","1 Corintios","2 Corintios","Gálatas","Efesios","Filipenses","Colosenses","1 Tesalonicenses","2 Tesalonicenses","1 Timoteo","2 Timoteo","Tito","Filemón","Hebreos","Santiago","1 Pedro","2 Pedro","1 Juan","2 Juan","3 Juan","Judas","Apocalipsis"];

// Formato: [pregunta, correcta, mala1, mala2, mala3, cita]
const Q={
"Génesis":[
["¿Qué creó Dios el primer día?","La luz","Los animales","El mar","El sol","Génesis 1:3"],
["¿Cómo se llamaba el hijo de Adán y Eva que mató a su hermano?","Caín","Set","Noé","Enoc","Génesis 4:8"],
["¿Cuántos días y noches llovió durante el diluvio?","40","7","100","150","Génesis 7:12"],
["¿A qué hijo estuvo Abraham a punto de ofrecer en sacrificio?","Isaac","Ismael","Jacob","Esaú","Génesis 22:9-12"],
["¿A quién vendieron sus hermanos a unos mercaderes?","José","Benjamín","Rubén","Judá","Génesis 37:28"]],
"Éxodo":[
["¿Quién fue elegido para sacar al pueblo de Israel de Egipto?","Moisés","Aarón","Josué","Caleb","Éxodo 3:10"],
["¿Qué alimento envió Dios del cielo a los israelitas en el desierto?","Maná","Pan de cebada","Miel","Codornices solamente","Éxodo 16:15"],
["¿Qué mar se abrió para que Israel pasara?","El Mar Rojo","El Mar Muerto","El Mar Mediterráneo","El Mar de Galilea","Éxodo 14:21"],
["¿En qué monte descendió Dios ante Moisés para darle la ley?","Sinaí","Carmelo","Hermón","Nebo","Éxodo 19:20"],
["¿Cuál fue la última plaga sobre Egipto?","Muerte de los primogénitos","Langostas","Tinieblas","Granizo","Éxodo 12:29"]],
"Jonás":[
["¿Quién fue tragado por un gran pez?","Jonás","Elías","Pedro","Daniel","Jonás 1:17"],
["¿A qué ciudad envió Dios a Jonás?","Nínive","Babilonia","Jericó","Damasco","Jonás 1:2"],
["¿Hacia dónde huyó Jonás?","Tarsis","Egipto","Belén","Sidón","Jonás 1:3"],
["¿Cuántos días y noches estuvo Jonás dentro del pez?","Tres","Siete","Uno","Cuarenta","Jonás 1:17"],
["¿Qué preparó Dios para dar sombra a Jonás?","Una calabacera","Una palmera","Una higuera","Un cedro","Jonás 4:6"]],
"Salmos":[
["Según el Salmo 23, «Jehová es mi…»","Pastor","Escudo","Roca","Rey","Salmos 23:1"],
["¿A quién se atribuye el Salmo 23?","David","Salomón","Asaf","Moisés","Salmos 23:1"],
["Según el Salmo 119, ¿qué es lámpara a mis pies?","Tu palabra","Tu nombre","Tu casa","Tu ley escrita en piedra","Salmos 119:105"],
["«Dios es nuestro amparo y…»","Fortaleza","Escudo","Pastor","Luz","Salmos 46:1"],
["¿Quién debe alabar a Jehová según el Salmo 150?","Todo lo que respira","Solo los sacerdotes","Solo los reyes","Los ángeles únicamente","Salmos 150:6"]],
"Mateo":[
["¿Dónde nació Jesús?","Belén","Nazaret","Jerusalén","Capernaúm","Mateo 2:1"],
["¿Quién bautizó a Jesús?","Juan el Bautista","Pedro","Andrés","Santiago","Mateo 3:13"],
["¿Cómo se llama el sermón que comienza con las bienaventuranzas?","Sermón del Monte","Sermón de la Llanura","Sermón del Templo","Sermón del Mar","Mateo 5:1-3"],
["¿Cuántos discípulos escogió Jesús?","Doce","Siete","Diez","Setenta","Mateo 10:1"],
["¿Con cuántos panes y peces alimentó Jesús a cinco mil hombres?","Cinco panes y dos peces","Siete panes y pocos peces","Dos panes y cinco peces","Doce panes y tres peces","Mateo 14:17-21"]],
"Juan":[
["¿Cuál fue el primer milagro de Jesús en Juan?","Convertir el agua en vino","Sanar a un ciego","Caminar sobre el mar","Multiplicar los panes","Juan 2:1-11"],
["Según Juan 3:16, ¿qué dio Dios al mundo?","A su Hijo unigénito","Un profeta","Una nueva ley","Un ángel","Juan 3:16"],
["¿A quién resucitó Jesús en Betania?","Lázaro","Jairo","El hijo de la viuda","Dorcas","Juan 11:43-44"],
["«Yo soy el camino, la verdad y la…»","Vida","Luz","Puerta","Vid","Juan 14:6"],
["¿Quién negó a Jesús tres veces?","Pedro","Judas","Tomás","Felipe","Juan 18:17,25-27"]]
};

// ===== Libros añadidos (formato: [pregunta, correcta, mala1, mala2, mala3, cita]) =====
Object.assign(Q,{
"Levítico":[
["¿Quién fue ungido por Moisés como sumo sacerdote?","Aarón","Josué","Caleb","Eleazar","Levítico 8:12"],
["Según Levítico 19:18, ¿cómo debes amar a tu prójimo?","Como a ti mismo","Más que a ti mismo","Solo si te ama","Con ofrendas","Levítico 19:18"],
["¿Cuál es el día de reposo según Levítico 23:3?","El séptimo día","El primer día","El tercer día","El décimo día","Levítico 23:3"],
["¿En qué año se celebraba el jubileo?","El año cincuenta","El año siete","El año diez","El año cien","Levítico 25:10"],
["¿Qué día se hacía expiación por el pueblo con sacrificios especiales?","El Día de la Expiación","La Pascua","Pentecostés","Las Trompetas","Levítico 16:30"]],
"Números":[
["¿Cuántos espías envió Moisés a reconocer Canaán?","Doce","Siete","Diez","Setenta","Números 13:4-15"],
["¿Qué dos espías trajeron un informe favorable?","Josué y Caleb","Aarón y Hur","Moisés y Aarón","Eleazar e Itamar","Números 14:6-9"],
["¿Qué animal habló con Balaam?","Una asna","Un camello","Un buey","Un caballo","Números 22:28"],
["¿Qué hizo Moisés para sanar a los mordidos por serpientes ardientes?","Una serpiente de bronce en un asta","Hirió el mar","Ofreció un cordero","Oró en el monte","Números 21:8-9"],
["¿Qué hermana de Moisés fue herida de lepra por hablar contra él?","María","Séfora","Raquel","Abigail","Números 12:1,10"]],
"Deuteronomio":[
["Según Deuteronomio 6:5, ¿con qué amarás a Jehová tu Dios?","Con todo tu corazón, alma y fuerzas","Solo con ofrendas","Con ayunos","Con tu inteligencia","Deuteronomio 6:5"],
["¿Quién tomó el liderazgo de Israel después de Moisés?","Josué","Caleb","Aarón","Eleazar","Deuteronomio 34:9"],
["¿Desde qué monte vio Moisés la tierra prometida?","Nebo","Sinaí","Carmelo","Sion","Deuteronomio 34:1"],
["¿Cuántos años tenía Moisés cuando murió?","120","100","80","150","Deuteronomio 34:7"],
["Según Deuteronomio 8:3, ¿de qué vive el hombre además del pan?","De todo lo que sale de la boca de Jehová","Del trabajo de sus manos","De su sabiduría","De los sacrificios","Deuteronomio 8:3"]],
"Josué":[
["¿Qué ciudad cayó al sonar las trompetas y gritar el pueblo?","Jericó","Hai","Gabaón","Betel","Josué 6:20"],
["¿Quién escondió a los espías en Jericó?","Rahab","Débora","Rut","Ester","Josué 2:1"],
["¿Qué río cruzó Israel para entrar a la tierra prometida?","El Jordán","El Nilo","El Éufrates","El Arnón","Josué 3:17"],
["¿Cuántas veces rodearon Jericó el séptimo día?","Siete","Tres","Doce","Una","Josué 6:15"],
["¿Qué se detuvo cuando Josué oró en Gabaón?","El sol y la luna","La lluvia","El viento","Las estrellas","Josué 10:12-13"]],
"Jueces":[
["¿Con qué mató Sansón a mil filisteos?","Con una quijada de asno","Con una espada","Con una honda","Con una lanza","Jueces 15:15"],
["¿Qué mujer era profetisa y juzgaba a Israel?","Débora","Ana","Miriam","Rahab","Jueces 4:4"],
["¿Cuántos hombres quedaron con Gedeón para pelear contra Madián?","300","100","1.000","10.000","Jueces 7:7"],
["¿Qué mujer logró que le cortaran el cabello a Sansón?","Dalila","Rut","Betsabé","Jezabel","Jueces 16:19"],
["¿Qué llevaban en las manos los 300 hombres de Gedeón?","Trompetas y cántaros con antorchas","Espadas y escudos","Arcos y flechas","Lanzas y hondas","Jueces 7:16"]],
"Rut":[
["¿De qué tierra era Rut?","Moab","Egipto","Amón","Edom","Rut 1:4"],
["¿Cómo se llamaba la suegra de Rut?","Noemí","Orfa","Ana","Sara","Rut 1:2-4"],
["¿Con quién se casó Rut?","Booz","Elimelec","Obed","Isaí","Rut 4:13"],
["¿Qué recogía Rut en el campo de Booz?","Espigas","Uvas","Higos","Olivas","Rut 2:3"],
["Rut dijo a Noemí: «Tu pueblo será mi pueblo, y tu Dios…»","Mi Dios","Mi rey","Mi refugio","Mi pastor","Rut 1:16"]],
"1 Samuel":[
["¿Quién fue la madre de Samuel?","Ana","Penina","Noemí","Abigail","1 Samuel 1:20"],
["¿A quién ungió Samuel como primer rey de Israel?","Saúl","David","Salomón","Jonatán","1 Samuel 10:1"],
["¿A quién venció David con una honda y una piedra?","Goliat","Saúl","Abner","Og","1 Samuel 17:49-50"],
["¿De quién era hijo David?","Isaí","Obed","Booz","Elí","1 Samuel 17:12"],
["¿Qué sacerdote crió a Samuel en el santuario?","Elí","Aarón","Sadoc","Abiatar","1 Samuel 2:11"]],
"2 Samuel":[
["¿Qué ciudad tomó David y llamó ciudad de David?","Sion (Jerusalén)","Belén","Hebrón","Jericó","2 Samuel 5:6-7"],
["¿Qué llevó David a la ciudad de David con alegría?","El arca de Dios","La espada de Goliat","El altar de bronce","La vara de Aarón","2 Samuel 6:12"],
["¿Qué profeta confrontó a David por su pecado?","Natán","Samuel","Elías","Isaías","2 Samuel 12:1,7"],
["¿Con quién pecó David, esposa de Urías el heteo?","Betsabé","Abigail","Mical","Tamar","2 Samuel 11:3-4"],
["¿Qué hijo de David fue proclamado rey en Hebrón contra su padre?","Absalón","Salomón","Amnón","Jonatán","2 Samuel 15:10"]],
"1 Reyes":[
["¿Qué pidió Salomón a Dios en Gabaón?","Un corazón entendido","Riquezas","Larga vida","Victoria sobre sus enemigos","1 Reyes 3:9-11"],
["¿Quién construyó el templo de Jehová en Jerusalén?","Salomón","David","Josías","Ezequías","1 Reyes 6:1-2"],
["¿Qué profeta desafió a los profetas de Baal en el Carmelo?","Elías","Eliseo","Isaías","Natán","1 Reyes 18:22"],
["¿Qué cayó del cielo y consumió el holocausto en el Carmelo?","Fuego de Jehová","Lluvia","Granizo","Maná","1 Reyes 18:38"],
["¿Qué reina visitó a Salomón para probar su sabiduría?","La reina de Sabá","Jezabel","Ester","Vasti","1 Reyes 10:1"]],
"Ester":[
["¿Quién crió a Ester, que era huérfana?","Mardoqueo","Amán","Asuero","Hegai","Ester 2:7"],
["¿Qué reina dejó de serlo por no obedecer al rey Asuero?","Vasti","Ester","Atalía","Jezabel","Ester 1:12"],
["¿Quién tramó destruir a los judíos?","Amán","Mardoqueo","Hatac","Daniel","Ester 3:6"],
["Mardoqueo dijo: «¿Quién sabe si para esta hora has llegado al…?»","Reino","Palacio","Templo","Trono","Ester 4:14"],
["¿Qué fiesta recuerda la liberación de los judíos en tiempos de Ester?","Purim","Pascua","Pentecostés","Tabernáculos","Ester 9:26"]],
"Daniel":[
["¿Dónde fue echado Daniel por orar a su Dios?","En el foso de los leones","En un horno","En una cárcel","En el mar","Daniel 6:16"],
["Según Daniel 6:22, ¿quién cerró la boca de los leones?","Un ángel de Dios","El rey Darío","Un sacerdote","Un profeta","Daniel 6:22"],
["¿Qué escribió una mano en la pared en el banquete de Belsasar?","Mene, Mene, Tekel, Uparsin","Alfa y Omega","Santo, Santo, Santo","Amén, Amén","Daniel 5:25"],
["¿Cuántos varones vio Nabucodonosor caminando en el horno de fuego?","Cuatro","Tres","Dos","Siete","Daniel 3:25"],
["¿Qué rey soñó con una estatua de oro, plata, bronce, hierro y barro?","Nabucodonosor","Darío","Ciro","Belsasar","Daniel 2:31-33"]],
"Marcos":[
["¿Quién bautizó a Jesús en el Jordán?","Juan el Bautista","Pedro","Andrés","Santiago","Marcos 1:9"],
["¿Cuántos apóstoles escogió Jesús?","Doce","Siete","Setenta","Diez","Marcos 3:14"],
["¿A quién reprendió Jesús diciendo «Calla, enmudece»?","Al viento y al mar","A un demonio","A los fariseos","A un leproso","Marcos 4:39"],
["¿Cuántos hombres comieron con cinco panes y dos peces?","Cinco mil","Cuatro mil","Mil","Doce mil","Marcos 6:44"],
["¿Quién ayudó a Jesús a llevar la cruz?","Simón de Cirene","José de Arimatea","Nicodemo","Barrabás","Marcos 15:21"]],
"Lucas":[
["¿Qué ángel anunció a María que concebiría a Jesús?","Gabriel","Miguel","Rafael","Uriel","Lucas 1:26-31"],
["¿En qué ciudad nació Jesús?","Belén","Nazaret","Jerusalén","Capernaum","Lucas 2:4-7"],
["¿Quiénes recibieron primero el anuncio del nacimiento de Jesús?","Unos pastores","Los magos","Los sacerdotes","Unos soldados","Lucas 2:8-11"],
["¿Cómo se llama la parábola del hombre asaltado en el camino a Jericó?","El buen samaritano","El hijo pródigo","El sembrador","Los talentos","Lucas 10:30-37"],
["¿Qué prometió Jesús al malhechor arrepentido en la cruz?","Estar con él en el paraíso","Bajarlo de la cruz","Darle riquezas","Volver a su casa","Lucas 23:43"]],
"Hechos":[
["¿Qué descendió sobre los discípulos en Pentecostés?","El Espíritu Santo","Una nube","Maná","Un ángel","Hechos 2:1-4"],
["¿Quién fue apedreado y es considerado el primer mártir?","Esteban","Santiago","Felipe","Bernabé","Hechos 7:59-60"],
["¿Cuál era el nombre hebreo de Pablo?","Saulo","Silas","Simón","Saúl el rey","Hechos 13:9"],
["¿Camino a qué ciudad se le apareció Jesús a Saulo?","Damasco","Antioquía","Roma","Éfeso","Hechos 9:3"],
["¿Dónde fueron llamados cristianos por primera vez los discípulos?","Antioquía","Jerusalén","Corinto","Filipos","Hechos 11:26"]],
"Romanos":[
["Según Romanos 3:23, todos pecaron y están destituidos de…","La gloria de Dios","La ley de Moisés","La tierra prometida","La bendición de Abraham","Romanos 3:23"],
["Según Romanos 6:23, la paga del pecado es…","Muerte","Tristeza","Pobreza","Destierro","Romanos 6:23"],
["Según Romanos 10:9, ¿qué debemos confesar con la boca?","Que Jesús es el Señor","Que guardamos la ley","Que Dios es uno","Nuestros nombres","Romanos 10:9"],
["Según Romanos 8:28, ¿a quiénes todas las cosas les ayudan a bien?","A los que aman a Dios","A los ricos","A los que cumplen la ley","A los sacerdotes","Romanos 8:28"],
["Romanos 12:2: «Transformaos por la renovación de vuestro…»","Entendimiento","Corazón","Cuerpo","Nombre","Romanos 12:2"]],
"Apocalipsis":[
["¿Quién recibió y escribió la revelación del Apocalipsis?","Juan","Pedro","Pablo","Santiago","Apocalipsis 1:1,4"],
["¿En qué isla estaba Juan cuando recibió la revelación?","Patmos","Chipre","Creta","Malta","Apocalipsis 1:9"],
["¿A cuántas iglesias fue enviado el mensaje del libro?","Siete","Doce","Tres","Diez","Apocalipsis 1:11"],
["«Yo soy el Alfa y la…»","Omega","Beta","Gamma","Delta","Apocalipsis 1:8"],
["¿Qué vio Juan descender del cielo, de parte de Dios?","La nueva Jerusalén","Un nuevo templo","Un arca","Un monte","Apocalipsis 21:2"]]
});

const VERSES=[
["Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.","Juan 3:16"],
["Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.","Mateo 11:28"],
["Jehová es mi pastor; nada me faltará.","Salmos 23:1"],
["Todo lo puedo en Cristo que me fortalece.","Filipenses 4:13"],
["Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.","Josué 1:9"]];
const PRAISE=["¡Felicidades!","¡Excelente!","¡Bien hecho!","¡Correcto!","¡Gloria a Dios!"];

// Palabras para los retos de letras: [palabra, pista, cita]
// Una sola palabra por reto (de 4 a 8 letras). Puedes agregar todas las que quieras.
const WORDS=[
["CAÍN","Primer hijo de Adán y Eva","Génesis 4:1"],
["ABEL","Hermano de Caín; era pastor de ovejas","Génesis 4:2"],
["ADÁN","El primer hombre, formado del polvo de la tierra","Génesis 2:7"],
["EDÉN","Huerto donde Dios puso al primer hombre","Génesis 2:8"],
["ARCA","Gran embarcación que Noé construyó por mandato de Dios","Génesis 6:14"],
["DILUVIO","Inundación que cubrió la tierra en tiempos de Noé","Génesis 7:17"],
["PALOMA","Ave que Noé envió y volvió con una hoja de olivo","Génesis 8:11"],
["BABEL","Torre que los hombres quisieron levantar hasta el cielo","Génesis 11:4"],
["CANAÁN","Tierra que Dios prometió a Abraham","Génesis 12:5-7"],
["ABRAHAM","Dios cambió su nombre de Abram a este","Génesis 17:5"],
["SARA","Esposa de Abraham y madre de Isaac","Génesis 21:2-3"],
["ISAAC","Hijo de la promesa, nacido cuando Abraham tenía cien años","Génesis 21:5"],
["REBECA","Esposa de Isaac; dio de beber a los camellos del siervo","Génesis 24:19"],
["ESAÚ","Vendió su primogenitura por un guisado de lentejas","Génesis 25:33-34"],
["JACOB","Soñó con una escalera que llegaba hasta el cielo","Génesis 28:12"],
["RAQUEL","Esposa amada de Jacob; él sirvió siete años por ella","Génesis 29:18"],
["BENJAMÍN","El hijo menor de Jacob","Génesis 35:18"],
["JOSÉ","Interpretó los sueños del faraón y gobernó Egipto","Génesis 41:39-41"],
["EGIPTO","Tierra donde Israel fue esclavo antes de salir libre","Éxodo 1:13-14"],
["MOISÉS","Dios le habló desde una zarza que ardía sin consumirse","Éxodo 3:2-4"],
["FARAÓN","Rey de Egipto que endureció su corazón","Éxodo 8:15"],
["PASCUA","Fiesta que recuerda la noche en que Israel salió de Egipto","Éxodo 12:11"],
["MANÁ","Alimento que aparecía con el rocío en el desierto","Éxodo 16:14"],
["SINAÍ","Monte donde Dios entregó los diez mandamientos","Éxodo 19:20"],
["AARÓN","Hermano de Moisés; fue el primer sumo sacerdote","Éxodo 28:1"],
["CALEB","Espía que confió en Dios y entró en la tierra prometida","Números 14:24"],
["BALAAM","Profeta al que su asna le habló","Números 22:28"],
["JOSUÉ","Sucesor de Moisés al frente de Israel","Josué 1:1-2"],
["RAHAB","Mujer de Jericó que escondió a los espías","Josué 2:4"],
["JERICÓ","Ciudad cuyos muros cayeron al sonar las trompetas","Josué 6:20"],
["DÉBORA","Jueza y profetisa de Israel","Jueces 4:4"],
["GEDEÓN","Juez que venció a Madián con trescientos hombres","Jueces 7:7"],
["SANSÓN","Juez nazareo cuya fuerza estaba en su cabello","Jueces 16:17"],
["NOEMÍ","Suegra de Rut, que volvió con ella a Belén","Rut 1:19"],
["SAMUEL","Niño que oyó la voz de Dios mientras dormía en el templo","1 Samuel 3:4"],
["SAÚL","Primer rey de Israel","1 Samuel 10:24"],
["DAVID","Pastor de ovejas al que Samuel ungió como rey","1 Samuel 16:13"],
["GOLIAT","Gigante filisteo que desafió al ejército de Israel","1 Samuel 17:4"],
["SALOMÓN","Rey que pidió a Dios un corazón entendido","1 Reyes 3:9"],
["TEMPLO","Casa de Dios que Salomón construyó en Jerusalén","1 Reyes 6:1"],
["ELÍAS","Profeta que fue llevado al cielo en un torbellino","2 Reyes 2:11"],
["ELISEO","Profeta que pidió doble porción del espíritu de Elías","2 Reyes 2:9"],
["ESDRAS","Escriba que se dedicó a enseñar la ley de Dios","Esdras 7:10"],
["NEHEMÍAS","Copero del rey que reconstruyó los muros de Jerusalén","Nehemías 2:17"],
["ESTER","Reina que intercedió ante el rey por su pueblo","Ester 7:3"],
["DANIEL","Profeta que fue echado al foso de los leones","Daniel 6:16"],
["LEONES","Animales cuya boca cerró un ángel para proteger a Daniel","Daniel 6:22"],
["ISAÍAS","Profeta que vio al Señor sentado en un trono alto y sublime","Isaías 6:1"],
["JEREMÍAS","Profeta a quien Dios conoció antes de formarlo en el vientre","Jeremías 1:5"],
["AMÓS","Profeta que había sido pastor en Tecoa","Amós 1:1"],
["NÍNIVE","Ciudad que se arrepintió al oír la predicación de Jonás","Jonás 3:5"],
["BELÉN","Ciudad de David donde nació Jesús","Lucas 2:4-7"],
["ESTRELLA","Astro que guió a los magos hasta Jesús","Mateo 2:9"],
["HERODES","Rey que se turbó al oír que había nacido el rey de los judíos","Mateo 2:2-3"],
["PESEBRE","Lugar donde María acostó al niño Jesús","Lucas 2:7"],
["PASTORES","Recibieron de los ángeles la noticia del nacimiento de Jesús","Lucas 2:8-9"],
["NAZARET","Pueblo de Galilea donde Jesús creció","Lucas 2:39-40"],
["MARÍA","Joven que respondió: «He aquí la sierva del Señor»","Lucas 1:38"],
["GABRIEL","Ángel que anunció a María que tendría un hijo","Lucas 1:26-31"],
["JORDÁN","Río donde Jesús fue bautizado","Mateo 3:13"],
["GALILEA","Región donde Jesús llamó a unos pescadores a seguirle","Mateo 4:18-19"],
["PEDRO","Pescador que caminó sobre el agua hacia Jesús","Mateo 14:29"],
["ANDRÉS","Hermano de Simón Pedro; lo llevó a Jesús","Juan 1:40-42"],
["JUAN","Hijo de Zebedeo y hermano de Santiago","Mateo 4:21"],
["TOMÁS","Discípulo que quiso ver las marcas de los clavos","Juan 20:25"],
["JUDAS","Discípulo que entregó a Jesús por treinta monedas de plata","Mateo 26:14-15"],
["MARTA","Hermana de María y Lázaro; se afanaba en servir","Lucas 10:40"],
["LÁZARO","Amigo de Jesús a quien resucitó en Betania","Juan 11:43-44"],
["ZAQUEO","Cobrador de impuestos que subió a un sicómoro","Lucas 19:4"],
["NICODEMO","Fariseo que visitó a Jesús de noche","Juan 3:1-2"],
["PARÁBOLA","Relato con enseñanza que Jesús usaba para hablar","Mateo 13:34"],
["ORACIÓN","Jesús enseñó a sus discípulos cómo hacerla","Lucas 11:1"],
["CORDERO","Juan el Bautista llamó a Jesús «el … de Dios»","Juan 1:29"],
["PABLO","Apóstol que antes se llamaba Saulo","Hechos 13:9"],
["ESTEBAN","Primer mártir de la iglesia","Hechos 7:59-60"],
["TIMOTEO","Joven a quien Pablo llamó «verdadero hijo en la fe»","1 Timoteo 1:2"],
["LUCAS","Médico amado que acompañó a Pablo","Colosenses 4:14"],
["GRACIA","Por ella somos salvos, por medio de la fe","Efesios 2:8"],
["AMOR","El mayor de los tres: fe, esperanza y…","1 Corintios 13:13"],
["PERDÓN","Dios nos lo da cuando confesamos nuestros pecados","1 Juan 1:9"],
["CRUZ","Madero donde Jesús fue crucificado","Juan 19:17-18"]];

const $=id=>document.getElementById(id);
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const ic=(n,c="")=>`<svg class="ic ${c}"><use href="#i-${n}"/></svg>`;
const SECT=[[["Pentateuco",0,5],["Libros históricos",5,17],["Libros poéticos",17,22],["Profetas",22,39]],[["Evangelios",39,43],["Hechos",43,44],["Cartas",44,65],["Apocalipsis",65,66]]];
const AV=[["cross","Cruz",0],["book","Libro",40],["heart","Corazón",80],["moon","Luna",100],["flame","Llama",150],["crown","Corona",200],["star","Estrella",300]];
const FR=[["f0","Sin marco",0],["f1","Dorado",100],["f2","Violeta",150],["f3","Arcoíris",300]];
const PW={f:["50:50","half",3,40],t:["Tiempo","clock",3,50],s:["Saltar","skip",2,60],e:["Escudo","shield",2,80]};
let save={stars:{},done:{},vib:true,gold:0,xp:0,name:"Peregrino",av:"cross",fr:"f0",own:["cross","f0"],pw:{f:2,t:1,s:1,e:1},last:"",streak:0,tab:0,rd:null};
try{Object.assign(save,JSON.parse(localStorage.getItem("bq")||"{}"))}catch(e){}
if(!/^[a-z]+$/.test(save.av))save.av="cross";
save.own=save.own.filter(x=>/^[a-z0-9]+$/.test(x));if(!save.own.includes("cross"))save.own.push("cross");
const persist=()=>{try{localStorage.setItem("bq",JSON.stringify(save))}catch(e){}};
const lvlOf=()=>Math.floor(save.xp/50)+1;
const rate=s=>s>=13?3:s>=10?2:s>=5?1:0;
const st3=n=>[0,1,2].map(j=>ic("star",j<n?"on":"off")).join("");
const passed=b=>(save.done[b]||0)>=3;
const giveP=()=>{const k=Object.keys(PW)[Math.random()*4|0];save.pw[k]++;return PW[k][0]};
function toast(m){const t=document.createElement("div");t.className="toast";t.innerHTML=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function refresh(){
  const a=`<div class="avatar ${save.fr}">${ic(save.av)}</div>`;
  document.querySelectorAll(".myAv").forEach(e=>e.innerHTML=a);
  document.querySelectorAll(".gN").forEach(e=>e.textContent=save.gold);
  $("chipName").textContent=save.name;$("chipLv").textContent="Nivel "+lvlOf();$("chipXp").style.width=(save.xp%50)*2+"%";rdBadge();
}
// ---- Navegación (el botón atrás del celular también funciona)
let cur="welcome",tm;const PARENT={levels:"welcome",profile:"welcome",shop:"levels",game:"levels",result:"levels",retos:"welcome",word:"retos",dres:"retos"};
function go(id,pop){
  cur=id;if(!pop)history.pushState({s:id},"");
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");
  refresh();({levels:drawLevels,profile:drawProfile,shop:drawShop,retos:drawRetos,dres:drawDres})[id]?.();
}
history.replaceState({s:"welcome"},"");
window.onpopstate=()=>{
  const m=["settings","daily","unlock"].find(i=>!$(i).classList.contains("hidden"));
  if(m){$(m).classList.add("hidden");history.pushState({s:cur},"");return}
  if(cur==="welcome")return;clearInterval(tm);go(cur==="game"&&rq?"retos":PARENT[cur],true)};
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go));
// ---- Bienvenida y recompensa diaria
const v=VERSES[Math.random()*VERSES.length|0];
$("verse").textContent="«"+v[0]+"»";$("verseRef").textContent="— "+v[1];
function daily(){
  const f=d=>d.toLocaleDateString("en-CA"),t=f(new Date());if(save.last===t)return;
  save.streak=save.last===f(new Date(Date.now()-864e5))?save.streak+1:1;save.last=t;
  const g=10*Math.min(save.streak,7),extra=save.streak%3===0?` y un comodín: ${giveP()}`:"";save.gold+=g;persist();
  $("dText").innerHTML=`<span class="fire">${ic("flame").repeat(Math.min(save.streak,7))}</span><br>Día <b>${save.streak}</b> de racha<br>+${g} ${ic("coin")}${extra}<br><small>Vuelve mañana para ganar más. Cada 3 días recibes un comodín.</small>`;
  $("daily").classList.remove("hidden");
}
$("btnDaily").onclick=()=>{$("daily").classList.add("hidden");refresh()};
// ---- Mapa de libros (estilo camino)
function drawLevels(){
  const list=[];SECT[save.tab].forEach(([n,a,z])=>{for(let i=a;i<z;i++)list.push(i)});
  const S={};let open=true,done=0,total=0;
  list.forEach(i=>{const b=BOOKS[i];if(!Q[b]){S[i]="soon";return}total++;if(passed(b))done++;S[i]=open?(passed(b)?"done":"open"):"lock";if(!passed(b))open=false});
  document.querySelectorAll(".tab").forEach((t,i)=>t.classList.toggle("on",i===save.tab));
  $("prog").textContent=`Libros superados: ${done} de ${total} disponibles`;
  let k=0,Y=6,pts=[],out="";
  SECT[save.tab].forEach(([n,a,z])=>{
    out+=`<div class="band" style="top:${Y}px">${n}</div>`;Y+=54;
    for(let i=a;i<z;i++){
      const x=[50,76,50,24][k++%4],b=BOOKS[i],s=S[i],sc=save.stars[b]||0;pts.push([x,Y+32]);
      out+=`<button class="node ${s}" data-i="${i}" style="left:${x}%;top:${Y}px"><span class="dot">${s==="lock"||s==="soon"?ic("lock"):i+1}</span><span class="nm">${b}</span><span class="rt">${st3(rate(sc))}</span></button>`;
      Y+=116;
    }
    Y+=8;
  });
  let d="";pts.forEach((p,j)=>{const q=pts[j-1];d+=j?`C${q[0]} ${(q[1]+p[1])/2} ${p[0]} ${(q[1]+p[1])/2} ${p[0]} ${p[1]}`:`M${p[0]} ${p[1]}`});
  const m=$("map");m.style.height=Y+"px";
  m.innerHTML=`<svg class="trail" viewBox="0 0 100 ${Y}" preserveAspectRatio="none" style="height:${Y}px"><path d="${d}" vector-effect="non-scaling-stroke"/></svg>`+out;
  const o=m.querySelector(".open");if(o)setTimeout(()=>o.scrollIntoView({block:"center"}),30);
}
$("map").onclick=e=>{
  const n=e.target.closest(".node");if(!n)return;
  if(n.classList.contains("soon"))toast("Este libro llegará pronto");
  else if(n.classList.contains("lock"))toast("Supera el libro anterior para abrirlo");
  else start(BOOKS[n.dataset.i]);
};
document.querySelectorAll(".tab").forEach((t,i)=>t.onclick=()=>{save.tab=i;persist();drawLevels()});
// ---- Juego
let book,qs,qi,stars,right,earned,t0,locked,lim,used,shield,rq=null; // rq: guarda el reto diario en curso (null = quiz normal)
function start(b){rq=null;book=b;qs=shuffle(Q[b]).slice(0,5);qi=0;stars=0;right=0;earned=0;$("lvlName").textContent=b;go("game");ask()}
function setP(){document.querySelectorAll(".pw").forEach(b=>{const k=b.dataset.k;b.querySelector("em").textContent=save.pw[k];b.disabled=locked||used[k]||save.pw[k]<1;b.classList.toggle("on",k==="e"&&shield)})}
function ask(){
  locked=false;used={};shield=false;lim=15;setP();const q=qs[qi];
  $("qCount").textContent=rq?rq.label:(qi+1)+"/5";$("question").textContent=q[0];
  $("feedback").classList.add("hidden");$("options").innerHTML="";
  shuffle(q.slice(1,5)).forEach((t,k)=>{
    const b=document.createElement("button");b.className="opt";b.dataset.t=t;
    b.innerHTML=`<i>${"ABCD"[k]}</i><span></span>`;b.lastChild.textContent=t;b.onclick=()=>answer(b,t===q[1]);$("options").appendChild(b);
  });
  t0=Date.now();clearInterval(tm);
  tm=setInterval(()=>{
    const left=Math.max(0,lim-(Date.now()-t0)/1000);
    $("bar").style.width=(left/lim*100)+"%";$("secs").textContent=Math.ceil(left);$("bar").classList.toggle("low",left<5);
    if(left<=0)answer(null,false);
  },100);
}
document.querySelectorAll(".pw").forEach(b=>b.onclick=()=>{
  const k=b.dataset.k;if(locked||used[k]||save.pw[k]<1)return;used[k]=1;save.pw[k]--;persist();
  if(k==="f"){const q=qs[qi];shuffle([...document.querySelectorAll(".opt")].filter(o=>o.dataset.t!==q[1])).slice(0,2).forEach(o=>{o.style.visibility="hidden";o.disabled=true})}
  if(k==="t"){lim+=10;toast("+10 segundos")}
  if(k==="e"){shield=true;toast("Escudo activo: un error no cuenta")}
  if(k==="s"){setP();answer(null,false,true);return}
  setP();
});
function answer(btn,ok,skip){
  if(locked)return;
  if(!ok&&btn&&shield){shield=false;btn.classList.add("bad");btn.disabled=true;setP();toast("El escudo te protegió. Elige otra opción");return}
  locked=true;clearInterval(tm);setP();
  const e=(Date.now()-t0)/1000,q=qs[qi];
  document.querySelectorAll(".opt").forEach(o=>{o.disabled=true;if(o.dataset.t===q[1])o.classList.add("ok")});
  let html,s=0,g=0;
  if(ok){
    s=e<=5?3:e<=10?2:1;g=3+s*2;stars+=s;right++;earned+=g;save.gold+=g;
    const before=lvlOf();save.xp+=10;
    if(lvlOf()>before){save.gold+=20;earned+=20;toast(`Subiste al nivel ${lvlOf()}: +20 ${ic("coin")}`)}
    persist();
    html=`<h3>${PRAISE[Math.random()*PRAISE.length|0]}</h3><div class="st3">${st3(s)}</div><p>+${g} ${ic("coin")} · +10 XP</p><small>${q[5]}</small>`;
  }else{
    if(btn&&save.vib&&navigator.vibrate)navigator.vibrate(200);
    if(btn)btn.classList.add("bad");
    html=`<h3>${skip?"Pregunta saltada":btn?"Respuesta incorrecta":"Se acabó el tiempo"}</h3><p>Correcta: <b>${q[1]}</b></p><small>${q[5]}</small>`;
  }
  html+=`<button class="btn gold" id="btnNext">${(rq?rq.last:qi>=4)?"Ver resultado":"Siguiente"}</button>`;
  if(rq)rq.done({ok:!!ok,s,g}); // reto diario: guarda el resultado
  $("feedback").innerHTML=html;$("feedback").classList.remove("hidden");
  $("btnNext").onclick=()=>{if(rq)rq.next();else{qi++;qi<5?ask():finish()}};
  $("feedback").scrollIntoView({behavior:"smooth",block:"end"});
}
function finish(){
  const was=passed(book);save.done[book]=Math.max(save.done[book]||0,right);const fresh=!was&&right>=3;
  const n=right===5?giveP():"";if(right===5){save.gold+=25;earned+=25}
  if(stars>(save.stars[book]||0))save.stars[book]=stars;persist();
  $("resTitle").textContent=book;$("resStars").innerHTML=st3(rate(stars));
  $("resText").innerHTML=`Aciertos: ${right}/5 · Estrellas: ${stars}/15<br>Ganaste <b>${earned}</b> ${ic("coin")}`+(n?`<br>Ronda perfecta: comodín ${n}`:"")+(right<3?"<br>Necesitas 3 aciertos para superar el libro":"");
  go("result");
  if(fresh){
    const i=BOOKS.indexOf(book),T=i<39?0:1,l=BOOKS.map((b,j)=>j).filter(j=>(j<39?0:1)===T&&Q[BOOKS[j]]),nx=l[l.indexOf(i)+1];
    $("uText").innerHTML=nx!==undefined?`Desbloqueaste <b>${BOOKS[nx]}</b>`:"Completaste todos los libros disponibles de este testamento";
    $("unlock").classList.remove("hidden");
  }
}
$("btnUnlock").onclick=()=>{$("unlock").classList.add("hidden");go("levels")};
$("btnAgain").onclick=()=>start(book);
$("btnQuit").onclick=()=>{clearInterval(tm);go(rq?"retos":"levels")};
// ================== RETOS DIARIOS ==================
// Cada día hay 6 retos que mezclan preguntas (quiz) y palabras (letras).
// Todos los jugadores ven los mismos retos el mismo día.
// Aquí puedes cambiar el orden ("q" = pregunta, "w" = palabra) y los premios:
const RD={steps:["q","w","q","w","q","w"],base:15,perfect:25,perStreak:3,maxStreak:7};
const DIAS=["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],MESES=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const DAYRE=/^\d{4}-\d{2}-\d{2}$/,p2=n=>String(n).padStart(2,"0");
const dayKey=d=>d.getFullYear()+"-"+p2(d.getMonth()+1)+"-"+p2(d.getDate());
const keyDate=k=>{const[y,m,d]=k.split("-").map(Number);return new Date(y,m-1,d)};
const dayNum=k=>{const[y,m,d]=k.split("-").map(Number);return Math.floor(Date.UTC(y,m-1,d)/864e5)};
const prevDay=k=>{const d=keyDate(k);d.setDate(d.getDate()-1);return dayKey(d)};
// Mezcla "con semilla": el mismo número siempre da el mismo orden (así todos ven lo mismo cada día)
const seedRnd=a=>()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const seedShuffle=(arr,seed)=>{const r=seedRnd(seed),a=[...arr];for(let i=a.length-1;i>0;i--){const j=r()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
// Quita las tildes (pero deja la Ñ) para usar las letras como fichas
const norm=s=>s.toUpperCase().replace(/Ñ/g,"\u0001").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\u0001/g,"Ñ");
const QP=seedShuffle(Object.entries(Q).flatMap(([b,a])=>a.map(q=>[b,q])),11);
const WP=seedShuffle(WORDS,23);
// Los retos del día: preguntas y palabras (las palabras van de la más corta a la más larga)
function rdPlan(day){
  const n=dayNum(day),cnt=t=>RD.steps.filter(s=>s===t).length,take=(pool,c)=>Array.from({length:c},(_,k)=>pool[(n*c+k)%pool.length]);
  const qa=take(QP,cnt("q")),wa=take(WP,cnt("w")).sort((a,b)=>norm(a[0]).length-norm(b[0]).length);
  let i=0,j=0;return RD.steps.map(t=>t==="q"?{t,q:qa[i++][1]}:{t,w:wa[j++]});
}
// ---- Progreso guardado (save.rd). Se reinicia solo cuando cambia el día
function rdInit(){
  const today=dayKey(new Date()),n=RD.steps.length,okDay=k=>typeof k==="string"&&DAYRE.test(k);
  let R=save.rd;if(!R||typeof R!=="object")R=save.rd={};
  const hist={};if(R.hist&&typeof R.hist==="object")Object.keys(R.hist).filter(okDay).forEach(k=>hist[k]=1);
  R.hist=hist;R.streak=Math.max(0,R.streak|0);R.total=Math.max(0,R.total|0);R.last=okDay(R.last)?R.last:"";
  if(R.day!==today||!Array.isArray(R.res))Object.assign(R,{day:today,res:[],bonus:0,pw:"",fin:false});
  R.res=R.res.slice(0,n).map(x=>({t:x&&x.t==="w"?"w":"q",ok:!!(x&&x.ok),s:Math.min(3,Math.max(0,(x&&x.s)|0)),g:Math.max(0,(x&&x.g)|0)}));
  R.bonus=Math.max(0,R.bonus|0);R.fin=!!R.fin;
  if(typeof R.pw!=="string"||!Object.values(PW).some(p=>p[0]===R.pw))R.pw="";
  R.i=R.res.length;persist();return R;
}
// La racha sigue viva si completaste los retos hoy o ayer
const rdStreak=R=>R.last===R.day||R.last===prevDay(R.day)?R.streak:0;
function untilNew(){const n=new Date(),t=new Date(n.getFullYear(),n.getMonth(),n.getDate()+1),m=Math.max(1,Math.ceil((t-n)/6e4)),h=m/60|0;return h?`${h} h ${m%60} min`:`${m} min`}
// Etiqueta del botón de la bienvenida (0/6 ... listo)
function rdBadge(){
  const t=$("rdTag");if(!t)return;
  const R=save.rd,n=RD.steps.length,p=R&&R.day===dayKey(new Date())&&Array.isArray(R.res)?Math.min(R.res.length,n):0;
  t.className="tag"+(p>=n?" ok":"");t.innerHTML=p>=n?ic("check"):p+"/"+n;
}
// Se llama cada vez que termina un reto (pregunta o palabra)
function rdRecord(r){
  const R=save.rd,n=RD.steps.length;if(!R||R.res.length>=n)return;
  R.res.push({t:r.t,ok:!!r.ok,s:r.s|0,g:r.g|0});R.i=R.res.length;
  if(R.i>=n&&!R.fin)rdFinish(R);
  persist();
}
// Al terminar los 6 retos: racha, bonus de oro y (si todo salió perfecto) un comodín
function rdFinish(R){
  const n=R.res.length,ok=R.res.filter(r=>r.ok).length;
  R.streak=(R.last===prevDay(R.day)?R.streak:0)+1;R.last=R.day;R.total++;R.hist[R.day]=1;
  Object.keys(R.hist).sort().slice(0,-30).forEach(k=>delete R.hist[k]);
  let b=RD.base+Math.min(R.streak,RD.maxStreak)*RD.perStreak;
  if(ok===n){b+=RD.perfect;R.pw=giveP()}
  save.gold+=b;R.bonus=b;R.fin=true;
}
// Lanza el reto que toca (o el resumen si ya terminaron todos)
function rdNext(){
  const R=save.rd,plan=rdPlan(R.day);
  if(R.i>=plan.length){go("dres");return}
  const s=plan[R.i],label=(R.i+1)+"/"+plan.length,last=R.i===plan.length-1;
  if(s.t==="q")startDailyQuiz(s.q,label,last);else startWord(s.w,label,last);
}
// Reto de pregunta: usa la misma pantalla, reloj y comodines del quiz normal
function startDailyQuiz(q,label,last){
  rq={label,last,done:r=>rdRecord({t:"q",...r}),next:rdNext};
  book="";qs=[q];qi=0;stars=0;right=0;earned=0;$("lvlName").textContent="Pregunta bíblica";go("game");$("game").scrollTop=0;ask();
}
// ---- Pantalla "Retos diarios"
function drawRetos(){
  const R=rdInit(),plan=rdPlan(R.day),n=plan.length,fin=R.i>=n,str=rdStreak(R),d=keyDate(R.day);
  const date=DIAS[d.getDay()][0].toUpperCase()+DIAS[d.getDay()].slice(1)+" "+d.getDate()+" de "+MESES[d.getMonth()];
  let week="";
  for(let k=6;k>=0;k--){const x=keyDate(R.day);x.setDate(x.getDate()-k);const on=R.hist[dayKey(x)];
    week+=`<div class="wd${on?" on":""}${k?"":" today"}"><i>${on?ic("check"):""}</i><small>${DIAS[x.getDay()].slice(0,3)}</small></div>`}
  const rows=plan.map((s,i)=>{
    const r=R.res[i],w=s.t==="w",st=i<R.i?(r&&r.ok?"done":"miss"):i===R.i?"open":"wait";
    const note={done:w?"Resuelta":"Acertada",miss:w?"Sin resolver":"Sin acertar",open:"Te toca ahora",wait:"Pendiente"}[st];
    const icon=st==="done"?"check":st==="miss"?"close":w?"word":"ask";
    return `<div class="step ${st}"><span class="dot">${ic(icon)}</span><span class="stx"><b>${w?"Palabra bíblica":"Pregunta bíblica"}</b><small>${note}</small></span><span class="rt">${i<R.i?st3(r?r.s:0):""}</span></div>`;
  }).join("");
  let cta;
  if(fin){
    const ok=R.res.filter(r=>r.ok).length,sts=R.res.reduce((a,r)=>a+r.s,0),gold=R.res.reduce((a,r)=>a+r.g,0)+R.bonus;
    cta=`<div class="stats"><div>${ic("check")}<b>${ok}/${n}</b><small>Superados</small></div><div>${ic("star")}<b>${sts}</b><small>Estrellas</small></div><div>${ic("coin")}<b>+${gold}</b><small>Oro de hoy</small></div></div><button class="btn ghost" id="btnRdRes">Ver resumen</button><p class="rdNote">Nuevos retos en ${untilNew()}</p>`;
  }else cta=`<button class="btn gold" id="btnRd">${ic("play")} ${R.i?"Continuar":"Empezar"}</button>`+(str?`<p class="rdNote">Completa los retos de hoy para mantener tu racha</p>`:"");
  $("rdBody").innerHTML=`<div class="dcard"><p class="rdDate">${date}</p><div class="rdWeek">${week}</div><p class="rdStreak">${str?`${ic("flame")} Racha de retos: <b>${str}</b> ${str===1?"día":"días"}`:`Completa los ${n} retos de hoy para empezar una racha`}</p></div>${cta}<div class="rdList">${rows}</div>`;
  $("retos").scrollTop=0;
  const a=$("btnRd");if(a)a.onclick=rdNext;
  const b=$("btnRdRes");if(b)b.onclick=()=>go("dres");
}
// ---- Resumen al terminar los retos del día
function drawDres(){
  const R=save.rd;if(!R)return;
  const n=R.res.length,ok=R.res.filter(r=>r.ok).length,sts=R.res.reduce((a,r)=>a+r.s,0),gold=R.res.reduce((a,r)=>a+r.g,0),perfect=n>0&&ok===n;
  $("drIcon").innerHTML=ic(perfect?"crown":"check","huge");
  $("drTitle").textContent=perfect?"Día perfecto":"Retos completados";
  $("drRow").innerHTML=R.res.map(r=>`<span class="drDot ${r.ok?"ok":"no"}">${ic(r.t==="w"?"word":"ask")}</span>`).join("");
  $("drText").innerHTML=`Superaste <b>${ok}</b> de ${n} retos · ${sts} ${ic("star")}<br>Ganaste <b>${gold}</b> ${ic("coin")} en los retos y <b>${R.bonus}</b> ${ic("coin")} de bonus`+(R.pw?`<br>Comodín de regalo: ${R.pw}`:"")+`<br>${ic("flame","on")} Racha de retos: <b>${R.streak}</b> ${R.streak===1?"día":"días"}`;
}
// ---- Palabra bíblica (estilo Wordle): te dan las letras y las unes para formar la palabra
// Verde = letra en su lugar (se queda fija). Dorado = está en la palabra, pero en otro lugar.
let W=null,wUid=0;
function startWord(it,label,last){
  const word=norm(it[0]),n=word.length,tiles=[...word].map((ch,id)=>({ch,id}));
  let order,g=0;do{order=shuffle(tiles.map(t=>t.id))}while(g++<30&&order.map(i=>tiles[i].ch).join("")===word);
  W={uid:++wUid,it,word,show:[...it[0].normalize("NFC")],n,max:n>=7?4:3,rows:[],cur:Array(n).fill(-1),fix:Array(n).fill(false),tiles,order,over:false,won:false,used:{},last,fresh:-1};
  $("wCount").textContent=label;$("wClue").textContent=it[1];$("wFeedback").classList.add("hidden");$("word").classList.remove("over");
  go("word");$("word").scrollTop=0;if(document.activeElement&&document.activeElement.blur)document.activeElement.blur();wInfo();drawGrid();drawBank();wBtns();wPw();
}
function wInfo(){const left=W.max-W.rows.length;$("wMsg").textContent=left<=1?"Último intento":W.rows.length?`Te quedan ${left} intentos`:`Forma la palabra · ${left} intentos`}
function drawGrid(){
  const out=[];
  for(let r=0;r<W.max;r++){
    let cells="";
    for(let i=0;i<W.n;i++){
      let cls="cell",ch="",tag="div",att="";
      if(r<W.rows.length){const x=W.rows[r][i];ch=x.c;cls+=" "+x.s+(r===W.fresh?" new":"");att=` role="img" aria-label="${x.c}: ${x.s==="ok"?"en su lugar":"en otro lugar"}"`}
      else if(r===W.rows.length&&!W.over){
        const id=W.cur[i];cls+=" cur";
        if(id>=0){ch=W.tiles[id].ch;cls+=" f"+(W.fix[i]?" ok":"");if(!W.fix[i]){tag="button";att=` data-i="${i}" aria-label="Quitar la letra ${ch}"`}}
      }
      if(W.won&&r===W.rows.length-1)ch=W.show[i]; // al acertar se ve con sus tildes
      cells+=`<${tag} class="${cls}" style="--i:${i}"${att}>${ch}</${tag}>`;
    }
    out.push(`<div class="wrow" style="--n:${W.n}">${cells}</div>`);
  }
  $("wGrid").innerHTML=out.join("")+(W.rows.length?`<p class="legend"><span><i class="sw ok"></i>En su lugar</span><span><i class="sw near"></i>En otro lugar</span></p>`:"");
}
function drawBank(){
  const box=$("wBank"),key=W.uid+":"+W.order.join();
  if(box.dataset.k!==key){
    box.dataset.k=key;box.style.setProperty("--cols",W.n<=6?W.n:Math.ceil(W.n/2));
    box.innerHTML=W.order.map(id=>`<button class="tok" data-id="${id}" aria-label="Letra ${W.tiles[id].ch}">${W.tiles[id].ch}</button>`).join("");
  }
  box.querySelectorAll(".tok").forEach(b=>b.disabled=W.over||W.cur.includes(+b.dataset.id));
}
function wBtns(){
  $("btnWCheck").disabled=W.over||W.cur.includes(-1);
  $("btnWBack").disabled=W.over||!W.cur.some((id,i)=>id>=0&&!W.fix[i]);
  $("btnWMix").disabled=W.over;
}
function wPw(){document.querySelectorAll(".rp").forEach(b=>{const k=b.dataset.k;b.querySelector("em").textContent=save.pw[k];b.disabled=W.over||W.used[k]||save.pw[k]<1})}
const wRefresh=()=>{W.fresh=-1;drawGrid();drawBank();wBtns();wPw()};
function wPick(id){
  if(W.over||W.cur.includes(id))return;
  const i=W.cur.indexOf(-1);if(i<0)return;
  W.cur[i]=id;wRefresh();
}
function wDrop(i){if(W.over||W.fix[i]||W.cur[i]<0)return;W.cur[i]=-1;wRefresh()}
function wBack(){
  if(W.over)return;
  for(let i=W.n-1;i>=0;i--)if(W.cur[i]>=0&&!W.fix[i]){W.cur[i]=-1;break}
  wRefresh();
}
// Comprobar: las letras en su lugar quedan fijas y vuelves a intentar con las demás
function wCheck(){
  if(W.over||W.cur.includes(-1))return;
  const letters=W.cur.map(id=>W.tiles[id].ch),st=letters.map((c,i)=>c===W.word[i]?"ok":"near"),good=st.filter(s=>s==="ok").length;
  W.rows.push(letters.map((c,i)=>({c,s:st[i]})));W.fresh=W.rows.length-1;
  if(good===W.n){W.won=true;wEnd(true);return}
  if(save.vib&&navigator.vibrate)navigator.vibrate(120);
  if(W.rows.length>=W.max){wEnd(false);return}
  W.cur=W.cur.map((id,i)=>st[i]==="ok"?id:-1);W.fix=st.map(s=>s==="ok");
  wInfo();drawGrid();drawBank();wBtns();wPw();
}
// Pista: pone una letra correcta en su lugar y la deja fija
function wHint(){
  let free=[...Array(W.n).keys()].filter(i=>!W.fix[i]);if(!free.length)return false;
  const need=free.filter(i=>W.cur[i]<0||W.tiles[W.cur[i]].ch!==W.word[i]);if(need.length)free=need;
  const i=free[Math.random()*free.length|0],ch=W.word[i];
  const t=W.tiles.find(x=>x.ch===ch&&W.cur.indexOf(x.id)<0)||W.tiles.find(x=>x.ch===ch&&!W.fix[W.cur.indexOf(x.id)]);
  const j=W.cur.indexOf(t.id);if(j>=0)W.cur[j]=-1;
  W.cur[i]=t.id;W.fix[i]=true;return true;
}
// Fin de la palabra: acertada, sin intentos o saltada. Se guarda enseguida, igual que en las preguntas.
function wEnd(win,skip){
  W.over=true;let s=0,g=0,html;
  if(win){
    s=W.rows.length===1?3:W.rows.length===2?2:1;g=3+s*2;save.gold+=g;
    const before=lvlOf();save.xp+=10;
    if(lvlOf()>before){save.gold+=20;toast(`Subiste al nivel ${lvlOf()}: +20 ${ic("coin")}`)}
    html=`<h3>${PRAISE[Math.random()*PRAISE.length|0]}</h3><div class="st3">${st3(s)}</div><p>+${g} ${ic("coin")} · +10 XP</p><small>${W.it[2]}</small>`;
  }else html=`<h3>${skip?"Palabra saltada":"Se acabaron los intentos"}</h3><p>La palabra era: <b>${W.it[0]}</b></p><small>${W.it[2]}</small>`;
  html+=`<button class="btn gold" id="btnWNext">${W.last?"Ver resultado":"Siguiente"}</button>`;
  rdRecord({t:"w",ok:win,s,g});persist();
  $("word").classList.add("over");drawGrid();drawBank();wBtns();wPw();
  const f=$("wFeedback");f.innerHTML=html;f.classList.remove("hidden");
  $("btnWNext").onclick=rdNext;
  setTimeout(()=>f.scrollIntoView({behavior:"smooth",block:"end"}),450);
}
$("wBank").onclick=e=>{const b=e.target.closest(".tok");if(W&&b&&!b.disabled)wPick(+b.dataset.id)};
$("wGrid").onclick=e=>{const c=e.target.closest("button.cell");if(W&&c)wDrop(+c.dataset.i)};
$("btnWCheck").onclick=()=>{if(W)wCheck()};
$("btnWBack").onclick=()=>{if(W)wBack()};
$("btnWMix").onclick=()=>{if(W&&!W.over){W.order=shuffle(W.order);drawBank()}};
$("btnWQuit").onclick=()=>go("retos");
// Comodines en la palabra: Pista (el 50:50), +Intento (el Tiempo) y Saltar
document.querySelectorAll(".rp").forEach(b=>b.onclick=()=>{
  const k=b.dataset.k;if(!W||W.over||W.used[k]||save.pw[k]<1)return;
  if(k==="f"){if(!wHint())return;toast("Pista: una letra en su lugar")}
  if(k==="t"){W.max++;toast("+1 intento")}
  W.used[k]=1;save.pw[k]--;persist();
  if(k==="s"){W.fresh=-1;wEnd(false,true);return}
  wRefresh();wInfo();
});
// Con teclado (en computadora): letras, Borrar y Enter
document.addEventListener("keydown",e=>{
  if(cur!=="word"||!W||W.over||e.ctrlKey||e.metaKey||e.altKey)return;
  if(e.key==="Enter"){ // si hay un botón activo de esta pantalla, el navegador ya lo presiona solo
    const a=document.activeElement;if(!(a&&a.tagName==="BUTTON"&&!a.disabled&&$("word").contains(a)))wCheck();return}
  if(e.key==="Backspace"){wBack();return}
  const ch=norm(e.key);
  if(/^[A-ZÑ]$/.test(ch)){const t=W.order.map(i=>W.tiles[i]).find(x=>x.ch===ch&&!W.cur.includes(x.id));if(t)wPick(t.id)}
});
// ---- Perfil
function drawProfile(){
  $("pName").value=save.name;$("pLv").textContent="Nivel "+lvlOf();
  $("pXp").style.width=(save.xp%50)*2+"%";$("pXpTxt").textContent=(save.xp%50)+" / 50 XP · cada acierto da 10 XP";
  let tot=0;Object.values(save.stars).forEach(s=>tot+=s);
  const pw=Object.values(save.pw).reduce((a,b)=>a+b,0),bk=Object.keys(save.done).filter(passed).length;
  $("pStats").innerHTML=[["star",tot,"Estrellas"],["coin",save.gold,"Oro"],["book",bk,"Libros superados"],["flame",save.streak,"Racha de días"],["shield",pw,"Comodines"],["cal",save.rd&&save.rd.total|0,"Días de retos"]].map(s=>`<div>${ic(s[0])}<b>${s[1]}</b><small>${s[2]}</small></div>`).join("");
}
$("pName").onchange=e=>{save.name=e.target.value.trim()||"Peregrino";persist();refresh()};
// ---- Tienda
function drawShop(){
  const w=$("shopList");w.innerHTML="";
  const head=t=>{const h=document.createElement("h3");h.textContent=t;w.appendChild(h);const b=document.createElement("div");b.className="items";w.appendChild(b);return b};
  const sec=(t,items,kind)=>{
    const box=head(t);
    items.forEach(([id,n,p])=>{
      const own=save.own.includes(id),on=save[kind]===id,b=document.createElement("button");
      b.className="item"+(on?" on":"");
      b.innerHTML=`<div class="avatar ${kind==="av"?save.fr:id}">${ic(save.av)}</div><span>${n}</span><small>${on?ic("check")+" Puesto":own?"Usar":p+" "+ic("coin")}</small>`;
      if(kind==="av")b.firstChild.innerHTML=ic(id);
      b.onclick=()=>{
        if(!own){if(save.gold<p)return toast(`Te faltan ${p-save.gold} ${ic("coin")}`);save.gold-=p;save.own.push(id);toast("Compra realizada")}
        save[kind]=id;persist();refresh();drawShop();
      };
      box.appendChild(b);
    });
  };
  sec("Fotos de perfil",AV,"av");sec("Marcos",FR,"fr");
  const box=head("Comodines");
  Object.entries(PW).forEach(([k,[n,i,c,p]])=>{
    const b=document.createElement("button");b.className="item";
    b.innerHTML=`<div class="avatar">${ic(i,"pk")}</div><span>${n} ×${c}</span><small>${p} ${ic("coin")}</small><small style="color:var(--mute)">Tienes ${save.pw[k]}</small>`;
    b.onclick=()=>{if(save.gold<p)return toast(`Te faltan ${p-save.gold} ${ic("coin")}`);save.gold-=p;save.pw[k]+=c;persist();refresh();drawShop();toast(`+${c} ${n}`)};
    box.appendChild(b);
  });
}
// ---- Opciones y música (Web Audio, sin letra)
let ac,mi,master;
function music(on){
  clearInterval(mi);
  if(!on){if(master)master.gain.value=0;return}
  ac=ac||new (window.AudioContext||window.webkitAudioContext)();ac.resume();
  if(!master){master=ac.createGain();master.connect(ac.destination)}
  master.gain.value=.12;
  const sc=[261.6,293.7,329.6,392,440,523.3,392,329.6];let n=0;
  const play=(f,d,vol)=>{const o=ac.createOscillator(),g=ac.createGain();o.type="sine";o.frequency.value=f;
    g.gain.setValueAtTime(0,ac.currentTime);g.gain.linearRampToValueAtTime(vol,ac.currentTime+.4);g.gain.linearRampToValueAtTime(0,ac.currentTime+d);
    o.connect(g);g.connect(master);o.start();o.stop(ac.currentTime+d)};
  const tick=()=>{play(sc[n%8],3,.5);if(n%4===0)play(130.8,6,.4);n++};
  tick();mi=setInterval(tick,1500);
}
document.querySelectorAll(".openSet").forEach(b=>b.onclick=()=>$("settings").classList.remove("hidden"));
$("settings").onclick=e=>{if(e.target.id==="settings")e.target.classList.add("hidden")};
$("btnClose").onclick=()=>$("settings").classList.add("hidden");
$("chkMusic").onchange=e=>music(e.target.checked);
$("chkVib").checked=save.vib;$("chkVib").onchange=e=>{save.vib=e.target.checked;persist()};
$("btnReset").onclick=function(){
  if(this.dataset.s){Object.assign(save,{stars:{},done:{},gold:0,xp:0,name:"Peregrino",av:"cross",fr:"f0",own:["cross","f0"],pw:{f:2,t:1,s:1,e:1},streak:0,rd:null});persist();refresh();delete this.dataset.s;this.textContent="Borrar progreso";toast("Progreso borrado")}
  else{this.dataset.s=1;this.textContent="Toca otra vez para confirmar";setTimeout(()=>{delete this.dataset.s;this.textContent="Borrar progreso"},3000)}
};
refresh();daily();
