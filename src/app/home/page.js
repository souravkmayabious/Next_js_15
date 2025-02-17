import Link from "next/link";
import Image from "next/image";
import ImageWithSkeleton from "./../component/ImageWithSkeleton";
import { Roboto } from "next/font/google";
import styles from "./../styles/home.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="featured-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <p className="text-muted">
                <span
                  className="typewrite d-inline"
                  data-period="2000"
                  data-type='[ " Travel Blogger. ", "Content Writter. ", "Food Guides " ]'
                ></span>
              </p>
              <h2  className="typed-out">
                Hello, I’m 
                <span> Sourav</span>
              </h2>
              <h3 className="mb-20"> Welcome to my blog</h3>
              <h5 className="text-muted">
                Don't miss out on the latest news about Technology, food, Hotels
                review, Food guide...
              </h5>
              <form className="input-group form-subcriber mt-5 d-flex">
                <input
                  type="email"
                  className="form-control bg-white font-small"
                  placeholder="Enter your email"
                />
                <button className="btn bg-primary text-white" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="col-lg-6 text-right d-none d-lg-block">
              <Image
                src="/static/images/blog_main.png"
                height={400}
                width={600}
                alt="aaa"
              />
            </div>
          </div>
        </div>
      </div>

      <p>Home page</p>
      <p style={{ fontFamily: "Playwrite NZ Guides" }}>
        This is a sample home page. It uses the layout component to render the
        navbar and other common components.
      </p>
      <h1 className={roboto.className}>Font with next font</h1>
      <h1 className="">Font with next font</h1>
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
      <Link href="/productlist">productlist - client component</Link>
      <br />
      <Link href="/productlist2">productlist - server component</Link>
    </div>
  );
}
