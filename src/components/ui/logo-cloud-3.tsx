import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
    src?: string;
    alt: string;
    href?: string;
    width?: number;
    height?: number;
    className?: string;
    disableFilter?: boolean;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
    return (
        <div
            {...props}
            className={cn(
                "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
                className
            )}
        >
            <InfiniteSlider gap={80} reverse speed={40}>
                {logos.map((logo) => {
                    const content = logo.src ? (
                        <img
                            alt={logo.alt}
                            className={cn(
                                "select-none transition-all duration-300 object-contain", 
                                !logo.disableFilter && "brightness-0 invert",
                                logo.className || "h-8 md:h-10",
                                logo.href ? "hover:scale-110" : ""
                            )}
                            height={logo.height || "auto"}
                            loading="lazy"
                            src={logo.src}
                            width={logo.width || "auto"}
                        />
                    ) : (
                        <span className="text-white/60 font-bold uppercase tracking-widest text-sm whitespace-nowrap opacity-70">
                            {logo.alt}
                        </span>
                    );

                    return logo.href ? (
                        <a key={`logo-${logo.alt}`} href={logo.href} target="_blank" rel="noopener noreferrer" className="pointer-events-auto cursor-pointer block">
                            {content}
                        </a>
                    ) : (
                        <div key={`logo-${logo.alt}`} className="pointer-events-none">
                            {content}
                        </div>
                    );
                })}
            </InfiniteSlider>
        </div>
    );
}
