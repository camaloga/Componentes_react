"use client"
import React, {useState} from 'react'
import Todo from './Todo'
import styles from "../app/page.module.css"

const Form = () => {
    const[todo,setTodo]=useState({})
    const[marca,setMarca]=useState({})
    const[cantidad,setCantidad]=useState({})
    const[precio,setPrecio]=useState({})

    const[todos,setTodos]=useState([
        {todo: 'todo 21', marca: 'marca 1'},
    ])
    const[marcas,setMarcas] = useState([
        {marca: 'marca 1'}
    ])
    const handleChange=e=>setTodo({[e.target.name]:e.target.value})&setMarca({[e.target.name]:e.target.value})
    const handleClick=e=>{
        if(Object.keys(todo).length===0|| todo.todo.trim()===''){
            alert('el campo no puede ser vacio')
            return
        }
        setTodos([...todos,marca])
    }
    const deleteTodo=indice=>{
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return (
        <>
        <form onSubmit={e=>e.preventDefault()}>
            <label>PRODUCTO</label><br/>
            <input type="text" className={styles.form_input} name='todo' onChange={handleChange}/>
            <br /><label>MARCA</label><br/>
            <input type="text" className={styles.form_input} name='marca' onChange={handleChange}/>
            <br /><label>CANTIDAD</label><br/>
            <input type="text" className={styles.form_input} name='cantidad' onChange={handleChange}/>
            <br /><label>PRECIO</label><br/>
            <input type="text" className={styles.form_input} name='precio' onChange={handleChange}/>
            <button className={styles.form_button} onClick={handleClick}>AGREGAR</button>
        </form>
        {
            todos.map((value,index)=>(
                <Todo todo={value.marca} key={index} index={index} deleteTodo={deleteTodo}/>))
        }
        </>
    )
}
export default Form