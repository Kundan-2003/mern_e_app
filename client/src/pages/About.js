import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about1.jpg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to <strong>Vedic Treasures</strong> , your go-to bookstore for the works of A.C. Bhaktivedanta Swami Prabhupada. 
            We specialize in providing a wide collection of Prabhupada's books, which explore the profound wisdom of 
            the Vedas, Bhagavad-gita, and Srimad-Bhagavatam.Our mission is to make these enlightening texts accessible
            to everyone, whether you are new to Vedic philosophy or a seasoned practitioner. In addition to our book offerings,
            we host events, workshops, and study groups to deepen your understanding. Let Prabhupada's teachings guide you on a journey of spiritual 
            discovery and personal growth. Join us today!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;