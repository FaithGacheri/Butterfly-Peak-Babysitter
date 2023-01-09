import React from "react";
import "../Styles/Blog.css"
import {Link} from "react-router-dom"

function Blog() {
  return (
    <div>
      {/* <h1>Blog</h1>
      <p>
        This blog is a collection of blog posts. It is used by blog posts only
      </p> */}
      <div className="g-section">
        <div className="g-card">
          <div className="g-image-section img-one"></div>
          <div className="g-content">
            <h2>Title One</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis, ad ratione error at animi optio odio dolores dolor earum atque, facilis voluptatem quas eveniet maiores quaerat enim voluptatibus sapiente?</p>
            <Link to="/blog/blog1"><button id="g-btn">Read More</button></Link>

          </div>
        </div>

        <div className="g-card">
          <div className="g-image-section img-two"></div>
          <div className="g-content">
            <h2>Title Two</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis, ad ratione error at animi optio odio dolores dolor earum atque, facilis voluptatem quas eveniet maiores quaerat enim voluptatibus sapiente?</p>
            <button id="g-btn">Read More</button>

          </div>
        </div>

        <div className="g-card">
          <div className="g-image-section img-three"></div>
          <div className="g-content">
            <h2>Title Three</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis, ad ratione error at animi optio odio dolores dolor earum atque, facilis voluptatem quas eveniet maiores quaerat enim voluptatibus sapiente?</p>
            <button id="g-btn">Read More</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
