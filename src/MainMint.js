import {useState} from 'react';
import {ethers, BigNumber} from 'ethers';
import RoboDunksNFT from './RoboDunksNFT.json';

const RoboDunksNFTAddress = "0x0CB3dBbDd5188AB6989a9b89Ab890F7FEf492EEC";

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            RoboDunksNFTAddress,
            RoboDunksNFT.abi,
            signer
        );
        try{
            const response = await contract.mint(BigNumber.from(mintAmount));
            console.log('response: ', response);

        } catch (err) {
            console.log("error:", err)
        }

        const handleDecrement = () => {
            if (mintAmount <= 1) return;
            setMintAmount(mintAmount -1);
        };

        const handleIncrement = ()=> {
            if (mintAmount >= 1) return;
            setMintAmount(mintAmount + 1);
        };
        return (
            <div>
                <div>
                    <button onClick={handleDecrement}>-</button>
                    <input type="number" value={mintAmount}/>
                    <button onClick={handleIncrement}>+</button>
                </div>
            
        ) : ( 
                <p> You are not connected yet.</p>

        );
            </div>
    )};  
};
export default MainMint;
