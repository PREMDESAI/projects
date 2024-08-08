import Link from "next/link"

export function SimilarProductCard({product}: {product: any}) {
  return (
    <Link href={`/product/${product._id}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all max-w-sm">
      <div className="relative">
        <img
          alt={product.productTitle}
          className="w-full h-[200px] object-cover"
          height={400}
          src={product.image}
          style={{
            aspectRatio: "400/400",
            objectFit: "cover",
          }}
          width={400}
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{product.productTitle}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">{product.currency}{product.current_price}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}