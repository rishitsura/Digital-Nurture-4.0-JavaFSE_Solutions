import CalculateScore from './CalcualateScore.js';

function App() {
 return (
   <div>
     <CalculateScore 
       Name={"Steve"}
       School={"DNV Public School"}
       total={284}
       goal={300}
     />
   </div>
 );
}

export default App;