// import { useEffect, useState } from "react";
// import ToDoItem from "./to-do-item.component";

// export default function ToDoList() {
//     // 1. Manage the list with useState
//     const initialToDos = [
//         {
//             name: 'Create React app',
//             done: false
//         }, {
//             name: 'Buy groceries',
//             done: true
//         }, {
//             name: 'Study some react',
//             done: false
//         },
//     ];
//     const [toDoList, setToDoList] = useState<any>(initialToDos);


//     const [newTodo, setNewTodo] = useState('');

//     const handleInputChange = (event) => {
//         setNewTodo(event.target.value);
//     };

//     const addNewToDo = () => {
//         if (newTodo.trim() === '') return;
//         setToDoList(prevList => {
//             return [...prevList, { name: newTodo, done: false }];
//         });
//         console.log(toDoList)
//     };

//     useEffect(() => {
//         const currentToDos = localStorage.getItem('toDos');
//         console.log(currentToDos)
//         if (currentToDos) {
//             console.log('setting localstorage')
//             setToDoList(JSON.parse(currentToDos));
//         } else {
//             setToDoList(initialToDos);
//         }
//         console.log(toDoList);

//     }, []);

//     // useEffect(() => {
//     //     localStorage.setItem('toDos', JSON.stringify(toDoList));
//     // }, [toDoList]);
//     return (
//         <>
//             <div>
//                 <form onSubmit={(event) => {
//                     event.preventDefault();
//                     addNewToDo();
//                 }}>
//                     <input
//                         type="text"
//                         className='text-black bg-amber-50'
//                         value={newTodo}
//                         onChange={handleInputChange}
//                         placeholder="Add a new to-do"
//                     />
//                     <button type="submit" className='flex justify-end'>+</button>
//                 </form>
//                 {toDoList ? toDoList.map((item) => { return <ToDoItem props={item} /> }) : <p>No To-Dos</p>}
//             </div>
//         </>
//     );
// }