import { motion } from 'framer-motion';
import { CartState } from '../context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 }
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function ProductCard({ product }) {
  const { dispatch } = CartState();

  return (
    <motion.article
       variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <motion.div
        className="relative h-48 overflow-hidden"
        whileHover={{ scale: 1.1 }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">
          ${product.price}
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => dispatch({
            type: "ADD_TO_CART",
            payload: product,
          })}
          className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          aria-label={`Add ${product.name} to cart`}
        >
          <FontAwesomeIcon icon={faCartShopping} className='text-white size-4 mr-4' />
          Add to Cart
        </motion.button>
      </div>
    </motion.article>
  );
}