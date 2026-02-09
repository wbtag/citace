import Image from "next/image";

export function Input({ label, handler, type, name, value, width }) {

    const {
        handleInput,
        handleBlur,
        formData
    } = handler;

    return (
        <>
            <div className="flex flex-col w-fit relative">
                <Label label={label} />
                <input
                    type={type ? type : "text"}
                    name={name}
                    value={value ?? formData[name]}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    style={{width: width ? `${width}px` : '250px'}}
                    className={
                        `input px-[10px] py-[11px] border-1 rounded-[5px] focus:outline-none placeholder:text-black/25`
                    }
                />
            </div>
        </>
    )
}

export function Select({ label, handler, name, options, blankOption, changeHandler }) {

    const {
        handleInput,
        formData
    } = handler;

    return (
        <>
            <div className="input flex flex-col w-fit static">
                <Label label={label} />
                <select
                    name={name}
                    value={formData[name]}
                    onChange={changeHandler ?? handleInput}
                    className="input px-[10px] py-[12px] border-1 border-white rounded-[5px] w-[250px] focus:outline-none placeholder:text-black/25 bg-[#09002f]"
                >
                    {
                        blankOption ?
                            <option value=""></option> :
                            null
                    }
                    {
                        typeof options[0] === "object" ?
                            options.map((option) => (
                                <option key={option.name} value={option.value}>
                                    {option.name}
                                </option>
                            ))
                            : options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))
                    }
                </select>
            </div>
        </>
    )
}

export function Label({ label }) {
    return (
        <>
            <div>
                <label
                    className="absolute text-xs font-semibold ml-[7px] px-[3px]"
                >{label}</label>
            </div>
        </>
    )
}

export function Toggle({ icon, label, name, handler }) {

    const {
        formData,
        handleCheckboxChange
    } = handler;


    return (
        <div className="flex flex-row gap-2 items-center">
            {icon ? 
            <Image src={icon} alt="" width={20} height={20} /> :
            <p className="text-xs font-semibold w-[180px]">{label}</p>
            }
            <label className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]">
                <input className="peer sr-only" name={name} type="checkbox" checked={formData[name]} onChange={(e) => handleCheckboxChange(e)} />
                <span className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>
                <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0">
                    <span className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition"></span>
                </span>
            </label>
        </div>
    )
}