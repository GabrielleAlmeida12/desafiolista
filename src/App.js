import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./lista.css"

export default function Lista() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        
        <div id="container">
          
            <form
                onSubmit={event => {
                event.preventDefault();

                const cad = {
                  id:Math.random(),
                  value1,
                  value2,
                  value3
                }
                setTodos(state=>[...state, cad]);
            }}
            >
              <div className="topo">
                <input
                    type="text"
                    placeholder="Nome do livro"
                    value={value1}
                    onChange={event => setValue1(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Nome do autor"
                    value={value2}
                    onChange={event => setValue2(event.target.value)}
                />
                <input
                    type="date"
                    placeholder="Data da publicação"
                    value={value3}
                    onChange={event => setValue3(event.target.value)}
                />
                <button type="submit">Adicionar</button>
              </div>
            </form>

            <div>
              <div>
                <section>
                <h1>Listagem de Livros</h1>
                    <p>Bibliografia</p>
                    <div className="container" >
                    <table>
                    <thead>
                      <tr>
                        <th>Nome do Livro </th>
                        <th>Nome do Autor </th>
                        <th>Data de Publicação </th>
                      </tr>
                    </thead>
                    <tbody>
                    {todos.map((elemento) => (
                      <tr>
                        <td>{elemento.value1}</td>
                        <td>{elemento.value2}</td>
                        <td>{elemento.value3}</td>
                      </tr>
                    ))}
                    </tbody>
                    </table>
                    </div>
                  </section>
               </div> 
            </div>

        </div>
  );
}