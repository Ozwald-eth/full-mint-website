import React from 'react';
import {Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';
import facebook from "./assets/social-media-icons/facebook_32x32.png";
import twitter from "./assets/social-media-icons/twitter_32x32.png";
import email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts [0]);

    async function connectAccounts(){
        if (window.ethereum){
            const accounts = await window.ethereum.requestP(
                {
                    method: "eth_requestAccounts",
                }  );

            setAccounts(accounts);

        }

    }
    return(
        <Flex justify="space-between" align="center" padding = "30px"> 
        <div>
            {/* Left Side - Social Media Icons*/}
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Email</div>

            {/* Right side - sections and connect*/}

            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {/*connect*/}
            {isConnected ?(
                <p>Connected</p>) : (

                    <button onClick={connectAccounts}>Connect</button>
                ) }
       </div>
       </Flex>
    );
};

export default NavBar;