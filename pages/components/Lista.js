import React, { useState } from "react";

//lista com botões para exclusão e conclusão
export function Lista(props) {
    const { tasks } = props;

    return (
        <div className = "lista-de-tarefas">
            {tasks.map((task, index) => {
                return (
                    <div className="tarefas" key={index}>
                        <span>{task}</span>

                        <div className="excluir-concluido">
                            <button className="excluir" onClick={() => props.deletarTarefa(index)}>Excluir</button>
                            <button className="concluido">Concluido</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Lista