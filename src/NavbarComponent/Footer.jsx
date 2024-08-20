import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container my-5">
        <footer className="text-center text-lg-start bg-dark text-white">
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-white">
                    EventSphere
                  </h5>
                  <p>
                    "EventSphere: Where every detail is a work of art. Let's collaborate to make your event an extraordinary experience!"
                  </p>
                </div>

                <div className="col-lg-6 col-md-6 mb-4 mb-md-0 d-flex justify-content-end">
                  <div className="me-4">
                    <h5 className="text-uppercase">
                      <Link to="/about-us" className="text-white text-decoration-none">
                        About us
                      </Link>
                    </h5>
                  </div>
                  <div>
                    <h5 className="text-uppercase">
                      <Link to="/contact-us" className="text-white text-decoration-none">
                        Contact us
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="text-center p-3">
            © 2024 Copyright:
            <a className="text-white" href="#">
              eventsphere.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
