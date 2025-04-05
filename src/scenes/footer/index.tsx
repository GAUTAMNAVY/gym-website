import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Your destination for strength, wellness, and transformation. We’re not just a gym — we’re a community that empowers every individual to become their strongest, healthiest self.
          </p>
          
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
          <a href="https://github.com/GAUTAMNAVY" target="_blank" rel="noopener noreferrer">Visit Github</a>
          </p>
          <p className="my-5">
          <a href="https://www.linkedin.com/in/navy-gautam-0247b1249/" target="_blank" rel="noopener noreferrer">Visit Linkedin</a>
          </p>
          
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">contact us for any query-
            NAVY GAUTAM</p>
          <p>+91-9509712813</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
