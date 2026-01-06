'use client';

import { useState } from 'react';
import { projects, categories } from '@/data/projects';
import { MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ProjectsGrid() {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredProjects = activeCategory === "Todos"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 border border-slate-100 flex flex-col h-full hover:-translate-y-1">
                            {/* Image Area */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold rounded-full shadow-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex items-center text-slate-500 text-sm mb-4">
                                    <MapPin className="w-4 h-4 mr-1 text-accent" />
                                    {project.location}
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                {/* Stats Mini-Grid */}
                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Área</p>
                                        <p className="font-bold text-slate-800">{project.stats.area}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Ahorro</p>
                                        <p className="font-bold text-emerald-600">{project.stats.savings}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-lg">No se encontraron proyectos en esta categoría.</p>
                    </div>
                )}

            </div>
        </section>
    );
}
