
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface FigmaEmbedProps {
  src: string;
  className?: string;
}

const FigmaEmbed = ({ src, className }: FigmaEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={className}>
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
            <div className="relative w-full h-full">
                {isLoading && (
                    <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
                )}
                <iframe
                    src={src}
                    onLoad={() => setIsLoading(false)}
                    
                    className={`w-full h-full rounded-lg transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    style={{ border: 0 }}
                ></iframe>
            </div>
        </AspectRatio>
    </div>
  );
};

export default FigmaEmbed;
