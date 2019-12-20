# lab-game-ironshot

Es un juego en el que su finalidad es conseguir mantenerse con vida gracias a la ayuda de bullet bill.

Se va complicando poco a poco

El comportamiento de los objetivos varian durante el juego:
    La velocidad por la que se muestran en pantalla es aleatoria
    Pueden aparecer de diferentes lados y altura de la pantalla
    La velocidad de los objetivos va incrementando cada vez que destruyas uno


Esta hecho de forma que aparencen objetivos de diferentes puntos de la imagen. Tenemos una "torre" de la que podemos disparar con la tecla "space"para eliminar los elementos y poder ganar o perder. Se generan con una velocidad random para que no sea tan secuencial y esta velocidad va incrementando a medida que los vamos impactando con las balas.
La torre va rebotando en los lados de la imagen aunque podemos cambiar la direccion con la tecla "down"
Cada vez que un objetivo sale de la imagen se borra y te resta una vida.


Las funciones mas usadas en la manipulacion de Arrays son:

forEach => Para recorrer los arrays de objetivos y balas
splice => Para ir eliminando los elementos en las colisiones al chocar
some => Para cuando un elemento del array cumpla la condicion
push  => Para añadir elementos a los arrays 
indexOf => Para devolver el indice de las balas u objetivos
filter => Para limpiar los elementos que salen del canvas