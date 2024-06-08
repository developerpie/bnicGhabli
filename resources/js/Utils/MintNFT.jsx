import nftGeneratorAbi from '@/Contracts/nftGeneratorAbi.json';
import axios from 'axios';
import config from '@/config';
import Web3 from 'web3';
import domtoimage from 'dom-to-image';
import FormData from 'form-data';
import { writeContract } from '@wagmi/core'
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3OTk5YjBlYS03NmM1LTRlYmUtYjc1Yy1mNTQ3YTEyMzcyNmYiLCJlbWFpbCI6InN1YmRhbmlhbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOTY3NmMwODhiY2E5YWI4YTJlNDciLCJzY29wZWRLZXlTZWNyZXQiOiJiMzQwZWFhZDYyNzJhZTJkYTQ1ZjcwNTY2MTIwNjY4MjFiOWYyMDA1NzA1NmRhNmU3NmI2OTMwMGQ4NWYzYzFiIiwiaWF0IjoxNzAxODgxODcwfQ.9zMyspKovs3vAChl3QYA8PUwUFzWehysy47tBXZQFEc'; // Replace with your Pinata JWT


const appendFormData = (formData, blob, fileName, name) => {
    formData.append('file', blob, fileName);
    formData.append('pinataMetadata', JSON.stringify({ name }));
    formData.append('pinataOptions', JSON.stringify({ cidVersion: 0 }));
};
const postToIPFS = async (formData ,gateway = "ipfs://") => {
    try {
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            maxBodyLength: "Infinity",
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${JWT}`
            }
        });
        return `${gateway}${res.data.IpfsHash}`;
    } catch (error) {
        console.error(error);
    }
};
const pinFileToIPFS = async (base64Image, fileName = 'image.png') => {
    const byteString = atob(base64Image.split(',')[1]);
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    const formData = new FormData();
    appendFormData(formData, new Blob([ia.buffer], { type: base64Image.split(',')[0].split(':')[1].split(';')[0] }), fileName, fileName);
    return postToIPFS(formData);
};
const pinJSONToIPFS = async (jsonData) => {
    const formData = new FormData();
    appendFormData(formData, new Blob([JSON.stringify(jsonData)], { type: 'application/json' }), 'file.json', 'file.json');
    return postToIPFS(formData, "https://gateway.pinata.cloud/ipfs/");
};

const generateImage = async (refNftDiv) => {
    console.log("Starting image generation process");
    if (!refNftDiv.current) {
        console.log("Reference to NFT div is null");
        return null;
    }
    try {
        console.log("Generating image from DOM element");
        const dataUrl = await domtoimage.toPng(refNftDiv.current);
        console.log("Image generated successfully");
        return dataUrl;
    } catch (error) {
        console.log("An error occurred during image generation:", error);
        return null;
    }
};


const sendNFTDataToServer = async (data, newToken) => {
    const response = await axios.post(route('nft.storeData'), { ...data, newToken }).catch(console.log);
    return response?.data.url;
};

const updateUserToken = async (user, newToken) => {
    await axios.put(route('user.update'), { user_id: user.id, token: newToken }).catch(console.log);
};

export const mintNftByWallet = async (ref, user) => {
    console.log("Starting NFT minting process");
    try {
        console.log("Generating image...");
        const imageUrl = await generateImage(ref);
        console.log(`Generated image URL: ${imageUrl}`);
        if (!imageUrl) {
            console.log("No image URL returned");
            return false;
        }


        const newToken = Math.floor(Math.random() * 1e9);
        console.log(`Generated new token: ${newToken}`);

        const image = await pinFileToIPFS(imageUrl);
        const uri = await pinJSONToIPFS({ name: 'Bnic Profile NFT', description: 'Generated using bnic.io', image: image });

        console.log(uri);
        if (!uri) {
            console.log("Failed to send NFT data to server");
            throw new Error("Failed to send NFT data to server");
        }

        console.log("Writing contract...");
        const { hash } = await writeContract({
            address: config.nftContractAddress,
            abi: nftGeneratorAbi,
            functionName: 'mintNFT',
            args: [user.wallet, newToken, uri],
        });
        console.log(`Transaction hash: ${hash}`);
        if (!hash) {
            console.log("Failed to mint NFT");
            throw new Error("Failed to mint NFT");
        }

        console.log("Updating user token...");
        await updateUserToken(user, newToken);
        console.log("NFT minted successfully");
        return true;
    } catch (error) {
        console.log("An error occurred:", error);
        return false;
    }
}


const web3 = new Web3(new Web3.providers.HttpProvider(config.priviteRpc));
export const mintNftByPrivateKey = async (ref, user) => {
    try {
        const imageUrl = await generateImage(ref);
        if (!imageUrl) return false;
        const newToken = Math.floor(Math.random() * 1e9);
        const nftData = { name: 'Bnic Profile NFT', description: 'Generated using bnic.io', image: imageUrl };
        const uri = await sendNFTDataToServer(nftData, newToken);
        if (!uri) throw new Error("Failed to send NFT data to server");
        const account = web3.eth.accounts.privateKeyToAccount('0x' + config.privateKey);
        const contract = new web3.eth.Contract(nftGeneratorAbi, config.nftContractAddress);
        const data = contract.methods.mintNFT(user.wallet, newToken, uri).encodeABI();
        const transaction = {
            to: config.nftContractAddress,
            data,
            gas: '5000000',  // in wei
            gasPrice: web3.utils.toWei('20', 'gwei'),
            from: account.address
        };
        const nonce = await web3.eth.getTransactionCount(account.address);
        transaction.nonce = nonce;
        const signedTransaction = await account.signTransaction(transaction);
        const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
        if (!receipt.transactionHash) throw new Error("Failed to mint NFT");
        await updateUserToken(user, newToken);
        return true;
    } catch (error) {
        console.log("An error occurred:", error);
        return false;
    }
};

