/* eslint-disable react/prop-types */
import { Heart, Info, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Produk({ products, onAddToCart }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState({});
    const [showInfo, setShowInfo] = useState(null);
    const [lovedProducts, setLovedProducts] = useState(new Set());

    const handleCommentClick = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setComment("");
    };

    const handleSubmitComment = () => {
        if (comment.trim()) {
            setComments((prev) => ({
                ...prev,
                [selectedProduct.id]: [...(prev[selectedProduct.id] || []), comment],
            }));
            closeModal();
        }
    };

    const handleInfoClick = (product) => {
        setShowInfo(product);
    };

    const closeInfoModal = () => {
        setShowInfo(null);
    };

    const handleLoveClick = (productId) => {
        setLovedProducts((prev) => {
            const updatedLovedProducts = new Set(prev);
            if (updatedLovedProducts.has(productId)) {
                updatedLovedProducts.delete(productId);
            } else {
                updatedLovedProducts.add(productId);
            }
            return updatedLovedProducts;
        });
    };

    return (
        <div className="produk-grid">
            {products.map((p) => (
                <div key={p.id} className="produk-card">
                    <div className="produk-image-wrapper">
                        <img src={p.foto} alt={p.nama} className="produk-image" />
                        <div className="overlay"></div>
                    </div>
                    <div className="produk-details">
                        <h3 className="produk-title">{p.nama}</h3>
                        <p className="produk-harga">Rp {p.harga.toLocaleString()}</p>
                        <p className="produk-deskripsi">{p.deskripsi}</p>
                        <p className="produk-kategori">
                            <strong>Kategori:</strong> {p.kategori}
                        </p>
                        <p className="produk-stok">
                            <strong>Stok:</strong> {p.stok}
                        </p>
                        <button className="btn-add-to-cart" onClick={() => onAddToCart(p)}>
                            ADD TO SHOP
                        </button>
                        <div className="produk-icons">
                            <Heart
                                onClick={() => handleLoveClick(p.id)}
                                className={`heart ${lovedProducts.has(p.id) ? 'loved' : ''}`}
                            />
                            <Info
                                onClick={() => handleInfoClick(p)}
                                className="hover:text-orange-200 transition-colors duration-300 cursor-pointer"
                            />
                            <MessageCircle
                                onClick={() => handleCommentClick(p)}
                                className="hover:text-orange-200 transition-colors duration-300 cursor-pointer"
                            />
                        </div>
                        {comments[p.id] && (
                            <ul className="comments-list">
                                {comments[p.id].map((c, index) => (
                                    <li key={index} className="comment">
                                        {c}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}

            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Comment on {selectedProduct.nama}</h3>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write your comment here..."
                            className="comment-input"
                        ></textarea>
                        <div className="modal-actions">
                            <button onClick={handleSubmitComment} className="btn-submit">
                                Submit
                            </button>
                            <button onClick={closeModal} className="btn-cancel">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showInfo && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Detail Produk: {showInfo.nama}</h3>
                        <img src={showInfo.foto} alt={showInfo.nama} className="modal-image" />
                        <p className="modal-description">{showInfo.deskripsi}</p>
                        <p>
                            <strong>Kategori:</strong> {showInfo.kategori}
                        </p>
                        <p>
                            <strong>Harga:</strong> Rp {showInfo.harga.toLocaleString()}
                        </p>
                        <p>
                            <strong>Stok:</strong> {showInfo.stok}
                        </p>
                        {showInfo.warna && (
                            <p>
                                <strong>Warna:</strong> {showInfo.warna}
                            </p>
                        )}
                        {showInfo.dimensi && (
                            <p>
                                <strong>Dimensi:</strong> {showInfo.dimensi}
                            </p>
                        )}
                        <button onClick={closeInfoModal} className="btn-cancel">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
