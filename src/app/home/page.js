import Link from "next/link";
import Image from "next/image";
import ImageWithSkeleton from './../component/ImageWithSkeleton';

export default function Home() {
  return (
    <div className="container-fluid">
      <p>Home page</p>
      <div>
        <img src="https://picsum.photos/536/354" height={200} width={300} className="img-fluid" />
        <Image
          src="https://picsum.photos/536/354"
          width={300}
          height={200}
          alt="Picture of the author"
        />
      </div>
      <div>
      <ImageWithSkeleton
        src="https://picsum.photos/536/354"
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
      <Link href="/productlist">productlist - client component</Link> <br />
      <Link href="/productlist2">productlist - server component</Link>
    </div>
  );
}
