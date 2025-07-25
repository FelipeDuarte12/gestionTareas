import { Footer } from './_componentes/footer';
import {Navbar} from './_componentes/navbar';

const marketingLayout = ({ 
    children 
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className ="h-full bg-slate-100">
            <Navbar />
            <main className="pt-40 pb-20 bg-slate-100">
                {children}    
            </main>
            <Footer />
            
        </div>
    )

};

export default marketingLayout;
    