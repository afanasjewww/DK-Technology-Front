'use client';

import { useState, useEffect } from 'react';
import { VEHICLE_PHOTOS, VEHICLE_DESCRIPTIONS } from '@/lib/vehicles';

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function useRandomImages(count: number): string[] {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = shuffle(VEHICLE_PHOTOS);
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      result.push(shuffled[i % shuffled.length]);
    }
    setImages(result);
  }, [count]);

  return images;
}

export function useRandomDescriptions(count: number): string[] {
  const [descriptions, setDescriptions] = useState<string[]>([]);

  useEffect(() => {
    const shuffled = shuffle(VEHICLE_DESCRIPTIONS);
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      result.push(shuffled[i % shuffled.length]);
    }
    setDescriptions(result);
  }, [count]);

  return descriptions;
}
