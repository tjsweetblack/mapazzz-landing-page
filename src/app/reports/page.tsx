"use client";
import { useState, useEffect } from "react";
import Container from "@/components/Container";
import Image from "next/image";

interface Post {
    title: string;
    location: string;
    description: string;
    riskLevel: number;
    imageUrl: string;
    latitude: string;
    longitude: string;
}

export default function ReportsPage() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Post[]>([]); // Usando apenas um estado para os dados
    const [selectedPost, setSelectedPost] = useState<Post | null>(null); // Estado para o post selecionado
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

    const fetchData = async () => {
        try {
            const res = await fetch("https://mapazzz-api.vercel.app/api/reportagens");
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.error("Erro ao buscar os dados", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const openModal = (post: Post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPost(null);
        setIsModalOpen(false);
    };

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
                            <span className="text-primary">Reportagens</span> de Risco
                        </h3>
                        <p className="mt-2 text-lg/8 text-gray-600">
                            Confira os relatos enviados pela comunidade sobre a malária.
                        </p>
                    </div>

                    <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
                        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                            {data.map((post: Post) => (
                                <div className="relative" key={post.title}>
                                    <a className="block overflow-hidden group rounded-xl shadow-lg">
                                        <Image
                                            src={post.imageUrl}
                                            width={150}
                                            height={150}
                                            className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                                            alt={post.title}
                                            placeholder="blur"
                                            blurDataURL={post.imageUrl} // Use the same URL for blur effect
                                        />
                                    </a>
                                    <div className="relative mt-5">
                                        <p
                                            className={`uppercase font-semibold text-xs mb-2.5 rounded-full p-1 text-white ${
                                                post.riskLevel === 1 ? "bg-green-500" : "bg-red-500"
                                            }`}
                                        >
                                            {post.riskLevel === 1 ? "Zona de Baixo Risco" : "Zona de Alto Risco"}
                                        </p>
                                        <a href="#" className="block mb-3 hover:underline">
                                            <h2 className="text-2xl font-bold leading-5 capitalize text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
                                                {post.title || "Título não disponível"}
                                            </h2>
                                        </a>
                                        <p className="mb-4 text-gray-700 dark:text-gray-300">
                                            {post.description || "Descrição não disponível"}
                                        </p>
                                        <p className="mb-4 text-gray-700 dark:text-gray-300">
                                            <small>Localização: {post.location || "localização não disponível"}</small>
                                        </p>
                                        <button
                                            onClick={() => openModal(post)}
                                            className="font-medium underline text-purple-600 dark:text-purple-400"
                                        >
                                            Leia mais
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
                        <Image
                            src={selectedPost.imageUrl}
                            width={150}
                            height={150}
                            className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                            alt={selectedPost.title}
                            placeholder="blur"
                            blurDataURL={selectedPost.imageUrl}
                        />
                        <h2 className="text-2xl font-bold mb-4 capitalize">{selectedPost.title}</h2>
                        <p className="mb-4 text-gray-700">{selectedPost.description}</p>
                        <p className="mb-4 text-gray-700">
                            Localização: <span className="font-semibold">{selectedPost.location}</span>
                        </p>
                        <p className="mb-4 text-gray-700">
                            Nível de Risco:{" "}
                            <span
                                className={`font-semibold ${
                                    selectedPost.riskLevel === 1 ? "text-green-500" : "text-red-500"
                                }`}
                            >
                                {selectedPost.riskLevel === 1 ? "Baixo Risco" : "Alto Risco"}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>Latitude: {selectedPost.latitude}</li>
                                <li>Longitude: {selectedPost.longitude}</li>
                            </ul>
                        </p>
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </Container>
    );
}