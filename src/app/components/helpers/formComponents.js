import Image from "next/image";

export function Input({ label, handler, type, name, value, width }) {

    const {
        handleInput,
        handleBlur,
        formData
    } = handler;

    return (
        <div className="flex flex-col w-fit relative py-1">
            <Label label={label} />
            <input
                type={type ? type : "text"}
                name={name}
                value={value ?? formData[name]}
                onChange={handleInput}
                onBlur={handleBlur}
                style={{ width: width ? `${width}px` : '250px' }}
                className="input px-[10px] py-[11px] border-1 rounded-[7px] focus:outline-none placeholder:text-black/20"
            />
        </div>
    )
}

export function Select({ label, handler, name, options, blankOption, changeHandler }) {

    const {
        handleInput,
        formData
    } = handler;

    return (
        <div className="flex flex-col w-fit static py-1">
            <div className="relative">
                <Label label={label} />
                <select
                    name={name}
                    value={formData[name]}
                    onChange={changeHandler ?? handleInput}
                    className="input px-[10px] py-[12px] border-1 rounded-[7px] w-[250px] focus:outline-none cursor-pointer"
                    style={{ background: 'var(--input-bg)' }}
                >
                    {blankOption ? <option value=""></option> : null}
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
        </div>
    )
}

export function Label({ label }) {
    return (
        <label className="field-label">{label}</label>
    )
}

export function Toggle({ icon, label, name, handler }) {

    const {
        formData,
        handleCheckboxChange
    } = handler;

    return (
        <div className="flex flex-row gap-2 items-center py-1">
            {icon ?
                <Image src={icon} alt="" width={20} height={20} /> :
                <p className="text-xs font-semibold w-[180px] opacity-80">{label}</p>
            }
            <label className="relative h-6 w-11 cursor-pointer">
                <input
                    className="peer sr-only"
                    name={name}
                    type="checkbox"
                    checked={formData[name]}
                    onChange={(e) => handleCheckboxChange(e)}
                />
                <span className="toggle-track absolute inset-0 m-auto h-full rounded-full"></span>
                <span className="absolute inset-y-0 start-1 m-auto size-5 rounded-full bg-white shadow-sm transition-all duration-250 peer-checked:start-5" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}></span>
            </label>
        </div>
    )
}
