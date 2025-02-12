import Link from "next/link";
import Image from "next/image";
import ImageWithSkeleton from './../component/ImageWithSkeleton';

export default function Home() {
  return (
    <div className="container-fluid">
      <p>Home page</p>

      <div>
        {/* Regular image tag (Not optimized by Next.js) */}
        <img
          src="https://picsum.photos/536/354"
          height={200}
          width={300}
          className="img-fluid"
          alt="Example Image"
        />
        
        {/* Optimized by Next.js Image component */}
        <Image
          src="https://picsum.photos/536/354"
          width={300}
          height={200}
          alt="Picture of the author"
        />
      </div>

      <div>
        {/* Using ImageWithSkeleton component */}
        <ImageWithSkeleton
          src="https://static.toiimg.com/thumb/msid-107302170,imgsize-10846,width-400,resizemode-4/107302170.jpg"
          height={100}
          width={200}
          alt="Sample Image 1"
          goto="https://example.com"
        />
        <ImageWithSkeleton
          src="https://picsum.photos/536/355"
          height={100}
          width={200}
          alt="Sample Image 2"
          goto="https://example2.com"
        />
        <ImageWithSkeleton
          src="https://picsum.photos/536/356"
          height={100}
          width={200}
          alt="Sample Image 3"
          goto={null} // No link, image is not clickable
        />
      </div>

      {/* Links to product pages */}
      <Link href="/productlist">
        productlist - client component
      </Link>
      <br />
      <Link href="/productlist2">
        productlist - server component
      </Link>
    </div>
  );
}
