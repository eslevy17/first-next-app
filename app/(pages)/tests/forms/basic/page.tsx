const formElements = [
    'text',
    'number',
    'date',
    'time'
]

export default function Page() {
    return (
        <div>
            <p>Basic Form Test Page</p>
            <br />

            <div className={'w-72 grid gap-2'}>
                {formElements.map(formElement => (
                    <div key={formElement} className={'flex justify-between'}>
                        <label htmlFor={formElement}>{formElement[0].toUpperCase() + formElement.slice(1)}</label>
                        <input type={formElement} id={formElement} className={'w-48'}/>
                    </div>
                ))}

                <button
                    type={'submit'}
                    className={'bg-white text-black w-48 ml-auto'}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}