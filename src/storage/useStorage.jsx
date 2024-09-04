import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const myStorage = (set) => ({
    todo:[{id:1,task:"Wake up"},{id:2,task:"Shower"}],
    addTask: (task) => set(prev=>({todo:[...prev.todo,{id:prev.todo.length+1,task:task}]})),
    delTask: (id) => set(prev=> ({todo:[...prev.todo].filter(el=>el.id !== id)}))
})


const usePersist = {
    name: 'storage01',
    storage: createJSONStorage(()=>localStorage)
}



const useStorage = create(persist(myStorage,usePersist))


export default useStorage