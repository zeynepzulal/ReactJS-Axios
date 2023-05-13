import React from "react";
import axios from "axios"   //mavi olanlari sen istedigin gibi yaziyorsun ,ama genelde bu sekilde kullanilir.



// const response = await axios.get('https://jsonplaceholder.typicode.com/users');
function Users() {

    //useStates
    const [data, setData] = React.useState([]);
    const [products,setProducts] = React.useState([]);




    async function getUsers() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        setData(response.data);


        console.log(response.data);
    }
    getUsers();



    return (
        <div>
            <ul>

                {
                    data?.map( (item) => (
                        <>
                        <li>{item.email}</li>
                        </>
                    ))
                }
            </ul>
        </div>

    )
}
export default Users;