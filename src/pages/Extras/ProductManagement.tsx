import { useState, ChangeEvent, FormEvent } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D̉";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Macbook air m2");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(20);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  };
  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="productManagement">
        <section>
          <strong>ID- aedwkjdnkjaed</strong>
          <img src={photoUpdate} alt="nah not the right type" />
          <p>{nameUpdate}</p>
          {stockUpdate > 0 ? (
            <span className="green">{stockUpdate} Available</span>
          ) : (
            <span className="red">Not available</span>
          )}
          <h3>${priceUpdate}</h3>
        </section>
        <article>
          <form onSubmit={submitHandler}>
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input required type="file" onChange={changeHandler} />
            </div>
            {photoUpdate && <img src={photoUpdate} alt="slow internet bitch" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
