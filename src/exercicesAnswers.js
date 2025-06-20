let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]

//Exercice 1 : Créer un tableau days et lui ajouter les jours de la semaine.
let createArray = function () {
  return days
}

//Exercice 2 : Retourner le 3ème élément du tableau days', function() {
let returnThirdElement = function (array) {
  return array[2]
}

//Exercice 3 : Afficher la valeur de l\'index 3 du tableau days.', function() {
let returnThirdIndex = function (array) {
  return array[3]
}

//Exercice 4 : Changer le 2ème élément du tableau languages par php, function() {
let changeSecondElement = function (array) {
  array.splice(1, 1, "php") // ou array[1] = "php"
  return array
}

//Exercice 5 : Ajouter ruby et python à la fin du tableau languages.', function() {
let addAtTheEnd = function (array) {
  array.push("ruby", "python")
  return array
}

//Exercice 6 : Ajouter html et css au début du tableau languages.', function() {
let addAtFirst = function (array) {
  array.unshift("html", "css")
  return array
}

//Exercice 7 : Supprimer le premier élément du tableau languages.', function() {
let removeFirstElement = function (array) {
  array.shift()
  return array
}

//Exercice 8 : Supprimer le dernier élément du tableau languages.', function() {
let removeLastElement = function (array) {
  array.pop()
  return array
}



//Exercice 9 : Créer un tableau associatif person. Lui ajouter les index name, age et city avec les valeurs Jean, 45, Paris.', function() {
let createPerson = function () {
  // ***************************************************************************************************************************************************************
}

//Exercice 10 : Retourner la valeur de l\'index nom du tableau person.', function() {
let returnName = function (array) {
  // ***************************************************************************************************************************************************************
}



//Exercice 11 : Stocker tous les index du tableau person dans des variables séparées et les retourner dans une même phrase de type : "Bonjour, je suis Jean. J\'ai 45 ans et j\'habite Paris."', function() {
let returnSentence = function (array) {
  let nom = "Jean."
  let age = "45"
  let city = "Paris."

  array = ("Bonjour, je suis " + nom + " J'ai " + age + " ans et j'habite " + city)

  return array

  // Correction alternative : 
  // let nom = array[0]
  // let age = array[1]
  // let city = array[2]
  // return "`Bonjour, je suis ${nom}. J'ai ${age} ans et j'habite ${city"
}

//Exercice 12 : Transformer la variable string en tableau.', function() {
let returnArray = function (string) {
  string = string.split(",")
  return string
}

//Exercice 13 : Trier le tableau array.', function() {
let sortArray = function (array) {
  array.sort()
  return array
}

//Exercice 14 : Transformer le tableau array en chaîne de caractères', function() {
let returnString = function (array) {
  array = array.toString()
  return array
}
