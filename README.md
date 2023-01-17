### Proyecto simple de CV
#### Por Pablo Díaz.

Incluye botones para modo claro y modo oscuro. Lo hice mediante una función que itera sobre los contenidos de un arreglo, cambiando el contraste según el botón elegido.

Incluye también una lista de selección para alternar entre español e inglés. La lista podría haber sido con links a distintas páginas, cada una con una traducción distinta, pero quería probar si podía lograr el mismo resultado usando una función con JavaScript.
La función en cuestión es bastante cruda y mucho menos automática que la de los modos de colores. Intenté primero guardar la traducción en un archivo .json para después llamarla con JavaScript y almacenar cada ID adentro de una lista o diccionario: así me ahorraría tener que escribir toda la traducción adentro de la función... pero tuve problemas con la función *fetch* para poder almacenar los contenidos del archivo .json en variables.

Los datos personales del CV y la imagen utilizada provienen de (https://randomuser.me/).
Los contenidos del CV provienen de [ThisResumeDoesNotExist](https://thisresumedoesnotexist.com/), un generador de CV por Inteligencia Artificial. El texto original fué alterado para corregir algunos detalles con el texto generado, traducido al español y re-traducido nuevamente al inglés.
La barra de navegación fue importada mediante Bootstrap.
