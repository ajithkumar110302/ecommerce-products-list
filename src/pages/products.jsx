import ProductList from '../components/ProductList';
import Header from '../components/Header';

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <main>
          <ProductList />
        </main>
      </div>
    </div>
  );
}