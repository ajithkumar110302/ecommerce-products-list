export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 animate-skeleton" />
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded animate-skeleton mb-2" />
        <div className="h-4 bg-gray-200 rounded animate-skeleton w-24 mb-4" />
        <div className="h-10 bg-gray-200 rounded animate-skeleton" />
      </div>
    </div>
  );
}