import React, { useState } from "react";

//lista com botões para exclusão e conclusão
export function Lista(props) {
    const { tasks } = props;

    return (
        <div className = "lista-de-tarefas">
            {tasks?.map((task, index) => {
                return (
                    <div className="tarefas" key={index}>
                        <span className={task.isComplete ? "complete" : ""}>{task.task}</span>

                        <div className="excluir-concluido">
                            <button className="excluir" onClick={() => props.deletarTarefa(index)}>Excluir</button>
                            <button className="concluido" onClick={() => props.completeTask(index)}>{task.isComplete ? "Não concluído" : "Concluído"}</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Lista