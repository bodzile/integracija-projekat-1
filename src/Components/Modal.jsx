import {useState} from "react";
import {validateProduct} from "../Services/productValidator.js";


const Modal = ({isOpen, onCloseConfirm, onCloseCancel}) => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(1);
    const [error, setError] = useState(false);

    if (!isOpen) {
        return null;
    }

    const createProductObject = () => {
        let obj = {title, category, description, price, rating};
        return obj;
    };

    const confirmAction = () => {
        const result = validateProduct({title, category, description, price, rating});
        if(!result.isError) {
            onCloseConfirm(createProductObject());
            onCloseCancel();
        }
        else
            setError(result.message);
    };

    return (
        <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black/60 backdrop-blur-sm">
            <div className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white p-4 shadow-sm">
                <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
                    Add product
                </div>
                <div className="relative border-t border-slate-200 py-4 font-light leading-normal text-slate-600">
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
                    <button onClick={onCloseCancel}
                        className="rounded-md border border-transparent px-4 py-2 text-center text-sm text-slate-600 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Cancel
                    </button>
                    <button onClick={confirmAction}
                        className="ml-2 rounded-md border border-transparent bg-green-600 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
