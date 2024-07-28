import Aside from '../fragments/Aside'
import Navbar from '../fragments/Navbar'
import Hero from '../fragments/Hero'

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className='flex w-full p-5'>
            <div className=''>
                <Aside />
            </div>
            <div className='flex flex-col gap-5 w-full'>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Hero />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
