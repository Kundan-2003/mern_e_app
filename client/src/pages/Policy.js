import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jfif"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Vedic Literature values your privacy and protects your personal information.</p>
          <p>Information We Collect
          We collect personal details (name, email, address, payment info) and browsing data.</p>
          <p>Use of Information
          We use your data to process orders, communicate, and improve our services.</p>
          <p>Sharing Information
          We don’t sell your data. We share it only with trusted partners and for legal reasons.</p>
          <p>Data Security
          We ensure your data is secure.</p>
          <p>Policy Updates
          Changes to this policy will be posted here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;