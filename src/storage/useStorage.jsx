import { create } from "zustand";
import { persist } from "zustand/middleware";



const usePersist = {name: 'storage1',
    partialize: (state) => ({todo:state.todo})
}


const storage1 = (set) => ({
    todo:[{id:1,task:"Wake up"},{id:2,task:"Shower"}],
    addTask: (task) => set(prev=>({todo:[...prev.todo,{id:prev.todo.length+1,task:task}]})),
    delTask: (id) => set(prev=> ({todo:[...prev.todo].filter(el=>el.id !== id)}))
})


export const useStorage = create(persist(storage1,usePersist))






