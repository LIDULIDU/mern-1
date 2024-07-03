import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";
export const useWorkoutsContext = ()=>{
    const Context = useContext(WorkoutContext)
if(!Context){
    throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
}


    return Context
}