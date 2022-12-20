import axios from "axios";

export default function Home(produks) {
  return (
    <>
      <div>
        <table border="1px">
          <thead>
            <tr>
              <th>Nama Produk</th>
              <th>Deskripsi</th>
              <th>Foto Produk</th>
            </tr>
          </thead>
          <tbody>
            {produks.produks.map(function (produk, index) {
              return (
                <tr key={index}>
                  <td>{produk.attributes.nama}</td>
                  <td>{produk.attributes.decsription}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  const response = await axios.get("http://127.0.0.1:1337/api/produks");
  const data = await response.data;
  const produks = data.data;
  return {
    props: { produks }, // will be passed to the page component as props
  };
}
