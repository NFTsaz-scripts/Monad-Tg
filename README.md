
## Prerequisites
- Ensure you have **MON** & **ETH MON** in your wallet.
- Complete all **Monad Testnet** tasks before running the script.

---

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/NFTsaz-scripts/Monad-Tg.git
   cd Monad-Tg
   ```
2. **Install Dependencies**
   ```bash
   npm install node-fetch@2 && npm install node-fetch && npm install ethers@5 dotenv ethers ora readline cfonts prompts colors axios chalk figlet solc
   ```
3. **Set Private Key**
   ```bash
   echo PRIVATE_KEY=0x2xxxxxxxxxxx > .env
   ```
4. **Create and Use Screen**
   ```bash
   screen -R monad
   ```

5. ## Edit BOT API & Chat ID
 
```bash
   nano main.js
   ```
   
6. **Run the Application**
   ```bash
   node main.js
   ```
(Press Ctrl + A, then D to keep the session running in the background.)



