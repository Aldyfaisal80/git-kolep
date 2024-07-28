const NavbarLayouts = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center">
            {children}
        </div>
    )
}

const NavbarSelect = ({ options, icon }: { options: { value: string, description: string }[], icon: React.ReactNode }) => {
    return (
        <div className="w-4/5 flex p-2 bg-slate-100 rounded-md">
            <select className="p-2 outline-none">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.description}
                    </option>
                ))}
            </select>
            <input className="p-2 flex justify-center outline-none w-full bg-slate-100" type="text" placeholder="Search..." />
            <button className="">
                {icon}
            </button>
        </div>
    );
}

const IconsGroup = ({ icons }: { icons: React.ReactNode[] }) => {
    return (
        <div className="flex items-center justify-around w-3/4">
            {icons.map((icon, index) => (
                <div key={index}>
                    {icon}
                </div>
            ))}
        </div>
    );
};

const ProfileUsers = ({ image}: { image: string, }) => {
    return (
        <div className="flex border-l-2 gap-4 border-solid items-center relative">
            <img src={image} className="rounded-full ml-6 w-[40px]" alt="" />
            <select name="profile" id="profile">
                <option className="" value="profile"></option>
            </select>
        </div>
    )
}


NavbarLayouts.NavbarSelect = NavbarSelect
NavbarLayouts.IconsGroup = IconsGroup
NavbarLayouts.ProfileUsers = ProfileUsers


export default NavbarLayouts


