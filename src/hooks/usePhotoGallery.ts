import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { LocationObject, UserPhoto } from '../types';



export function usePhotoGallery() {
    const [files, setFiles] = useState<File[]>([]);
    const [photos, setPhotos] = useState<UserPhoto[]>([]);
    const [imagePaths, setImagePaths] = useState<any>([]);
    const [location, setLocation] = useState<LocationObject>({
        lat: 0.0,
        long: 0.0
    })
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        const coordinates = await Geolocation.getCurrentPosition()
        console.log({lat:coordinates.coords.latitude, long:coordinates.coords.longitude})
        const fileName = new Date().getTime() + '.jpeg';
        const response = await fetch(photo.webPath!);
        let blob: any = await response.blob();
        blob.lastModifiedDate = new Date();
        blob.name = fileName;
        const newPhotos = [
            {
                filepath: fileName,
                webviewPath: photo.webPath
            },
            ...photos,
        ];
        const newFiles = [
            <File>blob,
            ...files,
        ];
        const newWebPaths = [
            photo.webPath,
            ...imagePaths,
        ];
        setImagePaths(newWebPaths)
        setFiles(newFiles);
        setPhotos(newPhotos)
        setLocation({lat:coordinates.coords.latitude, long:coordinates.coords.longitude})
    };
    
    return {
        photos,
        takePhoto,
        imagePaths,
        files,
        location
    };

    
  }

export async function base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject('method did not return a string');
        }
      };
      reader.readAsDataURL(blob);
    });
}