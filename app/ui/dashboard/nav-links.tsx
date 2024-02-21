'use client' //el pathname solo lo podemos recuperar en el cliente y no en el servidor por lo tanto se escribe 'use client'
import {UserGroupIcon, HomeIcon,DocumentDuplicateIcon,} from '@heroicons/react/24/outline'; //estos son iconos atraídos desde Tailwind
import Link from 'next/link';
import {usePathname} from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboardPrueba', icon: HomeIcon },
  {name: 'Invoices',href: '/dashboardPrueba/invoices',icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboardPrueba/customers', icon: UserGroupIcon },
];



export default function NavLinks() {
    const pathname=usePathname(); //'/dashboardPrueba/invoices' me envia el enlace en donde esta actualmente
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link key={link.name} href={link.href}
                        className={`${pathname === link.href ? 'bg-sky-100 text-blue-600': ''}
                            flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3
                            text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start
                            md:p-2 md:px-3`
                        }
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })
            }
        </>
    );
}
/**
 * ! importante no usar ancor sino mas bien Link esto por tema de rendimiento es mucho mejor
 * <a
        key={link.name}
        href={link.href}
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
        <LinkIcon className="w-6" />
        <p className="hidden md:block">{link.name}</p>
    </a>
 */

