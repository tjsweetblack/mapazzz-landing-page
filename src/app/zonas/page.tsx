"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";

type Post = {
  location: string;
  latitude: string;
  longitude: string;
  riskLevel: number;
};

export default function Zonas() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("https://mapazzz-api.vercel.app/api/reportagens/zonas");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg animate-pulse">Carregando os dados...</p>
      </div>
    );
  }

  return (
    <Container className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              <span className="text-primary">Zonas</span> de Risco
            </h3>
            <p className="mt-2 text-lg/8 text-gray-600">
              Veja as áreas identificadas como potenciais focos de proliferação da malária.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.map((post: Post) => (
              <article key={post.location} className="flex max-w-xl flex-col items-start justify-between bg-slate-100 p-10">
                <div className="flex items-center gap-x-4 text-xs">
                  <a
                    className={`relative z-10 rounded-full px-3 py-1.5 font-medium text-white ${
                      post.riskLevel === 1 ? "bg-green-500" : "bg-red-500"
                  }`}
                  >
                     {post.riskLevel === 1 ? "Zona de Baixo Risco" : "Zona de Alto Risco"}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a>
                      <span className="absolute inset-0" />
                      {post.location}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    <b>Latitude</b>: {post.latitude}
                  </p>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    <b>Longitude</b>: {post.longitude}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
