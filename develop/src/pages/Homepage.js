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
            axios.get('https://randomuser.me/api/').then(data=>{
                setRandomUsers(data);
            }

            );
            // $.ajax({
            //     url: ,
            //     dataType: 'json',
            //     success: function(data) {
                    
            //     }
            //   });

        }
    }, []);

    return ( 
        <>
        {console.log(randomUsers)}
            <NavbarComponent employees = {randomUsers}/>
        </>
    )
}

export default Homepage;