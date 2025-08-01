import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

import {Poppins} from "next/font/google";

const Fuente = localFont({
    src: "../../public/fuentes/cal-sans.woff2"
});

const textFont = Poppins({
    subsets: ['latin'],
    weight:[
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900'
    ],
})

const marketingPage = () => {
    return(
        <div className ="flex items-center justify-center flex-col">
            <div className ={ cn("flex items-center justify-center flex-col", Fuente.className)}>
                <div className = "mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className ="h-6 w-6 mr-2"/>
                    Número 1 gestionando tareas
                </div>
                <h1 className ="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    MiTarea ayuda al equipo a organizarse
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    trabajar hacia adelante
                </div>
            </div>
            <div className ={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
                Colaboración, manejo de proyectos y tareas, todo en un solo lugar. Desde lo más alto hacia tu oficina, MiTarea te ayuda a mantenerte organizado y productivo.
            </div>
            
        </div>
    );
};

export default marketingPage;