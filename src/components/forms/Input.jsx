import { useFormContext } from "react-hook-form"
import { findInputError } from "../../utils/findInputError";
import { isFormInvalid } from "../../utils/isFormInvalid";

export const Input = ({
    name,
    label,
    type,
    id,
    placeholder,
    validation,
    multiline,
    className
}) =>{
    const {
        register,
        formState: { errors }
    } = useForm();
}

const InputErrors = findInputError(errors, name);
const isInvalid = isFormInvalid();

const inputError = ({ message }) =>{
    return(
       <>
       </>
    )
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  }