function FormInput(props) {

    return (
        <div>
            <label className="block" htmlFor="password">{props.label}{props.required && <span className="text-red-500">*</span>}</label>
            <input className="form-control w-full my-2" type={`${props.type}`} name={`${props.name}`} value={props.value} onChange={props.onChange}></input>
        </div>
    )
}

export default FormInput