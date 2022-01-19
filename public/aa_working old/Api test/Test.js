import react,{useState, useEffect} from 'react';
import axios from 'axios';
const Test = () => {
    const [randomUser , setRandomUser ] = useState(null);
    
    // api calling

    // useEffect( () => {
    //     handleRandomUser()
    // },[])

    const handleRandomUser = async () => {
        try{

            const {data} =  await axios.get('https://randomuser.me/api' )
            console.log(data.results[0])
            setRandomUser(data.results[0])
            
        }
        catch(error) {
            console.log(error)
        }
    }
    // console.log(randomUser?.name.last)
    return (
    <div>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" className="female"/>

        <h1 style={randomUser?.gender=='male'?{ backgroundColor:'red' }:{ backgroundColor:'pink'}}>{randomUser?.name.last}</h1>
        <h3>Email: bili@gmail.com</h3>
        <button class="male" onClick={handleRandomUser}>Get Random User</button>
    </div>
    )
}

export default Test;