//T1

const users = [
    {
      username: "David",
      status: "online",
      lastActivity: 10
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104
    }
  ];

  let onlineUsers = [];
  //console.log(users.length);
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].status === 'online') {
        //console.log(users[i].status);
        onlineUsers.push(users[i].username);
    };
  };

  //console.log(onlineUsers);

  alert(`Сейчас в онлайн следующие пользователи: ${onlineUsers}`);