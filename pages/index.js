//Hook atualiza o valor das variaveis quando algo é modificado
import { useState } from "react";
import { Formulario } from "./components/Formulario";
import { Lista } from "./components/Lista";

function App() {
    //utiliza o hook useState para atualizar as tasks automaticamente quando há uma modificação
    const [tasks, setTask] = useState([]);

    //Adiciona tasks e apresenta na tela com as divs
    const addTask = (task) => {
        const newTask = {
            task: task,
            isComplete: false
        }

        setTask([...tasks, newTask]);
    };

    const deletarTarefa = (index) => {
        let newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTask(newTasks);
    };

    const toggleComplete = index => {
        const newTasks = [...tasks];
        newTasks[index].isComplete = !newTasks[index].isComplete;
        setTask(newTasks);
    };

    return (
        <div className="App">
            <Formulario onSave={addTask} />
            <Lista tasks={tasks} deletarTarefa={deletarTarefa} completeTask={toggleComplete}/>
        </div>
    );
}

//exporta a aplicação para o localhost
export default App