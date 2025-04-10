import { Coffee, Croissant, Sandwich } from 'lucide-react';

export default function MenuHighlights() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Menu Highlights</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white/5 p-6 rounded-lg shadow-lg">
            <div className="text-amber-500 mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="font-medium">${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const menuItems = [
  {
    id: 1,
    title: 'Specialty Coffee',
    description: 'Handcrafted with premium beans and care',
    price: '4.50',
    icon: <Coffee size={32} />
  },
  {
    id: 2,
    title: 'Fresh Croissant',
    description: 'Buttery, flaky pastry baked daily',
    price: '3.75',
    icon: <Croissant size={32} />
  },
  {
    id: 3,
    title: 'Gourmet Sandwich',
    description: 'Fresh ingredients on artisan bread',
    price: '8.95',
    icon: <Sandwich size={32} />
  }
];