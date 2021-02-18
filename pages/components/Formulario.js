import React, { useState } from "react";

//Insere a tarefa escrita na lista de tarefas
export function Formulario(props) {
    const { onSave } = props;

    const [text, setText] = useState("");

    return (
        <form className="entrada-tarefas" onSubmit={e => e.preventDefault()}>
            <input placeholder="Escreva sua tarefa" className="campo-de-tarefas" value={text || ""} onChange={(e) => setText(e.currentTarget.value)} />
            <button className="botao-salvar" onClick={() => {setText(""); onSave(text)}}>Salvar</button>
        </form>
    );
}

export default Formulario