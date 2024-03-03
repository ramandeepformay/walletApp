import { forwardRef } from "react"
const InputBox =forwardRef(({label,placeholder,onChange}, ref) =>{
    return <div className="py-2">
        <div className="font-bold">{label}</div>
        <input className="shadow-md border rounded border-slate p-2 w-full" type="text" placeholder={placeholder} onChange={onChange} ref={ref}/>
    </div>
})

export default InputBox