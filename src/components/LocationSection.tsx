import { MapPin, Clock, Phone } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <MapPin className="text-amber-600 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>123 Coffee Street</p>
            <p>Downtown, Cityville</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Clock className="text-amber-600 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p>Mon-Fri: 7am - 7pm</p>
            <p>Sat-Sun: 8am - 6pm</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="text-amber-600 mt-1" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p>(555) 123-4567</p>
            <p>hello@brewandbites.com</p>
          </div>
        </div>
      </div>
      <div className="mt-12 h-96 bg-gray-200 rounded-lg overflow-hidden">
        {/* Map placeholder - would use Google Maps or similar in production */}
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-500">Map would go here</p>
        </div>
      </div>
    </section>
  );
}