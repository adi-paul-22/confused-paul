
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

export interface ArtworkDialogProps {
  artwork: {
    title: string;
    description: string;
    color: string;
    icon: React.ReactNode;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ArtworkDialog = ({ artwork, isOpen, onClose }: ArtworkDialogProps) => {
  // Reset scroll position when dialog opens
  React.useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <ScrollArea className="max-h-[calc(90vh-4rem)] pr-4">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <span className={`text-${artwork.color}-500 dark:text-${artwork.color}-400`}>
                {artwork.icon}
              </span>
              {artwork.title}
            </DialogTitle>
            <DialogDescription className="text-base mt-2">
              {artwork.description}
            </DialogDescription>
          </DialogHeader>

          <div className={`rounded-lg p-6 bg-${artwork.color}-50 dark:bg-${artwork.color}-900/20 border border-${artwork.color}-200 dark:border-${artwork.color}-800 mt-4`}>
            <div className="aspect-video relative">
              <div className={`absolute inset-0 bg-gradient-to-br from-${artwork.color}-400/30 to-${artwork.color}-600/30 dark:from-${artwork.color}-500/20 dark:to-${artwork.color}-700/20 rounded-md flex items-center justify-center`}>
                <Palette size={64} className={`text-${artwork.color}-500 dark:text-${artwork.color}-400 opacity-30`} />
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">Project Details</h3>
            <p className="text-muted-foreground">
              This is an expanded view of the artwork with more details about the techniques, 
              inspiration, and context behind this piece. In a real application, this would include 
              information about materials used, dimensions, year created, and more detailed descriptions.
            </p>
            <p className="text-muted-foreground">
              The overlay dialog format allows visitors to explore each piece in detail without 
              navigating away from the gallery page.
            </p>
          </div>

          <div className="flex justify-end gap-2 mt-6 pb-2">
            <Button variant="outline" onClick={onClose}>Close</Button>
            <Button className={`bg-${artwork.color}-600 hover:bg-${artwork.color}-700 text-white`}>
              Contact About This Artwork
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkDialog;
