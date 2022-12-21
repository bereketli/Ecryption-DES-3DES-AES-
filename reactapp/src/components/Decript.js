import React, {useState} from "react"
import "./encript.css"
import axios from 'axios'
function Dicript(){
    
    const [cipher, setcipher]= useState("")
    const [enteredKey, setKey] = useState("")
    const [plain,setplain]=useState("")
    function cipherHandler(event){
        setcipher(event.target.value)
        

    }
    function plainHandler(enc){
        setplain(enc)
    }
    function keyHandler(event){
       setKey(event.target.value)
       
    }
    function submithandler(event){
        event.preventDefault()
       
        console.log("axios")
        axios.post(`http://localhost:8000/aes/decript`, {
            cipher:{cipher},
            key:{enteredKey}
           })
           .then((response) => {
             console.log(response.data);
               // Handle data
           })
           .catch((error) => {
             console.log(error);
           })
           axios.get(`http://localhost:8000/aes/decript`, {
            params: {
                username: 'john1904',
            }
        })
        .then(function (response) {
            plainHandler(response.data)
            console.log(response.data)
        })

    }
    
    return(
        <div className="body-encript">
            <div>
                <form>
                    <label>Dicryption Type:</label>
                    <select name="encryption" id="encryption">
                        <option value="des">DES</option>
                        <option value="3des">3DES</option>
                        <option value="aes">AES</option>
                    </select>
                </form>
            </div>
            <form onSubmit={submithandler}>
                <div>
                <label>Cipher Text: </label>
                <input className="input plain" 
                type="text " name="plaintext"
                placeholder="ciphertext"
                onChange={cipherHandler}>

                </input>
                </div>
                <div>
                <label>key: </label>
                <input className="input"
                 type="text" 
                 name="key" 
                 placeholder="key"
                 onChange={keyHandler}></input>
                </div>
                <button className="btn-encript" type="submit" >Decript</button>
            </form>
            <div className="cipher-body">
                <h4>plain Text:</h4> 
                <div className="cipher-display">
                   {plain}
                   
                </div>
            </div>
        </div>
    )
}
export default Dicript