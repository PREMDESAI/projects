// pages/index.js
import { useState, useEffect } from 'react';
import ModelForm from '../components/ModelForm';
import Web3 from 'web3';


const web3 = new Web3();

export default function Home() {
    const [payment, setPayment] = useState(0);
    const [paymentInEth, setPaymentInEth] = useState(0);
    const [paymentInUsd, setPaymentInUsd] = useState(0);
    const [paymentPerSecond, setPaymentPerSecond] = useState(0);
    const [paymentPerMinute, setPaymentPerMinute] = useState(0);
    const [paymentPerHour, setPaymentPerHour] = useState(0);
    const [height, setHeight] = useState(1024);
    const [width, setWidth] = useState(1024);
    const [frames, setFrames] = useState(25);
    const [price, setPrice] = useState(3390842);
    const [modelType, setModelType] = useState('text-to-image');
    const [etherToUsdRate, setEtherToUsdRate] = useState(3496);
    const [framesPerSecond, setFramesPerSecond] = useState(7);



    const calculatePayment = () => {
        let outputPixels = height * width;
        if (modelType === 'image-to-video') {
            outputPixels *= frames;
        }
        const paymentInWei = Math.round(outputPixels * price);
        setPayment(paymentInWei);

        const paymentInEther = web3.utils.fromWei(paymentInWei.toString(), 'ether');
        setPaymentInEth(paymentInEther);

        const paymentInUsd = paymentInEther * etherToUsdRate;
        setPaymentInUsd(paymentInUsd);

        const paymentPerSecond = paymentInUsd / frames * framesPerSecond;
        setPaymentPerSecond(paymentPerSecond);

        const paymentPerMinute = paymentPerSecond * 60;
        setPaymentPerMinute(paymentPerMinute);

        const paymentPerHour = paymentPerMinute * 60;
        setPaymentPerHour(paymentPerHour);
    };

    useEffect(() => {
        // Fetch the current price of Ether in USD while not having CORS issues
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
            .then(response => response.json())
            .then(data => {
                setEtherToUsdRate(data.ethereum.usd);
            });
    }, []);

    useEffect(() => {
        calculatePayment();
    }, [height, width, frames, price, modelType, etherToUsdRate, framesPerSecond]);

    useEffect(() => {
        setPrice(modelType === 'image-to-video' ? 3390842 : 4768371);
    }, [modelType]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1 style={{ fontSize: '50px', marginBottom: "10px" }}>AI subnet Job Price Calculator</h1>
            <ModelForm onCalculate={calculatePayment} height={height} setHeight={setHeight} width={width} setWidth={setWidth} frames={frames} setFrames={setFrames} price={price} setPrice={setPrice} modelType={modelType} setModelType={setModelType} etherToUsdRate={etherToUsdRate} setEtherToUsdRate={setEtherToUsdRate} framesPerSecond={framesPerSecond} setFramesPerSecond={setFramesPerSecond} />
            <hr style={{ width: '80%', marginTop: '20px', marginBottom: '20px' }} />
            <p style={{ paddingTop: '20px', fontSize: '30px' }}>Payment: {payment} Wei</p>
            <p style={{ paddingTop: '20px', fontSize: '30px' }}>Payment: {paymentInEth} Ether</p>
            <p style={{ paddingTop: '20px', fontSize: '30px' }}>Payment: ${Number(paymentInUsd).toPrecision(4)}</p>
            {modelType === 'text-to-image' && <p style={{ paddingTop: '20px', fontSize: '30px' }}>Images per dollar: {Math.round(1 / paymentInUsd)}</p>}
            {modelType === 'image-to-video' && <p style={{ paddingTop: '20px', fontSize: '30px' }}>Payment per second video: ${Number(paymentPerSecond).toPrecision(4)}</p>}
            {modelType === 'image-to-video' && <p style={{ paddingTop: '20px', fontSize: '30px' }}>Payment per minute video: ${Number(paymentPerMinute).toPrecision(4)}</p>}
            {modelType === 'image-to-video' && <p style={{ paddingTop: '20px', fontSize: '30px' }}>Payment per hour video: ${Number(paymentPerHour).toPrecision(4)}</p>}
        </div>
    );
}
