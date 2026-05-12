import {useState} from "react";
import {validateProduct} from "../Services/productValidator.js";


const Modal = ({isOpen, onCloseConfirm, onCloseCancel, productData, resetProductData}) => {

    const id = productData?.id ?? -1;
    const [title, setTitle] = useState(productData?.title ?? "");
    const [category, setCategory] = useState(productData?.category ?? "");
    const [description, setDescription] = useState(productData?.description ?? "");
    const [price, setPrice] = useState(productData?.price ?? 0);
    const [rating, setRating] = useState(productData?.rating ?? 1);
    const [error, setError] = useState(false);

    if (!isOpen) {
        return null;
    }

    const resetForm = () => {
        setTitle("");
        setCategory("");
        setDescription("");
        setPrice(0);
        setRating(1);
        setError(false);
    };

    const createProductObject = () => {
        let obj = {id, title, category, description, price, rating};
        return obj;
    };

    const confirmAction = () => {
        const result = validateProduct({title, category, description, price, rating});
        if(!result.isError) {
            onCloseConfirm?.(createProductObject());
            resetForm();
            resetProductData();
            onCloseCancel();
        }
        else
            setError(result.message);
    };

    const cancelAction = () => {
        resetForm();
        resetProductData();
        onCloseCancel();
    };

    return (
        <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black/60 backdrop-blur-sm">
            <div className="relative m-4 w-4/5 lg:w-2/5  max-w-lg lg:max-w-md rounded-lg bc-surface-dim text-text p-4 shadow-sm">
                <div className="flex shrink-0 items-center pb-4 text-xl font-medium">
                    Add product
                </div>
                <div className="relative border-t border-slate-200 py-4 font-light leading-normal">
                    <form className="flex flex-col gap-3" action="">
                        <div className="relative flex items-center justify-between gap-4">
                            <label htmlFor="title">Title</label>
                            <input id="title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="rounded-md border border-slate-300 px-3 py-2"/>
                        </div>
                        <div className="relative flex items-center justify-between gap-4">
                            <label htmlFor="category">Category</label>
                            <input id="category" type="text" value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-md border border-slate-300 px-3 py-2"/>
                        </div>
                        <div className="relative flex items-center justify-between gap-4">
                            <label htmlFor="description">Description</label>
                            <input id="description" type="text" value={description} onChange={(event) => setDescription(event.target.value)} className="rounded-md border border-slate-300 px-3 py-2"/>
                        </div>
                        <div className="relative flex items-center justify-between gap-4">
                            <label htmlFor="price">Price</label>
                            <input id="price" type="number" value={price} onChange={(event) => setPrice(event.target.value)} className="rounded-md border border-slate-300 px-3 py-2"/>
                        </div>
                        <div className="relative flex items-center justify-between gap-4">
                            <label htmlFor="rating">Rating</label>
                            <input id="rating" type="number" value={rating} onChange={(event) => setRating(event.target.value)} className="rounded-md border border-slate-300 px-3 py-2"/>
                        </div>
                    </form>
                    {error && <p className="text-red-600">{error}</p>}
                </div>
                <div className="flex shrink-0 flex-wrap items-center justify-end pt-4">
                    <button onClick={cancelAction}
                        className="rounded-md border border-transparent px-4 py-2 text-center text-sm  transition-all hover:bg-slate-100 hover:text-[var(--color-surface-dim)] focus:bg-slate-100 active:bg-slate-100   "
                        type="button">
                        Cancel
                    </button>
                    <button onClick={confirmAction}
                        className="ml-2 rounded-md border border-transparent bg-green-600 px-4 py-2 text-center text-sm  shadow-md transition-all hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700  "
                        type="button">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
