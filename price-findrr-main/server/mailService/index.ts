"use server"

import nodemailer from 'nodemailer'
import { toast } from "react-toastify";

const Type = {
    WELCOME: 'WELCOME',
    STOCK: 'STOCK_UPDATE',
    LOWEST_PRICE: 'LOWEST_PRICE',
    THRESHOLD: 'THRESHOLD_MET'
}

export const setEmailBody = async (product: {productTitle: string, url: string}, type: any) => {
    const snippedTitle = product.productTitle?.length > 20 ? product.productTitle.substring(0, 20) + "..." : product.productTitle

    let mailSubject = ''
    let body = ''
    const THRESHOLD = 30
    switch(type){
        case Type.WELCOME:
            mailSubject = `Welcome to Price Findrr!`
            body = `
            <div>
                <h2>Welcome to Price Findrr!</h2>
                <p>We're excited to have you track the price of the "${snippedTitle}" product.</p>
                <p>Here is the original product URL:</p>
                <p><a href="${product.url}" target="_blank">${product.url}</a></p>
                <p>Thank you for choosing PriceFindrr!</p>
            </div>
            `
            break;
        
        case Type.STOCK:
            mailSubject = `Stock Update for "${snippedTitle}"`
            body = `
            <div>
                <h2>Stock Update for "${snippedTitle}"</h2>
                <p>The "${snippedTitle}" product is back in stock!</p>
                <p>Hurry up and grab yours before they run out!</p>
                <p>Here is the original product URL:</p>
                <p><a href="${product.url}" target="_blank">${product.url}</a></p>
                <p>Thank you for choosing PriceFindrr!</p>
            </div>
            `
            break;

        case Type.LOWEST_PRICE:
            mailSubject = `Lowest Price for "${snippedTitle}"`
            body = `
            <div>
                <h2>Lowest Price for "${snippedTitle}"</h2>
                <p>The "${snippedTitle}" product is now at the lowest price!</p>
                <p>Here is the original product URL:</p>
                <p><a href="${product.url}" target="_blank">${product.url}</a></p>
                <p>Thank you for choosing PriceFindrr!</p>
            </div>
            `
            break;

        case Type.THRESHOLD:
            mailSubject = `Disount Alert for "${snippedTitle}"`
            body = `
            <div>
                <h2>Discount Alert for "${snippedTitle}"</h2>
                <p>The "${snippedTitle}" product is now available at a discounted price more than ${THRESHOLD}% !</p>
                <p>Here is the original product URL:</p>
                <p><a href="${product.url}" target="_blank">${product.url}</a></p>
                <p>Thank you for choosing PriceFindrr!</p>
            </div>
            `
            break;
        
        default:
            throw new Error("Invalid email type.");
    }
    return { mailSubject, body };
}

const transporter = nodemailer.createTransport({
    pool: true,
    service: 'hotmail',
    port: 587,
    host: 'smtp-mail.outlook.com',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
    maxConnections: 1   
})

export const sendEmail = async(emailContent: {mailSubject: string, body: string}, email: string[]) => {
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        html: emailContent.body,
        subject: emailContent.mailSubject
    }

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });
}