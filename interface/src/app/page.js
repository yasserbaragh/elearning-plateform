import Image from "next/image";
import teacher from "@/assets/teacher.png"
import pic from "@/assets/pic.jpg"
import pic2 from "@/assets/pic1.jpg"
import pic3 from "@/assets/pic3.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center p-8">
        <h1 className="text-3xl font-bold">Teach Game</h1>
        <nav className="flex gap-8">
          <a href="#" className="hover:underline">start now</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex items-center px-8 justify-evenly">
        
          <div>
            <h2 className="text-5xl font-extrabold mb-4">LEARN</h2>
            <p className="text-lg mb-8 capitalize">
              scroll have fun, learn something new everyday<br />
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 cursor-pointer">
                start now
              </button>
              {/* <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800">
                Watch Trailer
              </button> */}
            </div>
          </div>
          <div className="relative w-full max-w-md h-64 bg-gray-800 rounded-lg overflow-hidden">
            {/* Placeholder for Main Image */}
            <Image
              src={teacher}
              alt="Main Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        
      </main>

      {/* Gallery Section */}
      <section className="mt-16 px-8">
        <h3 className="text-2xl font-bold mb-4">Gallery</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Placeholder for Gallery Images */}
          <div className="relative w-full h-40 bg-gray-700 rounded-lg overflow-hidden">
            <Image
              src={pic}
              alt="Gallery Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-40 bg-gray-700 rounded-lg overflow-hidden">
            <Image
              src={pic2}
              alt="Gallery Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-40 bg-gray-700 rounded-lg overflow-hidden">
            <Image
              src={pic3}
              alt="Gallery Image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-400">
        © 2023 Squid Game. All rights reserved.
      </footer>
    </div>
  );
}
