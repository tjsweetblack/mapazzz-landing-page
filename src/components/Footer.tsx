import React from 'react';

import { siteDetails } from '@/data/siteDetails';
 
const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-foreground py-10">
           
            <div className="mt-5 md:text-center text-foreground-accent px-6">
             
                <p className="text-sm mt-2 text-white"><a href="https://" target="_blank">Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. Todos os Direitos Reservados.</a></p>
            </div>
        </footer>
    );
};

export default Footer;
