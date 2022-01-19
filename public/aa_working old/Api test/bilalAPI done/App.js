import react,{useState, useEffect} from 'react';
import axios from 'axios';


const App = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [gender, setGender] = useState(null);

    const get_user =async()=>{
        const {data} =  await axios.get('https://randomuser.me/api' );
        
        setName(data.results[0].name.first + data.results[0].name.last + data.results[0].name.title)
        setEmail(data.results[0].email)
        setGender(data.results[0].gender)
    }

    return (
        <div id="app">
        <img src="" className="female"/>

        <h1>{name}</h1>
        <h3>Email: {email}</h3>
        <h3 style= {gender=='male'?{ backgroundColor:'blue',color:'white'}:{ backgroundColor:'pink'}}>Gender: {gender}</h3>
        <button className="male" onClick={get_user}>Get Random User</button>


        {/* style={{ "margin-top": 10rem; "color": red }} */}
        <div >
            Note:male class give you blue Color and female class give you pink color
        </div>
      </div>
    )
}

export default App


