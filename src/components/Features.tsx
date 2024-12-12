import React from 'react';

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-6 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: 'Modern Design',
      description: 'Clean and minimalist interface that focuses on what matters most.',
    },
    {
      title: 'Responsive',
      description: 'Perfectly adapted to any screen size or device.',
    },
    {
      title: 'Fast & Reliable',
      description: 'Built with performance and reliability in mind.',
    },
  ];

  return (
    <div className="bg-zinc-900 py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;