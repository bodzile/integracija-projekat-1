const ProductList = ({products}) => {
    return (
        <div className="w-full overflow-x-auto">
            <button className="rounded-md border border-blue-400 px-3 py-1 text-blue-400">Add product</button>
            <table className="mt-7 w-full min-w-[900px] border-collapse border border-[var(--color-text)]">
                <thead className="bc-surface-dim">
                    <tr>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Id</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Image</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Title</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Category</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Description</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Price</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(({id, title, description, price, images, category}) => (
                        <tr key={id}>
                            <td className="border border-[var(--color-text)] px-4 py-3 font-bold text-text-heading">
                                {id}
                            </td>
                            <td className="border border-[var(--color-text)] px-4 py-3">
                                <img
                                    className="h-14 w-14 rounded-md object-cover"
                                    src={images[0]}
                                    alt={title}
                                />
                            </td>
                            <td className="border border-[var(--color-text)] px-4 py-3 font-bold text-text-heading">
                                {title}
                            </td>
                            <td className="border border-[var(--color-text)] px-4 py-3 text-accent">
                                {category}
                            </td>
                            <td className="border border-[var(--color-text)] px-4 py-3">
                                {description}
                            </td>
                            <td className="border border-[var(--color-text)] px-4 py-3">
                                ${price}
                            </td>
                            <td className="border border-[var(--color-text)] px-4 py-3">
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        className="rounded-md border border-[var(--color-text-heading)] px-3 py-1 text-text-heading"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-md border border-red-400 px-3 py-1 text-red-400"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
