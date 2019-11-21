# Principios SOLID con Typescript

Este repositorio es una aplicación simple desarrollada con Typescript ejemplificando el uso de principios SOLID.

Los principios SOLID son un conjunto de técnicas que persiguen construir que sea:

 - Flexible.
 - Mantenible.
 - Escalable.
 - Evolutivo.
 - Sólido.
 
Es por eso que SOLID se suele relacionar a la agilidad, ya que el desarrollo iterativo por sprints puede sacar provecho de estos objetivos.

Éste es un resumen de los principios.

## Single responsability principle

Una clase debe tener un único motivo para cambiar.
Es mejor tener muchas clases que tengas responsabilidad acotadas que una que lo haga todo.
Una de las formas de detectar que una clase tiene demasiadas responsabilidades es notar que cambia mucho.
Otra forma es que no opera sobre sus propios atributos.

## Open close principle

Dejar abierto el códigio para la extensión y cerrado a la modificación.
El código debería permitir la extensión de su funcionalidad mediante la inyección de dependencias o técnicas similiares. Pero debería dejar como privadas aquellas secciones del código que representan la lógica de negocio y no se quiere que se pueden modificiar.


## Liskov sustitution principle

En una jerarquía de clases, las clases hijas deben por ser intercambiables si se hace referencia al padre.
Esto sería, por ejemplo, un método que recibe como parámetro *BaseClass* y se le puede pasar cualquier clase hija, por ejemplo *ChildClassA* o *ChildClassB* y el código dentro del método trata a ese parametro simpre igual sin saber realmente de qué tipo es.
Una forma de detectar una violación al principio de sustituación de Liskov es la existencia de condiciones en el código que verificiar si la clases es de uno u otro tipo.

## Interface segregation principle

Es mejor tener interfaces pequeñas y no complejas, de modo de que quien implemente una interface no deba implementar métodos que no aplican a un caso particular.
Por ejemplo una interface que implemente muchos métodos para soportar muchas funcionalidad obligará a quien la implemente a implementar todos los métodos, es mejor siempre buscar la forma de que las interfaces sean pequeñas y si es necesario implementar más de una donde haga falta.

## Dependency inversion principle

Siempre es mejor depender de abastracciones y no de implementaciones concretas.
Es decir que es mejor que nuestro código depende de una clase abstracta, una interface o similiar en lugar de una implementación.

## ¿Y por qué usar Typescript?

Varios de los principios se podrían usar en Javascript hoy en día, más con ES5 y 6, sin embargo ya que SOLID se apoya en POO, tipificación, interfaces, etc. usando Typescript podremos cubrir todos los principios de SOLID. Adicionalemente Typescript nos permite generar Javscript para entornos que no soporten las últimas versiones pero sacando provecho de las características de Typescript.

## Otras prácticas para tener en cuenta.

Además de SOLID, enfrentar el reto de construir código extensible, sólido, reutilizable y mantenible es bueno tener en cuenta otros principio relacionados con SOLID y el desarrollo ágil:
- Clean code
- KISS
- YAGNI
- DRY
