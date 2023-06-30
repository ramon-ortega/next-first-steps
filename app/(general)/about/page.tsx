import type { Metadata } from "next"; // Se usa type si solo se usara por el tipado

export const metadata : Metadata = {
   'title': 'SEO Title',
   'description': 'SEO description', 
   'keywords': ['About Page', 'Fernando', 'Información', '...'],
}

export default function AboutPage(){
    return (
        <>  
        <main className="flex flex-col items-center">
            <span className="text-7xl">About Page</span>
        </main>
        </>
    );
} 