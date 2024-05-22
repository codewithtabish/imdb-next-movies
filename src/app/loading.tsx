import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center mt-16 min-h-[85vh] ">
      <Image
        className="h-52"
        src="spinner.svg"
        alt="loading..."
        loading="lazy"
        width={200}
        height={200}
      />
    </div>
  );
}
