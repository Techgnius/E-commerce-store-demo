import React from "react";
import TrendyImg from "../images/blog-header-img.jpg";
import BlogImg1 from "../images/blog-pic1.jpg";
import BlogImg2 from "../images/blog-pic2.jpg";
import BlogImg3 from "../images/blog-pic3.jpg";
import BlogImg4 from "../images/blog-pic4.jpg";

const Blog = () => {
  return (
    <>
      <div className="blog-con">
        <div className="blog-topScreen">
          <h1>Quality And Affordable Products</h1>
        </div>
        <div className="blog-trendy-card">
          <h1>Creative Blog</h1>
          <img src={TrendyImg} width={280} alt="" />
          <p>This is the best place to get Urban trendy fashion outfits. </p>
        </div>
        <div className="blog">
          <div className="header">
            <h1>What's Trending...</h1>
          </div>
          <div className="blog-card-container">
            <div className="blog-card">
              <img src={BlogImg2} width={250} height={230} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
                vel enim. Laborum nisi eaque commodi fugiat quos blanditiis
                autem doloribus eveniet quia esse.
              </p>
              <button type="button" className="blog-btn">
                Learn More
              </button>
            </div>
            <div className="blog-card">
              <img src={BlogImg1} width={250} height={230} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
                vel enim. Laborum nisi eaque commodi fugiat quos blanditiis
                autem doloribus eveniet quia esse.
              </p>
              <button type="button" className="blog-btn">
                Learn More
              </button>
            </div>
            <div className="blog-card">
              <img src={BlogImg3} width={250} height={230} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
                vel enim. Laborum nisi eaque commodi fugiat quos blanditiis
                autem doloribus eveniet quia esse.
              </p>
              <button type="button" className="blog-btn">
                Learn More
              </button>
            </div>
            <div className="blog-card">
              <img src={BlogImg4} width={250} height={230} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
                vel enim. Laborum nisi eaque commodi fugiat quos blanditiis
                autem doloribus eveniet quia esse.
              </p>
              <button type="button" className="blog-btn">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
