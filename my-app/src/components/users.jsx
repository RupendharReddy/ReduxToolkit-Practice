// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchUsers } from '../redux/usersSlice'
// const users = () => {
//     const users = useSelector((store)=>store.users.users)
//     useEffect(()=>{
//         const dispatch = useDispatch();
//         dispatch(fetchUsers());
//     },[])
//   return (
//     <div>
//         {
//             users.map((user)=>{
//                 return <li>{user.name}</li>
//             })
//         }
//     </div>
//   )
// }

// export default users