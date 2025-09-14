import { Search, RefreshCw, Linkedin, Twitter, Share2, X } from "lucide-react";
import { useState } from "react";

// Custom Medium icon component
const MediumIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

interface HeroSectionProps {
  onRefresh?: () => void;
  isLoading?: boolean;
}

export const HeroSection = ({ onRefresh, isLoading = false }: HeroSectionProps) => {
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  const toggleSocialMenu = () => {
    setIsSocialMenuOpen(!isSocialMenuOpen);
  };

  return (
    <section className="text-center">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center gap-6">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 border bg-card px-4 md:px-5.5 h-11 md:h-12 text-xl md:text-2xl font-semibold transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent"
          >
            <Search className="size-5 md:size-5.5 font-bold -ml-1 text-white" />
            re<span className=" text-accent -ml-1.5 -mr-1.5">://</span>serban
          </button>
          {onRefresh && (
            <button
              onClick={onRefresh}
              disabled={isLoading}
              className="flex items-center justify-center h-11 w-11 md:h-12 md:w-12 border border-border bg-card transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent disabled:opacity-50"
            >
              <RefreshCw className={`size-4.5 md:size-5 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          )}
        </div>
        
        {/* Desktop social icons */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://linkedin.com/in/reserban"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-12 w-12 border border-border bg-card transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="https://x.com/reserban"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-12 w-12 border border-border bg-card transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent"
          >
            <Twitter className="size-5" />
          </a>
          <a
            href="https://medium.com/@reserban"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-12 w-12 border border-border bg-card transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent"
          >
            <MediumIcon className="size-5" />
          </a>
        </div>

        {/* Mobile social menu */}
        <div className="md:hidden relative">
          <button
            onClick={toggleSocialMenu}
            className="flex items-center justify-center h-11 w-11 border border-border bg-card transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent"
          >
            {isSocialMenuOpen ? (
              <X className="size-4.5" />
            ) : (
              <Share2 className="size-4.5" />
            )}
          </button>
          
          {/* Expandable social menu */}
          {isSocialMenuOpen && (
            <div className="absolute right-0 top-13 flex flex-col gap-2 p-2 border border-border bg-card shadow-lg z-10">
              <a
                href="https://linkedin.com/in/serbanalexandru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-11 w-11 border border-border bg-card transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent"
                onClick={() => setIsSocialMenuOpen(false)}
              >
                <Linkedin className="size-4.5" />
              </a>
              <a
                href="https://x.com/reserban"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-11 w-11 border border-border bg-card transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent"
                onClick={() => setIsSocialMenuOpen(false)}
              >
                <Twitter className="size-4.5" />
              </a>
              <a
                href="https://medium.com/reserban"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-11 w-11 border border-border bg-card transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:border-accent"
                onClick={() => setIsSocialMenuOpen(false)}
              >
                <MediumIcon className="size-4.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
