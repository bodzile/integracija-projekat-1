import {useState} from "react";

const Filters = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)} className="fixed left-4 top-20 z-40 rounded-md bc-accent px-4 py-2 font-bold text-surface shadow-lg lg:hidden">
                Filters
            </button>

            {isOpen && (
                <button type="button" onClick={() => setIsOpen(false)} className="fixed inset-0 z-40 bg-black/50 lg:hidden">
                    Close filters
                </button>
            )}

            <div className={`fixed left-0 top-16 z-50 h-screen w-72 max-w-[85vw] bc-surface-dim shadow-xl transition-transform duration-300 lg:translate-x-0 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                        <h5>Filters</h5>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close filters"
                            className="rounded-md px-3 py-1 text-2xl leading-none text-accent lg:hidden"
                        >
                            &times;
                        </button>
                    </div>

                    <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
                        <section className="space-y-3">
                            <h6>Category</h6>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" className="accent-[var(--color-accent)]" />
                                <span>All products</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" className="accent-[var(--color-accent)]" />
                                <span>Electronics</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" className="accent-[var(--color-accent)]" />
                                <span>Furniture</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" className="accent-[var(--color-accent)]" />
                                <span>Clothing</span>
                            </label>
                        </section>

                        <div className="space-y-3">
                            <h6>Price</h6>
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                className="w-full accent-[var(--color-accent)]"
                            />
                            <div className="flex gap-3">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    className="w-full rounded-md border border-white/10 bc-surface px-3 py-2 text-text outline-none focus:border-[var(--color-accent)]"
                                />
                                <input
                                    type="number"
                                    placeholder="Max"
                                    className="w-full rounded-md border border-white/10 bc-surface px-3 py-2 text-text outline-none focus:border-[var(--color-accent)]"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h6>Availability</h6>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" className="accent-[var(--color-accent)]" />
                                <span>In stock</span>
                            </label>
                            <label className="flex items-center gap-3">
                                <input type="checkbox" className="accent-[var(--color-accent)]" />
                                <span>On sale</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filters;
