import React, { useState , useEffect } from 'react';
import Navbar from '../components/NavbarComponent ';


  function Homepage() {
    const [randomUsers, setRandomUsers] = useState([]);

    useEffect(() => {
        if (!randomUsers) {
            return;
        }
        else {
            $.ajax({
                url: 'https://randomuser.me/api/',
                dataType: 'json',
                success: function(data) {
                    setRandomUsers(data);
                }
              });
        }
    }, []);

    return (
        <>
            <Navbar employees = {randomUsers}/>
        </>
    )
}

export default Homepage;