import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

export function ProductCard({product}: {product: any}) {
  const title = product.productTitle.substring(0,40)
  return (
    <Link href={`/product/${product._id}`}><Card className="w-80 max-w-sm h-[450px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 z-10 relative m-4">
      <img
        alt="Product Image"
        className="w-full h-[50%] object-cover rounded-lg"
        src={product.image}
        style={{
          objectFit: "cover",
        }}
      />
      <CardContent className="p-3 bg-white">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title===product.productTitle ? title : title+"..."}</h3>
          <p className="text-gray-500 dark:text-gray-400 ">
            {product.rating} out of 5
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {product.outOfStock ? "Out of Stock" : "In Stock"}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">{product.currency}{product.current_price}</span>
            <span className="text-md font-bold">{product.category}</span>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  )
}
