import { useState } from "react";
import ItemCard from "../components/search/ItemCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  return (
    <main className="flex p-4 gap-2 w-full">
      <section className="flex flex-col w-full">
        <div className="flex flex-col gap-4">
          <h1>Top Result</h1>
          <div className="flex flex-col">
            <ItemCard
              title="Jane Remover"
              label="Artist"
              type="banner"
              image="https://cdn-images.dzcdn.net/images/artist/c98b81b065fe61f96bca535cbc9554ce/1900x1900-000000-81-0-0.jpg"
            />
          </div>
        </div>

        <div className="flex flex-col mt-8 gap-4">
          <h1>Artists</h1>
          <div className="grid grid-cols-2 gap-4 w-max">
            <ItemCard
              title="Jane Remover"
              label="Artist"
              type="card"
              image="https://cdn-images.dzcdn.net/images/artist/c98b81b065fe61f96bca535cbc9554ce/1900x1900-000000-81-0-0.jpg"
            />

            <ItemCard
              title="Jane Remover"
              label="Artist"
              type="card"
              image="https://cdn-images.dzcdn.net/images/artist/c98b81b065fe61f96bca535cbc9554ce/1900x1900-000000-81-0-0.jpg"
            />
          </div>
        </div>

        <div className="flex flex-col mt-8 gap-4">
          <h1>Albums</h1>
          <div className="grid grid-cols-2 gap-4 w-max">
            <ItemCard
              title="Jane Remover"
              label="Artist"
              type="card"
              image="https://cdn-images.dzcdn.net/images/artist/c98b81b065fe61f96bca535cbc9554ce/1900x1900-000000-81-0-0.jpg"
            />
            <ItemCard
              title="Jane Remover"
              label="Artist"
              type="card"
              image="https://cdn-images.dzcdn.net/images/artist/c98b81b065fe61f96bca535cbc9554ce/1900x1900-000000-81-0-0.jpg"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1>Tracks</h1>
      </section>
    </main>
  );
};

export default Search;
