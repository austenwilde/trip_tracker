import User from './User';

const UserList = ({ users, updateUser, deleteUser }) => (
  <>
    { users.map( u => 
      <User
        key={u.id} 
        {...u} 
        updateUser={updateUser} 
        deleteUser={deleteUser}
      />
    )}
  </>
)

export default UserList;