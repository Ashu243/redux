import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, increment_5, incrementByAmount } from './redux/features/counterSlice'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  // useSelector(state => console.log({state}))

  return (
    <>
    <h2>hey, redux learning is happening!!</h2>
    <button onClick={()=> dispatch(increment())} >increment</button>
    <button onClick={()=> dispatch(decrement())} >decrement</button>
    <button onClick={()=> dispatch(increment_5())} >increment by 5</button>
    <button onClick={()=> dispatch(incrementByAmount(10))} >increment by Amount</button>
    <div>count: {count}</div>
    </>
  )
}

export default App
