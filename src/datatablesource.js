export const userColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70
    },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt='Avatar'/>
                {params.row.username}
            </div>
        )
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => (
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        )
    },
]

export const userRows = [
    {
      id: 1,
      username: "Jack",
      img: "img/grow.jpeg",
      status: "active",
      email: "jackmail@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Steve",
      img: "img/grow.jpeg",
      email: "steve62@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Jenny",
      img: "img/grow.jpeg",
      email: "jen_829@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Grant",
      img: "img/grow.jpeg",
      email: "gran_t@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Anna",
      img: "img/grow.jpeg",
      email: "anna97@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Margaret",
      img: "img/grow.jpeg",
      email: "marg@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Tom",
      img: "img/grow.jpeg",
      email: "t0m@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Alfred",
      img: "img/grow.jpeg",
      email: "alfredo@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Peter",
      img: "img/grow.jpeg",
      email: "peter79@gmail.com",
      status: "pending",
      age: 65,
    }
  ];
