import React, {useState} from "react"
import "./encript.css"
import axios from 'axios'
function Encript(){
    
    const [enteredText, setText]= useState("")
    const [enteredKey, setKey] = useState("")
    const [cipher,setcipher]=useState("")
    function textHandler(event){
        setText(event.target.value)
        

    }
    function cipherHandler(enc){
        setcipher(enc)
    }
    function keyHandler(event){
       setKey(event.target.value)
       
    }
    function submithandler(event){
        event.preventDefault()
        // const Encryption = require('node_triple_des');

        // const encrypt =  Encryption.encrypt('SharedKeyyui', 'bereket Lingerew');
        // console.log(encrypt);
        // // U2FsdGVkX1+luaxAzoyoyJI/5sAzyUW1
        
        // const decrypt =  Encryption.decrypt('SharedKeyyui', encrypt);
        // console.log(decrypt);
        // // U2FsdGVkX1+luaxAzoyoyJI/5sAzyUW1
        // // Message
        console.log("axios")
        axios.post(`http://localhost:8000/aes`, {
            text:{enteredText},
            key:{enteredKey}
           })
           .then((response) => {
             console.log(response.data);
               // Handle data
           })
           .catch((error) => {
             console.log(error);
           })
           axios.get(`http://localhost:8000/aes`, {
            params: {
                username: 'john1904',
            }
        })
        .then(function (response) {
            cipherHandler(response.data)
        })

    }
    
    return(
        <div className="body-encript">
            <div>
                <form>
                    <label>Encryption Type:</label>
                    <select name="encryption" id="encryption">
                        <option value="des">DES</option>
                        <option value="3des">3DES</option>
                        <option value="aes">AES</option>
                    </select>
                </form>
            </div>
            <form onSubmit={submithandler}>
                <div>
                <label>Plain Text: </label>
                <input className="input plain" 
                type="text " name="plaintext"
                placeholder="plaintext"
                onChange={textHandler}>

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
                <button className="btn-encript" type="submit" >Encript</button>
            </form>
            <div className="cipher-body">
                <h4>Cipher Text:</h4> 
                <div className="cipher-display">
                   {cipher}
                   
                </div>
            </div>
        </div>
    )
}
export default Encript