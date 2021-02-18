//Hook atualiza o valor das variaveis quando algo é modificado
import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Lista } from "./components/Lista";

function App() {
    //utiliza o hook useState para atualizar as tasks automaticamente quando há uma modificação
    const [tasks, setTask] = useState([]);

    //Adiciona tasks e apresenta na tela com as divs
    const addTask = (task) => {
        setTask([...tasks, task]);
    };

    const deletarTarefa = (index) => {
        let newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTask(newTasks);
    };

    return (
        <div className="App">
            <Formulario onSave={addTask} />
            <Lista tasks={tasks} deletarTarefa={deletarTarefa}/>
        </div>
    );
}

//exporta a aplicação para o localhost
export default App