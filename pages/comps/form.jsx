import React from 'react'




const Form = () => {


    const createUser=async (e) =>{
        e.preventDefault()
        const res = await fetch('https://63d4ad7d0e7ae91a00a0bf9a.mockapi.io/posts/',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title:e.target.title.value ,
                body: e.target.body.value,
                userId: e.target.userid.value,
            })
        })
        const data = await res.json();
        console.log(data)
    }
  return (
    <div>

    <form onSubmit={createUser}> 
        <input type="text" name="title" placeholder="title"/>
        <input type="text" name="body" placeholder="body"/>
        <input type="text" name="userid" placeholder="userid"/>
        <input type="submit" />
    </form>
    </div>
  )
}

export default Form





