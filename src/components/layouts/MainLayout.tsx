import Aside from '../fragments/Aside'
import Navbar from '../fragments/Navbar'
import Hero from '../fragments/Hero'

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>
            <div>
                <Aside />
            </div>
            <div>
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
