import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counterSlice'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <h2>hey, redux learning is happening!!</h2>
    <button onClick={()=> dispatch(increment())} >increment</button>
    <button onClick={()=> dispatch(decrement())} >decrement</button>
    <div>count: {count}</div>
    </>
  )
}

export default App
