import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg mb-4">
            Founded in 2010, Brew & Bites started as a small coffee cart downtown. 
            Our passion for quality coffee and community has grown us into the 
            beloved neighborhood cafe we are today.
          </p>
          <p className="text-lg">
            We source our beans directly from sustainable farms and bake all our 
            pastries fresh every morning.
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Barista making coffee"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}