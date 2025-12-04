"use client";

import { useEffect, useState } from "react";
import ItemCard from "../../components/search/item-card";
import axios from "axios";
import type { NextPage } from "next";
import { useParams, useRouter } from "next/navigation";
import {
  GeniusAlbumResponse,
  GeniusArtistSectionResponse,
  GeniusSearchResponse,
  GeniusSongSectionResponse,
} from "../../types";
import SongRow from "../../components/search/song-row";
import Skeleton from "../../components/skeleton";

const Search: NextPage = () => {
  const { id } = useParams();
  const [searchData, setSearchData] = useState<GeniusSearchResponse | null>(null);
  const [albumsData, setAlbumsData] = useState<GeniusAlbumResponse | null>(null);
  const [artistsData, setArtistsData] = useState<GeniusArtistSectionResponse | null>(null);
  const [songsData, setSongsData] = useState<GeniusSongSectionResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { push } = useRouter();

  useEffect(() => {
    if (!id) push("/");
    axios
      .get("/api/genius/search", { params: { q: id, per_page: 10, page: 1 } })
      .then((res) => setSearchData(res.data));
    axios
      .get("/api/genius/search", { params: { type: "albums", q: id, per_page: 10, page: 1 } })
      .then((res) => setAlbumsData(res.data));
    axios
      .get("/api/genius/search", { params: { type: "songs", q: id, per_page: 30, page: 1 } })
      .then((res) => setSongsData(res.data));
    axios
      .get("/api/genius/search", { params: { type: "artists", q: id, per_page: 10, page: 1 } })
      .then((res) => {
        setArtistsData(res.data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <main className="flex gap-8 w-full">
      <section className="flex flex-col w-full">
        {/* Top Result */}
        <div className="flex flex-col gap-4">
          <h1>Top Result</h1>
          {searchData?.result?.response?.hits?.length ? (
            <ItemCard
              title={searchData.result.response?.hits[0].result.title}
              label={searchData.result.response?.hits[0].result.artist_names}
              type="banner"
              image={searchData.result.response?.hits[0].result.header_image_thumbnail_url}
            />
          ) : (
            <Skeleton className="w-full h-40" />
          )}
        </div>

        {/* Artists */}
        <div className="flex flex-col mt-8 gap-4">
          <h1>Artists</h1>
          <div className="grid gap-4 grid-cols-3 max-[1280px]:grid-cols-2 max-[1100px]:grid-cols-1">
            {artistsData
              ? artistsData?.result.response.sections[0].hits.map((item) => (
                  <ItemCard
                    key={item.result.id}
                    title={item.result.name}
                    label="Artist"
                    type="card"
                    image={item.result.header_image_url}
                  />
                ))
              : Array.from({ length: 10 }).map((_, i) => (
                  <Skeleton key={i} className="w-full h-40" />
                ))}
          </div>
        </div>

        {/* Albums */}
        <div className="flex flex-col mt-8 gap-4">
          <h1>Albums</h1>
          <div className="grid gap-4 grid-cols-3 max-[1280px]:grid-cols-2 max-[1100px]:grid-cols-1">
            {albumsData?.result.response.sections.length !== 0
              ? albumsData?.result.response.sections[0].hits.map((item) => (
                  <ItemCard
                    key={item.result.id}
                    title={item.result.name}
                    label={item.result.artist.name}
                    type="card"
                    image={item.result.cover_art_thumbnail_url}
                  />
                ))
              : Array.from({ length: 10 }).map((_, i) => (
                  <Skeleton key={i} className="w-full h-40" />
                ))}
          </div>
        </div>
      </section>

      {/* Songs */}
      <section className="flex flex-col w-full gap-4">
        <h1>Songs</h1>
        <div className="flex flex-col gap-2 w-full">
          {songsData
            ? songsData?.result.response.sections[0].hits.map((item, idx) => (
                <SongRow
                  key={item.result.id}
                  title={item.result.title}
                  id={idx + 1}
                  artist_names={item.result.artist_names}
                  header_image_thumbnail_url={item.result.header_image_thumbnail_url}
                />
              ))
            : Array.from({ length: 15 }).map((_, i) => (
                <Skeleton key={i} className="w-full h-10 my-1" />
              ))}
        </div>
      </section>
    </main>
  );
};

export default Search;
