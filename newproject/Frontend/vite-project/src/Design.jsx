import React, { useState } from 'react';

const Design = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);

  // Sample designs data with different images
  const designs = [
    { id: 1, name: "Corporate Website", image: "https://assets.awwwards.com/awards/submissions/2025/02/67a4953db44c9057141194.jpg" },
    { id: 2, name: "E-commerce Platform", image: "https://rozzario.com/wp-content/uploads/2023/12/Best-ECOMMERCEWEBSITE-DESIGN-AGENCY-In-Malaysia-Near-ME.png" },
    { id: 3, name: "Portfolio Site", image: "https://i.ytimg.com/vi/UqHILyzcULE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAFPX0my6jzpARnsT55vB3cpmdkcQ" },
    { id: 4, name: "Blog Template", image: "https://motopress.com/wp-content/uploads/2024/05/10-hashnode_best-blogging-sites.jpg" },
    { id: 5, name: "Landing Page", image: "https://www.blissmarcom.com/wp-content/uploads/2024/04/LANDING-PAGES-VS.-HOME-PAGES-2.jpg" },
    { id: 6, name: "Dashboard UI", image: "https://i.ytimg.com/vi/9FPU9gscyGA/hqdefault.jpg" },
    { id: 7, name: "Mobile App", image: "https://i.pinimg.com/736x/ca/ba/45/caba456db19dca113ca53e115e21570c.jpg" },
    { id: 8, name: "Social Media", image: "https://hasthemes.com/blog/wp-content/uploads/2022/07/friendbook-social-network-social-media-community-ui-toolkit-responsive-html-template.png" },
    { id: 9, name: "Educational Platform", image: "https://theappsolutions.com/wp-content/uploads/images/articles/source/elearning-platform/udacity.png" },
    { id: 10, name: "Healthcare Portal", image: "https://s.tmimgcdn.com/scr/400x250/370000/medicare-hospital-diagnostic-clinic-healthcare-and-medical-lab-html-website-template_370047-original.png" },
    { id: 11, name: "Real Estate Website", image: "https://market-resized.envatousercontent.com/previews/files/266182210/preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=bb2dc7aae639befd29b201a1a275b48311d4c9c2e83a0f4003e65fc3b7425891" },
    { id: 12, name: "Restaurant Site", image: "https://themewagon.com/wp-content/uploads/2021/10/feane-1.png" }
  ];

  const handleDesignClick = (design) => {
    setSelectedDesign(design);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Designs</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {designs.map((design) => (
          <div
            key={design.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleDesignClick(design)}
          >
            <img
              src={design.image}
              alt={design.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{design.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 text-lg border rounded-lg hover:bg-gray-100">View More</button>
      </div>

      {selectedDesign && isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Customize {selectedDesign.name}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">What changes do you need?</label>
                <textarea className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="3" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Objective</label>
                <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                  <option value="">Select an objective</option>
                  <option value="branding">Branding</option>
                  <option value="sales">Sales</option>
                  <option value="engagement">User Engagement</option>
                  <option value="information">Information Sharing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Industry</label>
                <input type="text" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Budget Range</label>
                <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                  <option value="">Select budget range</option>
                  <option value="low">$1,000 - $5,000</option>
                  <option value="medium">$5,000 - $10,000</option>
                  <option value="high">$10,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Timeline</label>
                <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                  <option value="">Select timeline</option>
                  <option value="urgent">1-2 weeks</option>
                  <option value="normal">2-4 weeks</option>
                  <option value="relaxed">4+ weeks</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Design;