import axios from "axios";
export default function Home({ produks, url }) {
  console.log(produks, url);
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
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={`http://127.0.0.1:1337${produks.data.attributes.image.data.attributes.url}`}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">
                {produks.data.attributes.nama}
              </h1>
              <div className="mb-3">
                {produks.data.attributes.harga.map((item, index) => {
                  return (
                    <p>
                      {item.nama}:{item.harga}
                    </p>
                  );
                })}
              </div>

              <p className="lead">{produks.data.attributes.description}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  defaultValue={1}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export async function getServerSideProps(req, res) {
  const response = await axios.get(
    `http://127.0.0.1:1337/api/produks/${req.query.id}?populate=*`
  );
  const url = "http://127.0.0.1:1337";
  const produks = response.data;
  console.log(produks);
  return {
    props: { produks, url },
  };
}
