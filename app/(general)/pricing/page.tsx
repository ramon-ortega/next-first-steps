import type { Metadata } from "next";

export const metadata : Metadata = {
    'title': 'Pricing Page',
    'description': 'Pricing description', 
    'keywords': ['About Page', 'Fernando', 'Información', '...'],
}

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    );
} 