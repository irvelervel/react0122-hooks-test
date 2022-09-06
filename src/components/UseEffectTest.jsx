// REGOLE DEGLI HOOKS
// 1) USARE GLI HOOKS SOLAMENTE NEI COMPONENTI REACT A FUNZIONE
// 2) USARE GLI HOOKS NEL CORPO PRINCIPALE DELLA FUNZIONE, PRIMA
// DEL RETURN STATEMENT E FUORI DA CICLI, FUNZIONI, CONDIZIONI, ECC.

import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const UseEffectTest = () => {
  // qua ci metterò gli hooks
  // useEffect porta i lifecycle methods nei componenti a funzione

  const [name, setName] = useState('Giovanni')
  const [counter, setCounter] = useState(0)

  //   let myInterval = null

  useEffect(() => {
    console.log('componentDidUpdate senza freni :)')
  }) // <-- come un componentDidUpdate!

  useEffect(() => {
    console.log('componentDidUpdate che funziona solo con counter :)')
  }, [counter]) // <-- come un componentDidUpdate!

  useEffect(() => {
    console.log('come componentDidMount!')
  }, []) // <-- il secondo parametro, se presente, è un array di dipendenze
  // specifica come e quante volte la callback (il primo parametro) verrà
  // RIESEGUITA. Ogni elemento dell'array verrà tracciato da useEffect,
  // e ad ogni cambiamento di esso, la callback verrà richiamata
  // se lascio l'array di dipendenze VUOTO, sto specificando che non intendo
  // essere in ascolto di NIENTE per RIPETERE la mia callback -> componentDidMount

  // off-topic, sostituzione di componentWillUnmount
  //   useEffect(() => {
  //     return () => {
  //       clearInterval(myInterval)
  //       console.log('bye bye') // <-- quando il componente viene smontato
  //     }
  //   }, []) // <-- due utilizzi fondamentali:
  //   // 1) chiudere socket o canali di comunicazione aperti
  //   // 2) serve a pulire timeouts pendenti

  //   useEffect(() => {
  //     myInterval = setInterval(() => {
  //       console.log('il tempo che passa...')
  //     }, 1000)
  //   }, [])

  return (
    <div>
      <h1>useEffect TEST</h1>
      <p>ciao</p>
      <Button
        onClick={() => setName(name === 'Giovanni' ? 'Manuel' : 'Giovanni')}
      >
        CLICCAMI
      </Button>
      <p>{name}</p>
      <h3 onClick={() => setCounter(counter + 3)}>COUNTER IS {counter}</h3>
    </div>
  )
}

export default UseEffectTest
