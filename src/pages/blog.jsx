import React from "react";
import BlogImg1 from "../images/blog-pic1.jpg";
import BlogImg2 from "../images/blog-pic2.jpg";
import BlogImg3 from "../images/blog-pic3.jpg";
import BlogImg4 from "../images/blog-pic4.jpg";

const Blog = () => {
  return (
    <>
      <div className="blog-con">
        <div className="blog-topScreen">
          <h1 data-aos="zoom-in">
            Welcome To Our <span>Blog Page</span>
          </h1>
          <p data-aos="fade-left">
            <b>
              Stay up to date with our daily news about
              <br /> fashion and lifestyle.
            </b>
          </p>
        </div>
        <div className="blog-heading" data-aos="zoom-in">
          <h1>Inside Life: Stories And Interviews</h1>
          <p>
            Subscribe to learn more about new products features, the latest in
            fashion, and updates
          </p>
          <form>
            <input
              type="text"
              placeholder="Enter Your Email Address..."
              className="blog-sub"
            />
            <button className="sub-btn">Subscribe</button>
          </form>
        </div>
        <div className="blogger">
          <div className="blog-card-con">
            <div className="blogcard" data-aos="zoom-out">
              <img src={BlogImg2} width={250} height={230} alt="" />
              <p className="blogger-name">Cythia Emeka. 20 Jan 2023</p>
              <h3 className="blog-topic">Conversation With Fashion Model</h3>
              <p className="blog-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <br /> Eius, vel enim. Laborum nisi eaque commodi fugiat
                <br /> quos blanditiis autem doloribus eveniet quia esse.
              </p>
              <button type="button" className="blog-btn2">
                Read More
              </button>
              <button type="button" className="blog-btn2">
                Comment
              </button>
            </div>
            <div className="blogwrapper">
              <div className="blogCard" data-aos="zoom-out">
                <img src={BlogImg1} width={250} height={230} alt="" />
                <div className="blobContent">
                  <p className="blogger-name">Chinedu Nwachukwu. 6 Jan 2023</p>
                  <h3 className="blog-topic">
                    A Relentless Pursuit of Perfection
                    <br /> In Fashion Style
                  </h3>
                  <p className="blog-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br /> Eius, vel enim. Laborum nisi eaque commodi fugiat
                    <br /> quos blanditiis autem doloribus eveniet quia esse.
                  </p>
                  <button type="button" className="blog-btn2">
                    Read More
                  </button>
                  <button type="button" className="blog-btn2">
                    Comment
                  </button>
                </div>
              </div>
              <div className="blogCard" data-aos="zoom-out">
                <img src={BlogImg3} width={250} height={230} alt="" />
                <div className="blobContent">
                  <p className="blogger-name">Musa Adamu. 23 Oct 2023</p>
                  <h3 className="blog-topic">
                    How to Run A Successful Business
                    <br /> With Your Partner
                  </h3>
                  <p className="blog-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br /> Eius, vel enim. Laborum nisi eaque commodi fugiat
                    <br /> quos blanditiis autem doloribus eveniet quia esse.
                  </p>
                  <button type="button" className="blog-btn2">
                    Read More
                  </button>
                  <button type="button" className="blog-btn2">
                    Comment
                  </button>
                </div>
              </div>
              <div className="blogCard" data-aos="zoom-out">
                <img src={BlogImg4} width={250} height={230} alt="" />
                <div className="blobContent">
                  <p className="blogger-name">Femi Adesina. 27 Oct 2023</p>
                  <h3 className="blog-topic">
                    Why Food Matters- Disease
                    <br /> Prevention & Treatment
                  </h3>
                  <p className="blog-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br /> Eius, vel enim. Laborum nisi eaque commodi fugiat
                    <br /> quos blanditiis autem doloribus eveniet quia esse.
                  </p>
                  <button type="button" className="blog-btn2">
                    Read More
                  </button>
                  <button type="button" className="blog-btn2">
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
