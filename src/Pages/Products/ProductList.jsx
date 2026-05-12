import {useState} from "react";
import Modal from "../../Components/Modal.jsx";

const ProductList = ({products, createProduct, updateProduct, deleteProduct}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalAction, setModalAction] = useState(null);
    const [productData, setProductData] = useState(null);

    const getProductById = (id) => (products.find(x => x.id === id));
    const resetProductData = () => setProductData(null);

    return (
        <div className="w-full overflow-x-auto">
            <button
                type="button"
                onClick={() => {setProductData(null); setModalAction(() => createProduct); setIsModalOpen(true)} }
                className="rounded-md border border-blue-400 px-3 py-1 text-blue-400">
                Add product
            </button>
            <Modal
                key={productData?.id ?? "create-product"}
                resetProductData={resetProductData}
                productData={productData}
                isOpen={isModalOpen}
                onCloseConfirm={modalAction}
                onCloseCancel={() => setIsModalOpen(false)}
            />
            <table className="mt-7 w-full min-w-[900px] border-collapse border border-[var(--color-text)]">
                <thead className="bc-surface-dim">
                    <tr>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Id</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Title</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Category</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Description</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Price</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Rating</th>
                        <th className="border border-[var(--color-text-heading)] px-4 py-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(({id, title, description, price, rating, category}) => (
                        <tr key={id}>
                            <td className="border border-[var(--color-text)] px-4 py-3 font-bold text-text-heading">
                                {id}
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
                            <td className="border border-[var(--color-text)] px-4 py-3 font-bold text-text-heading">
                                {rating}
                            </td>
                            <td className="border border-[var(--color-text)] px-4 py-3">
                                <div className="flex gap-2">
                                    <button onClick={() => { setProductData(getProductById(id)); setModalAction(() => updateProduct); setIsModalOpen(true)}}
                                        type="button"
                                        className="rounded-md border border-[var(--color-text-heading)] px-3 py-1 text-text-heading">
                                        Edit
                                    </button>
                                    <button onClick={() => deleteProduct(id) }
                                        type="button"
                                        className="rounded-md border border-red-400 px-3 py-1 text-red-400">
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
