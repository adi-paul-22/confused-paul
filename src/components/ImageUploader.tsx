
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud, X, Image as ImageIcon } from "lucide-react";
import { uploadImage } from '@/utils/supabaseClient';
import { toast } from 'sonner';

interface ImageUploaderProps {
  onImageUploaded: (url: string) => void;
  storagePath?: string;
  className?: string;
}

const ImageUploader = ({ 
  onImageUploaded, 
  storagePath = 'general',
  className = ''
}: ImageUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    
    // Check file type
    if (!selectedFile.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }
    
    // Check file size (limit to 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB');
      return;
    }
    
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select an image first');
      return;
    }

    setIsUploading(true);
    try {
      const imageUrl = await uploadImage(file, storagePath);
      
      if (imageUrl) {
        onImageUploaded(imageUrl);
        toast.success('Image uploaded successfully');
        // Clear the preview and file selection
        setFile(null);
        setPreviewUrl(null);
      } else {
        toast.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('An error occurred during upload');
    } finally {
      setIsUploading(false);
    }
  };

  const clearSelection = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <Label htmlFor="image-upload" className="block text-sm font-medium">
        Upload Image
      </Label>
      
      {previewUrl ? (
        <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-8 w-8 opacity-90"
            onClick={clearSelection}
          >
            <X size={16} />
          </Button>
        </div>
      ) : (
        <div className="border-2 border-dashed rounded-md p-6 text-center bg-muted/50">
          <ImageIcon className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground mb-2">
            Drag and drop an image, or click to browse
          </p>
          <Input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="sr-only"
          />
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('image-upload')?.click()}
          >
            Select Image
          </Button>
        </div>
      )}
      
      {file && (
        <div className="flex justify-end">
          <Button 
            disabled={isUploading}
            onClick={handleUpload}
            className="gap-2"
          >
            <UploadCloud size={16} />
            {isUploading ? 'Uploading...' : 'Upload to Supabase'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
