const { useState, useEffect } = React;

function ProjectCarousel() {
  const carouselRef = React.useRef(null);
  const [isHovering, setIsHovering] = React.useState(false);
  const scrollSpeed = 1; // Adjust the scroll speed as needed

  // Function to handle the scrolling
  const handleScroll = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollSpeed;
    }
  };

  React.useEffect(() => {
    // Set an interval for scrolling
    let scrollInterval = null;
    if (!isHovering) {
      scrollInterval = setInterval(handleScroll, 30);
    }

    // Clear the interval when the component unmounts or on hover
    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovering]);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div 
      ref={carouselRef} 
      className="project-carousel"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {projects.map((project, index) => (
        <div 
          className="project-card" 
          key={index}
          // You can also use onMouseEnter and onMouseLeave on individual cards
        >
          <div className="card-header">{project.title}</div>
          <div className="image-placeholder">Image will be here</div>
          <div className="card-footer">
            <div className="users-info">
              <i className="bi bi-person-circle"></i> users
            </div>
            <div className="rating-info">
              <i className="bi bi-star-fill"></i> 4.9 - 1.5k
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
