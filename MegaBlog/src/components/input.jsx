import React, {useId} from "react";




const Input = React.forwardRef(
    function Input({
        
    }, ref ){
        const id = useId()
        return (
        <div className=" w-full">
            {
                label && <label
                className='inline-blick mb-1 pl-1'
                htmlFor = {id}>
                {label}
                </label>
            }
            <input 
            type = {type}
            className={`px-3 py-2 rounded-lg bg-whi${className}`} 
                />





        </div>)
    }
)

export default Input;
