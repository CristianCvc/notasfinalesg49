// Se definen las variables "string" preguntadas al usuario con respuesta por defecto//
var nalum = prompt("Ingrese su Nombre", "Cristian Vera");
var ncarr = prompt("Ingrese Nombre de su Carrera", "Desarrollo Web");
var ramo1 = prompt("Ingrese Nombre de Primer Ramo", "Html");
var ramo2 = prompt("Ingrese Nombre de Segundo Ramo", "Css");
var ramo3 = prompt("Ingrese Nombre de Tercer Ramo", "Javascript");
// Se definen las variables numéricas preguntadas al usuario//
var notax1 = prompt("Ingrese Nota 1 de " + ramo1, "6");
var notax2 = prompt("Ingrese Nota 2 de " + ramo1, "5");
var notax3 = prompt("Ingrese Nota 3 de " + ramo1, "7");
var notay1 = prompt("Ingrese Nota 1 de " + ramo2, "6");
var notay2 = prompt("Ingrese Nota 2 de " + ramo2, "5");
var notay3 = prompt("Ingrese Nota 3 de " + ramo2, "4");
var notaz1 = prompt("Ingrese Nota 1 de " + ramo3, "2");
var notaz2 = prompt("Ingrese Nota 2 de " + ramo3, "3");
var promez = prompt("Ingrese promedio con el que espera terminar en " + ramo3, "4");
//Se definen las variables numéricas como "Float" para ser usadas como cifras con decimales//
notax1 = parseFloat(notax1);
notax2 = parseFloat(notax2);
notax3 = parseFloat(notax3);
notay1 = parseFloat(notay1);
notay2 = parseFloat(notay2);
notay3 = parseFloat(notay3);
notaz1 = parseFloat(notaz1);
notaz2 = parseFloat(notaz2);
promez = parseFloat(promez);
//Se hacen los cálculos necesarios//
promiz = eval (promez*3);
sumax = eval(notax1+notax2+notax3)
promx = eval(sumax/3)
sumay = eval(notay1+notay2+notay3)
promy = eval(sumay/3)
notaz3 = eval(promiz-notaz1-notaz2)
//construcción de html en la pagina usando javascript//
document.write("<div class='container-fluid'>");
document.write(" <div class='row'>");
document.write("   <div class='col font-weight-bold display-4'>Notas finales</div>");
document.write("   <div class='col'>");
document.write("   </div>");
document.write("   <div class='col'>");
document.write("     <img src='assets/img/logo-academia.png' height=100 alt='Imagen Logo Academia'>");
document.write("   </div>");
document.write(" </div>");
document.write("</div>");
document.write("<div class='container-fluid'>");
document.write("<ul class='list-inline'>");
document.write("<li class='list-inline-item font-weight-bold'>Nombre:</li>");
document.write("<li class='list-inline-item ml-5 pl-5'>" + nalum + "</li>");
document.write("</ul>");
document.write("</div>");
document.write("<div class='container-fluid'>");
document.write("<ul class='list-inline'>");
document.write("<li class='list-inline-item font-weight-bold'>Carrera:</li>");
document.write("<li class='list-inline-item ml-5 pl-5'>" + ncarr + "</li>");
document.write("</ul>");
document.write("</div>");
document.write("<div class='container-fluid'>");
//Se construye la tabla con bootstrap//
document.write("<table class='table'>");
document.write("  <thead class='thead-dark'>");
document.write("    <tr>");
document.write("      <th scope='col'>Ramo</th>");
document.write("      <th scope='col'>Nota 1</th>");
document.write("      <th scope='col'>Nota 2</th>");
document.write("      <th scope='col'>Nota 3</th>");
document.write("      <th scope='col'>Promedio</th>");
document.write("    </tr>");
document.write("  </thead>");
document.write("  <tbody>");
document.write("    <tr>");
document.write("      <th scope='row'>" + ramo1 + "</th>");
document.write("      <td>" + notax1 + "</td>");
document.write("      <td>" + notax2 + "</td>");
document.write("      <td>" + notax3 + "</td>");
document.write("      <td>" + promx + "</td>");
document.write("    </tr>");
document.write("    <tr>");
document.write("      <th scope='row'>" + ramo2 + "</th>");
document.write("      <td>" + notay1 + "</td>");
document.write("      <td>" + notay2 + "</td>");
document.write("      <td>" + notay3 + "</td>");
document.write("      <td>" + promy + "</td>");
document.write("    </tr>");
document.write("    <tr>");
document.write("      <th scope='row'>" + ramo3 + "</th>");
document.write("      <td>" + notaz1 + "</td>");
document.write("      <td>" + notaz2 + "</td>");
document.write("      <td>" + notaz3 + "</td>");
document.write("      <td>" + promez + "</td>");
document.write("    </tr>");
document.write("  </tbody>");
document.write("</table>");
document.write("</div>");
document.write("<div class='container-fluid'>");
//Ultimo texto de la pagina con explicación del resultado calculado//
document.write("<p>Para aprobar el ramo " + ramo3 + " con nota " + promez + " necesitas obtener un " + notaz3 + " en la nota 3</p>");
document.write("</div>");
