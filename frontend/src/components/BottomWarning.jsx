import { Link } from "react-router-dom"
const BottomWarning = ({label, to}) =>{
    return <div className="flex justify-center py-2">
        <div>Already have an account?     
        </div>
        <Link className="pl-1 underline cursor-pointer" to={to}>{label}</Link>
    </div>
}
export default BottomWarning