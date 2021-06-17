import React, { useState , useEffect } from 'react';
import NavbarComponent from '../components/NavbarComponent ';
import axios from 'axios';

  function Homepage() {
    const [randomUsers, setRandomUsers] = useState([]);

    useEffect(() => {
        if (!randomUsers) {
            return;
        }
        else {
            axios.get('https://randomuser.me/api/?results=1').then(data=>{
                console.log("This is data: " + data);
                console.dir(data.data.results);
                const info = data.data.results;
                setRandomUsers(info);
            }

            ).catch(err => console.log(err));
        }
    }, []);
     
    return ( 
        <>
            <NavbarComponent employees = {randomUsers} />
        </>
    )
}

export default Homepage;