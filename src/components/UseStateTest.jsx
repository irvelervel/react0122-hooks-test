import { useState } from 'react'
import { Button } from 'react-bootstrap'

// REGOLE DEGLI HOOKS
// 1) USARE GLI HOOKS SOLAMENTE NEI COMPONENTI REACT A FUNZIONE
// 2) USARE GLI HOOKS NEL CORPO PRINCIPALE DELLA FUNZIONE, PRIMA
// DEL RETURN STATEMENT E FUORI DA CICLI, FUNZIONI, CONDIZIONI, ECC.

// useState() -> permette di creare una variabile di stato alla volta

// state = {
//     name: 'Stefano' <-- noi andiamo direttamente a dichiarare questo
// }

const UseStateTest = () => {
  // usami qui :)
  const [name, setName] = useState('Stefano')
  // useState() torna un array con due valori
  // il 1° valore è la variabile di stato stessa
  // il 2° valore è l'unica funzione in grado di assegnare un nuovo valore
  // al 1° valore
  // la nomenclatura classica prevede che il secondo elemento si chiami
  // "set" + il nome del primo elemento
  // il valore iniziale della variabile di stato viene passato come argomento
  // a useState

  return (
    <div>
      <h1>TITOLO PRINCIPALE</h1>
      <p>Nome attuale: {name}</p>
      <Button
        onClick={() => setName(name === 'Stefano' ? 'Flavio' : 'Stefano')}
      >
        CAMBIAMI
      </Button>
    </div>
  )
}

export default UseStateTest
