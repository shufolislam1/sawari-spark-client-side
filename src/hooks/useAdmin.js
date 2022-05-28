import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)

    useEffect( () => {
        const email = user?.email;
        if(email){
            fetch(`https://lit-sands-04163.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    // authorization
                }
            })
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            })
        }

    }, [user])
    return [admin, setAdmin]
}

export default useAdmin;