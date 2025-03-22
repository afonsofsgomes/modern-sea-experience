
export const PortoSantoHighlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-blue-900 rounded-full mb-4">
            Island Attractions
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-blue-900">
            Porto Santo Highlights
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Porto Santo a must-visit destination during your stay in Madeira.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Highlight 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://extranet.seayou.pt/photos/pxo.jpg" 
                alt="Golden Beach" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2 text-blue-900">9km Golden Beach</h3>
              <p className="text-muted-foreground">Known for its therapeutic properties and pristine golden sands stretching for miles.</p>
            </div>
          </div>
          
          {/* Highlight 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://extranet.seayou.pt/photos/pxo-activities.jpg" 
                alt="Water Sports" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2 text-blue-900">Water Sports Paradise</h3>
              <p className="text-muted-foreground">Perfect conditions for windsurfing, kitesurfing, and paddleboarding in crystal clear waters.</p>
              <p className="text-xs text-gray-500 mt-2">Credit: Visit Madeira</p>
            </div>
          </div>
          
          {/* Highlight 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://extranet.seayou.pt/photos/porto-santo-golfe.jpg" 
                alt="Golf Course" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium mb-2 text-blue-900">Championship Golf</h3>
              <p className="text-muted-foreground">World-class 18-hole golf course designed by Severiano Ballesteros with stunning ocean views.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
