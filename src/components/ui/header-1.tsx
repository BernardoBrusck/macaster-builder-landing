import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { PhoneCallIcon } from 'lucide-react';
import { createPortal } from 'react-dom';

/**
 * Detects whether the header is currently overlapping a light-themed section.
 * Sections should add `data-header-theme="light"` to trigger the switch.
 */
function useHeaderTheme() {
    const [isLight, setIsLight] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const lightSections = document.querySelectorAll('[data-header-theme="light"]');
            const headerBottom = 48; // header height in px (h-12)
            let overLight = false;

            lightSections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top < headerBottom && rect.bottom > 0) {
                    overLight = true;
                }
            });

            setIsLight(overLight);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return isLight;
}

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);
    const isLight = useHeaderTheme();

    const links = [
        {
            label: 'Soluções',
            href: '#solucoes',
        },
        {
            label: 'Metodologia',
            href: '#metodologia',
        },
        {
            label: 'Cases',
            href: '#cases',
        },
        {
            label: 'Contato',
            href: '#contato',
        },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false); // Close mobile menu if open
    };

    const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20no%20WhatsApp.";

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full border-b transition-all duration-500 ease-out',
                scrolled
                    ? isLight
                        ? 'border-gray-200/80 bg-white/80 backdrop-blur-md backdrop-saturate-[1.3] shadow-[0_1px_10px_rgba(0,0,0,0.06)]'
                        : 'border-white/15 bg-white/[0.07] backdrop-blur-md backdrop-saturate-[1.3] shadow-[0_4px_30px_rgba(0,0,0,0.08)]'
                    : 'border-transparent bg-transparent'
            )}
            style={scrolled ? {
                WebkitBackdropFilter: 'blur(10px) saturate(1.3)',
            } : undefined}
        >
            <nav className="mx-auto flex h-12 w-full max-w-5xl items-center justify-between px-4">
                <a href="/" className="hover:opacity-80 transition-opacity p-2">
                    <span className={cn(
                        "font-display text-lg font-bold tracking-wider transition-colors duration-500",
                        isLight ? "text-gray-900" : "text-white"
                    )}>
                        MACASTER
                    </span>
                </a>
                <div className="hidden items-center gap-2 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            className={cn(
                                buttonVariants({ variant: 'ghost' }),
                                'transition-colors duration-500 cursor-pointer',
                                isLight
                                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    : ''
                            )}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        variant="secondary"
                        className={cn(
                            "rounded-full backdrop-blur-md transition-all duration-500",
                            isLight
                                ? "border border-gray-200 bg-gray-100/80 text-gray-700 hover:bg-gray-200/80"
                                : "border border-white/[0.12] bg-white/[0.06] text-white"
                        )}
                        asChild
                    >
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <PhoneCallIcon className="size-4 mr-2" />
                            WhatsApp
                        </a>
                    </Button>
                    <Button
                        className={cn(
                            "rounded-full border transition-all duration-500",
                            isLight
                                ? "border-primary bg-primary text-white hover:border-primary/80"
                                : "border-primary bg-primary hover:border-white/80"
                        )}
                        onClick={(e) => handleScroll(e, '#contato')}
                    >
                        Cotar Agora
                    </Button>
                </div>
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setOpen(!open)}
                    className={cn(
                        "md:hidden transition-colors duration-500",
                        isLight ? "border-gray-300 text-gray-700" : "border-white/20"
                    )}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label="Toggle menu"
                >
                    <MenuToggleIcon open={open} className="size-5" duration={300} />
                </Button>
            </nav>
            <MobileMenu open={open} isLight={isLight} className="flex flex-col justify-between gap-2">
                <div className="grid gap-y-2">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            className={buttonVariants({
                                variant: 'ghost',
                                className: 'justify-start cursor-pointer',
                            })}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <Button variant="outline" className="w-full bg-transparent border-white/20" asChild>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            WhatsApp
                        </a>
                    </Button>
                    <Button className="w-full" onClick={(e) => handleScroll(e, '#contato')}>
                        Cotar Agora
                    </Button>
                </div>
            </MobileMenu>
        </header>
    );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
    open: boolean;
    isLight?: boolean;
};

function MobileMenu({ open, isLight, children, className, ...props }: MobileMenuProps) {
    if (!open || typeof window === 'undefined') return null;

    return createPortal(
        <div
            id="mobile-menu"
            className={cn(
                isLight
                    ? 'bg-white/90 backdrop-blur-xl backdrop-saturate-150'
                    : 'bg-white/10 backdrop-blur-xl backdrop-saturate-150',
                'fixed top-12 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
                isLight ? 'border-gray-200' : 'border-white/20',
            )}
        >
            <div
                data-slot={open ? 'open' : 'closed'}
                className={cn(
                    'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
                    'size-full p-4',
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body,
    );
}

