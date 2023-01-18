import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
export default function Home({ kategori }) {
  const [namaKategori, setNama] = useState(kategori.data.attributes.nama);
  function Change(e) {
    setNama(e.target.value);
  }
  const router = useRouter();
  async function send(e) {
    e.preventDefault();
    const put = await axios({
      url: `http://127.0.0.1:1337/api/kategoris/${kategori.data.id}`,
      method: "PUT",
      data: {
        data: {
          nama: namaKategori,
        },
      },
    });
    alert("YAKIN DECK ?");
    setNama("");
    router.replace("/admin");
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light py-3 bg-light opacity-85"
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
                <a className="nav-link fw-medium" href="/admin">
                  Admin{" "}
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
        </div>
      </nav>
      <div className="container">
        <img
          src="/assets/img/admin.png"
          className="mx-auto d-block"
          alt="..."
          width={200}
          height={200}
        />
        <form
          onSubmit={function (e) {
            send(e);
          }}
          className="p-2"
        >
          <div className="row d-flex justify-content-center">
            <div className="mb-3 col-lg-4 ">
              <input
                value={namaKategori}
                type="text"
                onChange={function (e) {
                  Change(e);
                }}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Add Kategori"
              />
              <button
                type="submit"
                className=" mt-3 btn btn-primary rounded mx-auto d-block
              "
              >
                Edit Kategori
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export async function getServerSideProps(req, res) {
  const response = await axios.get(
    `http://127.0.0.1:1337/api/kategoris/${req.query.id}`
  );
  const kategori = response.data;
  return {
    props: { kategori },
  };
}
