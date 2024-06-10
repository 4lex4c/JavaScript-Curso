# Variables en JavaScript

En JavaScript, las variables son utilizadas para almacenar datos.

## Variables 

### Declaración de Variables 
En JavaScript, puedes declarar variables usando `var`, `let` y `const`.

- `var`: Declaraciones con alcance de función.
- `let`: Declaraciones con alcance de bloque.
- `const`: Declaraciones con alcance de bloque y valor constante (no se puede reasignar).

#### Reglas de Nomenclatura
- Los nombres de las variables deben comenzar con una letra, un signo de dólar ($) o un guion bajo (_).
- Pueden contener letras, números, guiones bajos y signos de dólar.
- No pueden usar palabras reservadas de JavaScript.

##### Ejemplos
```javascript
var nombre = "Alex"; // Variable con var
let edad = "16"; // Variable con let
const ciudad = "Buenos Aires, Capital Federal"; // Variable con const
``` 

###### Buenas Prácticas
- Usar `const` por defecto, y sólo usar `let` si la variable será reasignada.
- Evitar usar `var` debido a problemas de alcance y hoisting.
- Escoger nombres de variables descriptivos y significativos.