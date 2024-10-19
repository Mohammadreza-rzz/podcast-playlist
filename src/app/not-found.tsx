// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-100 bg-gray-600">
      <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest">
        404
      </h1>
      <div className="px-2 text-heading_sm rounded mt-3">Page Not Found</div>
      <div className="mt-8">
        <Link
          className="relative inline-block text-sm font-medium text-red-600 group  focus:outline-none focus:ring"
          href="/home/podcast"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5  group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-white border border-current">
            Go Back Home
          </span>
        </Link>
      </div>
    </div>
  );
}
