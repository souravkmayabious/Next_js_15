"use client";

export default function Product(props) {
  // console.log(props.price)
  return (
    <div>
      <button
        className="btn btn-sm btn-success"
        onClick={() => alert(props.price)}
      >
        Check price
      </button>
    </div>
  );
}
