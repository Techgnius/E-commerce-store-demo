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
          <h1>
            Welcome To Our <span>Blog Page</span>
          </h1>
          <p>
            <b>
              Stay up to date with our daily news about
              <br /> fashion and lifestyle.
            </b>
          </p>
        </div>
        <div className="blog-body">
          <div className="header">
            <h1>
              Creative <span>Blog</span>
            </h1>
          </div>
          <div className="blog-trendy-card">
            <img src={TrendyImg} width={320} alt="" />
            <p>
              Checkout what's hot and what's not...on our daily blog posts. Get
              trending gists about fashion and lifestyle that would keep you up
              to date. We encourage you to also participate here by blogging
              about what interests you.
            </p>
          </div>
          <div className="blog">
            <div className="header">
              <h1>
                What's <span>Trending</span>...
              </h1>
            </div>
            <div className="blog-card-container">
              <div className="blog-card">
                <img src={BlogImg2} width={250} height={230} alt="" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eius, vel enim. Laborum nisi eaque commodi fugiat quos
                  blanditiis autem doloribus eveniet quia esse.
                </p>
                <button type="button" className="blog-btn">
                  Read More
                </button>
              </div>
              <div className="blog-card">
                <img src={BlogImg1} width={250} height={230} alt="" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eius, vel enim. Laborum nisi eaque commodi fugiat quos
                  blanditiis autem doloribus eveniet quia esse.
                </p>
                <button type="button" className="blog-btn">
                  Read More
                </button>
              </div>
              <div className="blog-card">
                <img src={BlogImg3} width={250} height={230} alt="" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eius, vel enim. Laborum nisi eaque commodi fugiat quos
                  blanditiis autem doloribus eveniet quia esse.
                </p>
                <button type="button" className="blog-btn">
                  Read More
                </button>
              </div>
              <div className="blog-card">
                <img src={BlogImg4} width={250} height={230} alt="" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eius, vel enim. Laborum nisi eaque commodi fugiat quos
                  blanditiis autem doloribus eveniet quia esse.
                </p>
                <button type="button" className="blog-btn">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
