import { useState } from "react"

export const useToggle = (initialVal = false) =>{
    // const [isVisible, setIsVisible] = useState(false);
    const [state, setState] = useState(initialVal);

    const Toggle = () =>{
        setState((prev)=> !prev)
    }

    return [state, Toggle]
}