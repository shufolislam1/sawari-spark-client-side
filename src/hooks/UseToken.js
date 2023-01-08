import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect( () => {
        const email = user?.user?.email;
        const currentUser = {email:email}
        if(email){
            fetch(`https://sawari-spark.up.railway.app/user/${email}`, {
                method: 'PUT'
                ,
                // headers: {
                //     'content-type': 'application/json',
                //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                // },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data inside usetoken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken)
                setToken(accessToken)
            })
        }

    }, [user])
    return [token, setToken]
}

export default useToken;