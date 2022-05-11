import './App.css';
import styled from 'styled-components' 
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/store';

function App() {
  const counter=useSelector((state)=>state.counter)
  const dispatch=useDispatch();
  const increment = ()=>{
    dispatch(actions.increment())
  }
  const decrement = ()=>{
    dispatch(actions.decrement())
  }
  const addBy10 = ()=>{
    dispatch(actions.addBy10(10))
  }
  const reset = ()=>{
    dispatch(actions.reset())
  }
  return (
    <Wrapper className="App">
      <Card>
       <h2>Count:{counter}</h2>
       <ButtonGroup>
         <AddButton onClick={increment}>
             Add
         </AddButton>
         <SubstractButton onClick={decrement}>
              Substract
         </SubstractButton>
         <AddBy10Button onClick={addBy10}>
              Add by 10
         </AddBy10Button>
         <ResetButton onClick={reset}>
              Reset
         </ResetButton>
       </ButtonGroup>
      </Card>
      </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
width:100vw;
height:100vh;
background-color:rgba(23,36,32,0.8);
`
const Card = styled.div`
   width:250px;
   height:200px;
   background-color:red;
   margin:0 auto;
   position:absolute;
   top:90px;
   left:200px;
   h2{
     color:white;
     text-align:center;
     margin-top:10px;
   }
`
const ButtonGroup= styled.div`
text-align:center;
padding:15px;
cursor:pointer;
margin-top:15px;

`
const AddButton= styled.div`
       color:white;
       margin-bottom:9px;
       background:black;
       border-radius:30px;
`
const SubstractButton= styled.div`
color:white;
margin-bottom:9px;
background:black;
border-radius:30px;
`
const AddBy10Button= styled.div`
color:white;
margin-bottom:9px;
background:black;
border-radius:30px;
`
const ResetButton= styled.div`
color:white;
margin-bottom:9px;
background:black;
border-radius:30px;
`
