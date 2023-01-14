import Link from "next/link";
import axios from "axios";
export default function Home({ produk }) {
  console.log(produk);
  return (
    <main className="main" id="top">
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light opacity-85"
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a
                  className="nav-link fw-medium active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-medium" href="#Opportuanities">
                  Opportuanities
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-medium" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-medium" href="#invest">
                  Invest
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-medium" href="#contact">
                  Contact{" "}
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Product"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <section className="py-0" id="header">
        <div
          className="bg-holder d-none d-md-block"
          style={{
            backgroundImage: "url(assets/img/illustrations/hero-header.png)",
            backgroundPosition: "right top",
            backgroundSize: "contain",
          }}
        />
        {/*/.bg-holder*/}
        <div
          className="bg-holder d-md-none"
          style={{
            backgroundImage: "url(assets/img/illustrations/hero-bg.png)",
            backgroundPosition: "right top",
            backgroundSize: "contain",
          }}
        />
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row align-items-center min-vh-75 min-vh-lg-100">
            <div className="col-md-7 col-lg-6 col-xxl-5 py-6 text-sm-start text-center">
              <h1 className="mt-6 mb-sm-4 fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">
                A New Way to Invest <br className="d-block d-lg-block" />
                in Agriculture
              </h1>
              <p className="mb-4 fs-1">
                Zou provides farmes, ranchers, private foresters, and
                agricultural producers with online self service applications and
                educational materials.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" id="Opportuanities">
        <div
          className="bg-holder d-none d-sm-block"
          style={{
            backgroundImage: "url(assets/img/illustrations/bg.png)",
            backgroundPosition: "top left",
            backgroundSize: "225px 755px",
            marginTop: "-17.5rem",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto text-center mb-3">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">
                New Opportunities
              </h5>
            </div>
          </div>
          <div className="row flex-center h-100">
            <div className="col-xl-9">
              <div className="row">
                {produk.map((item, index) => {
                  console.log(item);
                  return (
                    <div className="col-md-4 mb-5">
                      <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-6 p-4">
                        <div className="text-center text-md-start card-hover">
                          <img
                            className="ps-3 icons"
                            src={`http://127.0.0.1:1337${item.image.url}`}
                            height={70}
                            alt
                          />
                          <div className="card-body">
                            <h6 className="fw-bold fs-1 heading-color">
                              {item.nama}
                            </h6>
                            <p className="mt-3 mb-md-0 mb-lg-2">
                              {item.decsription}
                            </p>
                          </div>
                        </div>
                        <Link
                          className=" btn btn-success"
                          href={`/produk/${item.id}`}
                        >
                          Detail
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/illustrations/how-it-works.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        />
        {/*/.bg-holder*/}
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-sm-8 col-md-9 col-xl-5 text-center pt-8">
              <h5 className="fw-bold fs-3 fs-xxl-5 lh-sm mb-3 text-white">
                How it works
              </h5>
              <p className="mb-5 text-white">
                Take your pick from the supply chain and participate in
                agribusiness projects that are backed up not only by Zou, but
                also by the best land, family heritage, innovation and overall
                superior expertise.
              </p>
            </div>
            <div className="col-sm-9 col-md-12 col-xxl-9">
              <div className="theme-tab">
                <ul className="nav justify-content-between">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active fw-semi-bold"
                      href="#bootstrap-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#tab1"
                      id="tab-1"
                    >
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">01</span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link fw-semi-bold"
                      href="#bootstrap-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#tab2"
                      id="tab-2"
                    >
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">02</span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link fw-semi-bold"
                      href="#bootstrap-tab3"
                      data-bs-toggle="tab"
                      data-bs-target="#tab3"
                      id="tab-3"
                    >
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">03</span>
                      </span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link fw-semi-bold"
                      href="#bootstrap-tab4"
                      data-bs-toggle="tab"
                      data-bs-target="#tab4"
                      id="tab-4"
                    >
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">04</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="tab-1"
                  >
                    <div className="row align-items-center my-6 mx-auto">
                      <div className="col-md-6 col-lg-5 offset-md-1">
                        <h3 className="fw-bold lh-base text-white">
                          Select your farmshare and complete reservation form
                          here.
                        </h3>
                      </div>
                      <div className="col-md-5 text-white offset-lg-1">
                        <p className="mb-0">
                          Et harum quidem rerum facilis est et expedita
                          distinctio. Nam libero tempore, cum soluta nobis est
                          eligendi optio cumque nihil impedit quo minus id quod
                          maxime placeat facere
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="tab-2"
                  >
                    <div className="row align-items-center my-6 mx-auto">
                      <div className="col-md-6 col-lg-5 offset-md-1">
                        <h3 className="fw-bold lh-base text-white">
                          The Farm Share has been one of the best new additions
                          to our life
                        </h3>
                      </div>
                      <div className="col-md-5 text-white offset-lg-1">
                        <p className="mb-0">
                          We the farmers choose the vegetables in your share
                          each week. A Farm Share is perfect for those who love
                          the weekly surprise, and who look forward to cooking
                          with inspiration from the seasons.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab3"
                    role="tabpanel"
                    aria-labelledby="tab-3"
                  >
                    <div className="row align-items-center my-6 mx-auto">
                      <div className="col-md-6 col-lg-5 offset-md-1">
                        <h3 className="fw-bold lh-base text-white">
                          There is so much love and thought put into this CSA.
                          You can feel that.
                        </h3>
                      </div>
                      <div className="col-md-5 text-white offset-lg-1">
                        <p className="mb-0">
                          We the farmers choose the vegetables in your share
                          each week. A Farm Share is perfect for those who love
                          the weekly surprise, and who look forward to cooking
                          with inspiration from the seasons.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab4"
                    role="tabpanel"
                    aria-labelledby="tab-4"
                  >
                    <div className="row align-items-center my-6 mx-auto">
                      <div className="col-md-6 col-lg-5 offset-md-1">
                        <h3 className="fw-bold lh-base text-white">
                          The Farm Share has been one of the best new additions
                          to our life
                        </h3>
                      </div>
                      <div className="col-md-5 text-white offset-lg-1">
                        <p className="mb-0">
                          We the farmers choose the vegetables in your share
                          each week. A Farm Share is perfect for those who love
                          the weekly surprise, and who look forward to cooking
                          with inspiration from the seasons.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0" id="coontact">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/illustrations/footer-bg.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        {/*/.bg-holder*/}
        {/* <div className="container">
          <hr className="text-300 mb-0" />
          <div className="row flex-center py-5">
            <div className="text-center">
              <a className="text-decoration-none" href="#">
                <img
                  className="d-inline-block align-top img-fluid"
                  src="assets/img/gallery/logo-icon.png"
                  alt
                  width={40}
                />
                <span className="text-theme font-monospace fs-3 ps-2">
                  Tanie
                </span>
              </a>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
export async function getServerSideProps(context) {
  const response = await axios.get(
    "http://127.0.0.1:1337/api/produks?populate=*"
  );

  const produk = await response.data;
  return {
    props: { produk }, // will be passed to the page component as props
  };
}
