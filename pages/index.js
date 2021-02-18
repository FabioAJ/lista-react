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
        <div className="entrada-tarefas">
            <input placeholder="Escreva sua tarefa" className="campo-de-tarefas" onChange={(e) => setText(e.currentTarget.value)} />
            <button className="botao-salvar" onClick={() => onSave(text)}>Salvar</button>
        </div>
    );
}

//lista com botões para exclusão e conclusão
function Lista(props) {
    const { tasks } = props;

    return (
        <div className = "lista-de-tarefas">
            {tasks.map((task) => {
                return (
                    <div className="tarefas">
                        <span>{task}</span>

                        <div className="excluir-concluido">
                            <button className="excluir">Excluir</button>
                            <button className="concluido">Concluido</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

//exporta a aplicação para o localhost
export default App