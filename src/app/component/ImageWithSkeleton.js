"use client"
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation if needed

const ImageWithSkeleton = ({ src, height, width, alt = 'Image', goto = null }) => {
  const [loading, setLoading] = useState(true);

  // Handle image load completion
  const handleImageLoad = () => {
    console.log('Image Loaded'); // Debugging log to confirm image load
    setLoading(false); // Set loading to false when the image is fully loaded
  };

  // Render image or skeleton depending on loading state
  const ImageContent = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoadingComplete={handleImageLoad} // Trigger when image is loaded
      style={loading ? { display: 'none' } : {}} // Hide image until it is loaded
    />
  );

  return (
    <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
        {src}
      {loading ? (
        <Skeleton width="100%" height="100%" /> // Show skeleton loader while loading
      ) : (
        goto ? (
          <Link href={goto}>
            <a>{ImageContent}</a> {/* Wrap the image in a link if `goto` is provided */}
          </Link>
        ) : (
          ImageContent // Show the image if no link is provided
        )
      )}
    </div>
  );
};

export default ImageWithSkeleton;
