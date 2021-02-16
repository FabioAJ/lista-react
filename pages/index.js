//Hook atualiza o valor das variaveis quando algo é modificado
import { useState } from "react";

function App() {
    //utiliza o hook useState para atualizar as tasks automaticamente quando há uma modificação
    const [tasks, setTask] = useState([]);

    //Adiciona tasks e apresenta na tela com as divs
    const addTask = (task) => {
        setTask([...tasks, task]);
    };

    return (
        <div className="App">
            <Formulario onSave={addTask} />
            <Lista tasks={tasks} />
        </div>
    );
}

//Insere a tarefa escrita na lista de tarefas
function Formulario(props) {
    const { onSave } = props;

    const [text, setText] = useState("");

    return (
        <div>
            <input onChange={(e) => setText(e.currentTarget.value)} />
            <button onClick={() => onSave(text)}>Salvar</button>
        </div>
    );
}

//lista com botões para exclusão e conclusão
function Lista(props) {
    const { tasks } = props;

    return (
        <div>
            {tasks.map((task) => {
                return (
                    <div>
                        <span>{task}</span>
                        <button>Excluir</button>
                        <button>Concluido</button>
                    </div>
                );
            })}
        </div>
    );
}

//exporta a aplicação para o localhost
export default App