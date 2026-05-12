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
            <table className="mt-7 w-full border border-[var(--color-text)]">
                <thead className="hidden lg:table-header-group bc-surface-dim">
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
                        <tr className="border border-[var(--color-text)]  flex flex-col lg:table-row py-3 px-3" key={id}>
                            <td className="lg:border lg:border-[var(--color-text)] px-1 py-1 lg:px-4 lg:py-3 font-bold text-text-heading">
                                <span className="font-bold lg:hidden">Id: </span> {id}
                            </td>
                            <td className="lg:border lg:border-[var(--color-text)] px-1 py-1 lg:px-4 lg:py-1 font-bold text-text-heading">
                                <span className="font-bold lg:hidden">Title: </span>{title}
                            </td>
                            <td className="lg:border lg:border-[var(--color-text)] px-1 py-1 lg:px-4 lg:py-3 text-accent">
                                <span className="font-bold lg:hidden">Category: </span>{category}
                            </td>
                            <td className="lg:border lg:border-[var(--color-text)] px-1 py-1 lg:px-4 lg:py-3">
                                <span className="font-bold lg:hidden">Description: </span>{description}
                            </td>
                            <td className="lg:border lg:border-[var(--color-text)] px-1 py-1 lg:px-4 lg:py-3">
                                <span className="font-bold lg:hidden">Price: </span>${price}
                            </td>
                            <td className="lg:border lg:border-[var(--color-text)] px-1 py-1 lg:px-4 lg:py-3 font-bold text-text-heading">
                                <span className="font-bold lg:hidden">Rating: </span>{rating}
                            </td>
                            <td className="lg:border lg:border-[var(--color-text)] px-1 py-1 lg:px-4 lg:py-3">
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
