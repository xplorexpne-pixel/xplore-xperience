export default function LatestBlogs() {
  return (
    <section className="blogs-section">
      
      {/* HEADER */}
      <div className="blogs-header">
        <h2>Latest Blogs</h2>
        <p>
          Discover hidden gems, must-visit spots, and practical tips to make
          the most of every journey.
        </p>
      </div>

      {/* BLOG CARDS */}
      <div className="blogs-grid">
        <div className="blog-card">
          <img src="/image/image1.jpg" alt="Blog 1" />
        </div>

        <div className="blog-card">
          <img src="/image/image2.jpg" alt="Blog 2" />
        </div>

        <div className="blog-card">
          <img src="/image/shikkim.jpg" alt="Blog 3" />
        </div>

        <div className="blog-card">
          <img src="/image/dzuko.jpg" alt="Blog 4" />
        </div>
      </div>

    </section>
  );
}
