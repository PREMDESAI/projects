import axios from 'axios'
import * as cheerio from 'cheerio'
import { getPrice, getCurrency, getDescription, getRating, getCategory } from '../utils';

export async function scrapeProduct(productUrl: string): Promise<any> {
    if(!productUrl) {
        return;
    }

    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 22225
    const session_id = (1000000 * Math.random()) | 0
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false
    }

    try {
        const response = await axios.get(productUrl, options)
        const $ = cheerio.load(response.data)
        const title = $('#productTitle').text().trim()
        const currPrice = getPrice(
            $('.priceToPay span.a-price-whole'),
            $('a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base')
        )

        const originalPrice = getPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen')
        )

        const stockCheck = $('#availability span').text().trim().toLowerCase() === 'currently unavailable'

        const images = $('#imgBlkFront').attr('data-a-dynamic-image') || $('#landingImage').attr('data-a-dynamic-image') || '{}'
        const imageUrls = Object.keys(JSON.parse(images))

        const currency = getCurrency($('.a-price-symbol'))
        
        const discount = $('span.savingPriceOverride ').text().trim().replace(/[-%]/g, '')

        const description = getDescription(
            $('#featurebullets_feature_div'),
            $('span.a-list-item')
        )
        
        const rating = getRating(
            $('#averageCustomerReviews'),
            $('span.a-color-base')
        )

        const category = getCategory(
            $('.nav-a.nav-b')
        )
        const data = {
            url: productUrl,
            productTitle: title,
            current_price: Number(currPrice),
            original_price: Number(originalPrice),
            price_history: [],
            outOfStock: stockCheck,
            image: imageUrls[0],
            currency: currency || '₹',
            discountRate: Number(discount),
            description, 
            rating: Number(rating[0]+rating[1]+rating[2]),
            category: category
        }
        return data
    } catch(e: any){
        throw new Error(`Scraping failed: ${e.message}`)
    }
}