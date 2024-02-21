import {Montserrat, Lusitana} from 'next/font/google';
//subsets:latin me permite cargar solo los caracteres en latin
export const montserrat = Montserrat({subsets:['latin']});

export const lusitana = Lusitana({subsets:['latin'], weight:'400'});