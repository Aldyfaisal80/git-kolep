const AsideLink = ({ children }: { children: React.ReactNode }) => {
    return (
        <aside className="flex flex-col w-[280px] min-h-full justify-between">
            {children}
        </aside>
    )
}

const AsideTop = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}

const AsideBottom = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

const IconsGroup = ({ icons1, icons2, text }: { icons1: React.ReactNode, icons2: React.ReactNode, text: string }) => {
    return (
        <button className="flex items-center justify-between px-4 py-3 text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-fuchsia-900">
            <span className="flex items-center gap-2 text-[1.1rem]">
                {icons1} {text}
            </span>
            {icons2}
        </button>

    )
}

AsideTop.IconsGroup = IconsGroup
AsideBottom.IconsGroup = IconsGroup
export { AsideTop, AsideBottom }
export default AsideLink