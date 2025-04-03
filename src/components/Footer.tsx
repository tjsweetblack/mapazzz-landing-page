import React from 'react';

import { siteDetails } from '@/data/siteDetails';
 
const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
           
            <div className="mt-8 md:text-center text-foreground-accent px-6">
             
                <p className="text-sm mt-2 text-gray-500"><a href="https://" target="_blank">Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. Todos os Direitos Reservados.</a></p>
            </div>
        </footer>
    );
};

export default Footer;
