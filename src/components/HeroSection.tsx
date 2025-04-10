import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
        alt="Cafe interior"
        fill
        className="object-cover"
      />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Brew & Bites
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
          Artisanal coffee and homemade pastries in the heart of the city
        </p>
        <button className="mt-8 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition">
          View Menu
        </button>
      </div>
    </section>
  );
}