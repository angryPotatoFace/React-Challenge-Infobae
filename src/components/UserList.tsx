import useFetchUsers from '../hooks/fetchUsers';


const UserList = () => {


  const {users, Uloading, Uerror} = useFetchUsers();

  if (Uloading) return ;
  if (Uerror) return <p>Error: {Uerror.message}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lista de Usuarios</h2>
      <ul className="divide-y divide-gray-200">
        { users!.map((user) => (
          <li key={user.id} className="py-4">
            <div className="flex items-center space-x-4">
              <img className="h-10 w-10 rounded-full" src={user.picture} alt={`Avatar de ${user.id}`} />
              <div className="text-lg font-bold">{`${user.firstName} ${user.lastName}`}</div>
              <div className="text-gray-500">{user.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;