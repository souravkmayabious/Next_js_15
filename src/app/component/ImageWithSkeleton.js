"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Skeleton styles for CSS-based loader with deeper colors
const skeletonStyle = {
  backgroundColor: '#2d2d2d', // Darker shade for loading
  animation: 'pulse 1.5s infinite ease-in-out',
  borderRadius: '8px', // Optional: rounded corners for the skeleton
};

// Keyframes for skeleton loading effect with more dynamic color transition
const styles = `
  @keyframes pulse {
    0% {
      background-color: #3e3e3e; // Slightly lighter than base dark color
    }
    50% {
      background-color: #2d2d2d; // Base dark color
    }
    100% {
      background-color: #3e3e3e; // Light transition to make the pulse effect visible
    }
  }
`;

const ImageWithSkeleton = ({ src, height, width, alt = 'Image' }) => {
  const [loading, setLoading] = useState(true);

  // Handle image load completion
  const handleImageLoad = () => {
    setLoading(false); // Set loading to false when the image is fully loaded
  };

  // Inject the style directly into the component for scoped styles
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // Render image or skeleton depending on loading state
  const ImageContent = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy" // Lazy load image with Next.js default behavior
      onLoadingComplete={handleImageLoad} // Trigger when image is loaded
      onLoad={handleImageLoad} // Fallback for onLoad event
      style={loading ? { display: 'none' } : {}} // Hide image until it is loaded
    />
  );

  return (
    <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
      {loading ? (
        <div
          style={{
            ...skeletonStyle,
            width: '100%',
            height: '100%',
          }}
        />
      ) : (
        ImageContent // Show the image after loading
      )}
    </div>
  );
};

export default ImageWithSkeleton;
