import './App.css';
import { UseStareDomo } from './Components/UseStateEx/UseStateDomo';
import { Todo } from './Components/UseStateEx/Todo';
import { UseEffectDemo1 } from './Components/UseEffectExp/UseEffectDemo1';
import { UseRefDemo } from './Components/UseRefExp/UseRefDemo';
import { AxiosDemo1 } from './Components/AxiosDemo/AxiosDemo1';
import { PrintContext } from './Context/PrintContext';
import { UserContextProvider } from './Context/UserContext';
import { RouterDemo } from './Components/Routeing/RouterDemo';
import { AuthContextProvider } from './Components/Routeing/AuthContext';
import {Provider} from "react-redux";
import { Store } from './Components/ReduxDemo/Store/Store';
import CountDisplay from './Components/ReduxDemo/components/CountDisplay';
import DataDisplay from './Components/ReduxDemo/components/DataDisplay';
import { Hook1 } from './Components/CustomHook/Hook1';
import { Hook2 } from './Components/CustomHook/Hook2';
import { Hook3 } from './Components/CustomHook/Hook3';
import { Memoised } from './Components/useMemoDemo/ReactMemoDemo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>-------------Start React router Dom example---------------</div>
      <AuthContextProvider>
      <RouterDemo />
      </AuthContextProvider>
      <div>-------------End React router Dom example---------------</div>
        <div>-------------Start UseState example---------------</div>
        <UseStareDomo />
        <Todo />
        <div>-------------End UseState example---------------</div>

        <div>-------------Start UseEffect example---------------</div>
        <UseEffectDemo1 />
        <div>-------------End UseEffect example---------------</div>

        <div>-------------Start UseRef example---------------</div>
        <UseRefDemo />
        <div>-------------End UseRef example---------------</div>

        <div>-------------Start axios example---------------</div>
        <AxiosDemo1 />
        <div>-------------End axios example---------------</div>

        <div>-------------Start contextAPI example---------------</div>
        <UserContextProvider >
        <PrintContext />
        </UserContextProvider>
        <div>-------------End contextAPI example---------------</div>


        <div>-------------Start Redux-1 example---------------</div>
        <Provider store = {Store}>
        <CountDisplay/>
        <DataDisplay />
        </Provider>
        <div>-------------End Redux-1 example---------------</div>
        <div>-------------Start Custom hook example---------------</div>
         <Hook1 />
         <Hook2 />
         <Hook3 />
        <div>-------------End Custom hook example---------------</div>
        <div>-------------Start memo and callback example---------------</div>
        <Memoised prop={"12/4/2024"}/>
        <Memoised prop={"12/4/2024"}/>
        
        <div>-------------End memo and callback example---------------</div>
      </header>
    </div>
  );
}

export default App;
