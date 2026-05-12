import {useState} from "react";

const Filters = ({categories, filterProducts}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [title, setTitle] = useState(null);
    const [filterCategories, setFilterCategories] = useState([]);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    const buildFilterObject = () => {
        const res = {};

        if (title) res.title = title;
        if (minPrice !== null) res.minPrice = minPrice;
        if (maxPrice !== null) res.maxPrice = maxPrice;
        if (filterCategories.length > 0) res.categories = filterCategories;

        return res;
    };

    const toggleCategory = (category) => {
        setFilterCategories((oldCategories) =>
            oldCategories.includes(category)
                ? oldCategories.filter((x) => x !== category)
                : [...oldCategories, category]
        );
    };

    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)} className="fixed left-4 top-20 z-40 rounded-md bc-accent px-4 py-2 font-bold text-surface shadow-lg xl:hidden">
                Filters
            </button>

            {isOpen && (
                <button type="button" onClick={() => setIsOpen(false)} className="fixed inset-0 z-40 bg-black/50 xl:hidden">

                </button>
            )}

            <div className={`fixed left-0 top-16 z-50 h-screen w-72 max-w-[85vw] bc-surface-dim shadow-xl transition-transform duration-300 xl:translate-x-0 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                        <h5>Filters</h5>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close filters"
                            className="rounded-md px-3 py-1 text-2xl leading-none text-accent xl:hidden"
                        >
                            &times;
                        </button>
                    </div>

                    <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">

                        <div className="space-y-3">
                            <h6>Title</h6>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title here"  className="w-full rounded-md border border-white/10 bc-surface px-3 py-2 text-text outline-none focus:border-(--color-accent)"/>
                        </div>

                        <div className="space-y-3">
                            <h6>Category</h6>
                            {categories.map((category) => (
                                <label key={category} className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={filterCategories.includes(category)}
                                        onChange={() => toggleCategory(category)}
                                        className="accent-[var(--color-accent)]"
                                    />
                                    <span>{category}</span>
                                </label>
                            ))}

                        </div>

                        <div className="space-y-3">
                            <h6>Price</h6>
                            <div className="flex gap-3">
                                <input onChange={(e) => setMinPrice(Number(e.target.value))}
                                    type="number"
                                    placeholder="Min"
                                    className="w-full rounded-md border border-white/10 bc-surface px-3 py-2 text-text outline-none focus:border-[var(--color-accent)]"
                                />
                                <input onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    type="number"
                                    placeholder="Max"
                                    className="w-full rounded-md border border-white/10 bc-surface px-3 py-2 text-text outline-none focus:border-[var(--color-accent)]"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button onClick={() => filterProducts(buildFilterObject())} className="w-full rounded-md py-2 border border-(--color-accent) transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-surface-dim)]">Filter</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Filters;
