
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
// Replace these with your actual Supabase URL and anon key after connecting with Supabase
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Upload an image to Supabase Storage
 * @param file The file to upload
 * @param path The storage path (e.g., 'avatars', 'projects')
 * @returns The public URL of the uploaded file or null if upload failed
 */
export const uploadImage = async (file: File, path: string): Promise<string | null> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { data, error } = await supabase.storage
      .from('images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Error uploading image:', error);
      return null;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);
      
    return publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
};

/**
 * Retrieve all images from a specific path in Supabase Storage
 * @param path The storage path to list files from
 * @returns Array of public URLs for all images in the path
 */
export const getImages = async (path: string): Promise<string[]> => {
  try {
    const { data, error } = await supabase.storage
      .from('images')
      .list(path);

    if (error) {
      console.error('Error listing images:', error);
      return [];
    }

    // Convert file objects to public URLs
    return data.map(file => {
      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(`${path}/${file.name}`);
      return publicUrl;
    });
  } catch (error) {
    console.error('Error listing images:', error);
    return [];
  }
};

/**
 * Delete an image from Supabase Storage
 * @param url The public URL of the image to delete
 * @returns Boolean indicating success or failure
 */
export const deleteImage = async (url: string): Promise<boolean> => {
  try {
    // Extract the path from the URL
    const urlParts = url.split('/');
    const filePath = urlParts.slice(urlParts.indexOf('images') + 1).join('/');

    const { error } = await supabase.storage
      .from('images')
      .remove([filePath]);

    if (error) {
      console.error('Error deleting image:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
};
