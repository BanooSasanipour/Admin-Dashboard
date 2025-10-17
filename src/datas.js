// let xAxisData = [
//     {
//         "name": 'Jan',
//         "Sale": 112_000
//     },
//     {
//         "name": 'Feb',
//         "Sale": 99_000
//     },
//     {
//         "name": 'Mar',
//         "Sale": 12_090
//     },
//     {
//         "name": 'Apr',
//         "Sale": 99_000
//     },
//     {
//         "name": 'May',
//         "Sale": 54_000
//     },
//     {
//         "name": 'Jun',
//         "Sale": 85_000
//     },
//     {
//         "name": 'Jul',
//         "Sale": 34_000
//     },
//     {
//         "name": 'Agu',
//         "Sale": 18_598
//     },
//     {
//         "name": 'Sep',
//         "Sale": 0
//     },
//     {
//         "name": 'Oct',
//         "Sale": 73_078
//     },
//     {
//         "name": 'Nov',
//         "Sale": 12_900
//     },
//     {
//         "name": 'Dec',
//         "Sale": 97_000
//     },
// ]

// const newMembers = [
//     {
//         id: 1,
//         username: 'John Stein',
//         title: 'Web Developer',
//         img: 'images/amin.jpg'
//     },
//     {
//         id: 2,
//         username: 'Alex Alexer',
//         title: 'Seo Eng',
//         img: 'images/sasan.jpg'
//     },
//     {
//         id: 3,
//         username: 'Susan Adam',
//         title: 'Weblog',
//         img: 'images/zahra.jpg'
//     },
//     {
//         id: 4,
//         username: 'Ryan Bakh',
//         title: 'Hacker',
//         img: 'images/qadir.jpg'
//     },
     
// ]

// const transactions = [
//     {
//         id: 1,
//         customer: 'Ryan Bakh',
//         date: '12 Jun 2022',
//         amount: 123,
//         status: 'Approved',
//         img: '/images/qadir.jpg'
//     },
//     {
//         id: 2,
//         customer: 'Jack Jackson',
//         date: '23 Jul 2022',
//         amount: 123,
//         status: 'Declined',
//         img: '/images/amin.jpg'
//     },
//     {
//         id: 3,
//         customer: 'Mohammad Qol',
//         date: '28 May 2022',
//         amount: 123,
//         status: 'Pending',
//         img: '/images/mmd.jpg'
//     },
//     {
//         id: 4,
//         customer: 'Alex Alexer',
//         date: '1 Feb 2022',
//         amount: 123,
//         status: 'Approved',
//         img: '/images/sasan.jpg'
//     },
// ]

let userRows = [
    {
        id: 1,
        username: 'Ryan Bakh',
        avatar: 'images/qadir.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'Ryan@gmail.com'
    },
    {
        id: 2,
        username: 'Jack Jackson',
        avatar: 'images/amin.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'Jack@gmail.com'
    },
    {
        id: 3,
        username: 'Alex Alexer',
        avatar: 'images/sasan.jpg',
        status: 'active',
        transaction: '$98',
        email: 'Alex@gmail.com'
    },
    {
        id: 4,
        username: 'Susan Adam',
        avatar: 'images/zahra.jpg',
        status: 'active',
        transaction: '$0',
        email: 'susan@gmail.com'
    },
    {
        id: 5,
        username: 'Peter Muller',
        avatar: 'images/hamze.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'peter@gmail.com'
    },
    
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/asus.jpeg',
        price: 890
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/acer.jpg',
        price: 890
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/hp.jpg',
        price: 890
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/dell.jpg',
        price: 890
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

// const userStats = [
//   { month: "January", users: 400 },
//   { month: "February", users: 600 },
//   { month: "March", users: 800 },
//   { month: "April", users: 700 },
//   { month: "May", users: 950 },
//   { month: "June", users: 1100 },
// ];

// const feedbacksData = [
//     { id: 1, user: "Emily", message: "Great dashboard! Very intuitive.", answer: "" },
//     { id: 2, user: "Daniel", message: "Could you add dark mode?", answer: "" },
//     { id: 3, user: "Sophia", message: "Loading speed is impressive!", answer: "" },
//   ];

//   const inboxData = [
//     { id: 1, subject: "Welcome to the platform", from: "admin@site.com" },
//     { id: 2, subject: "Your password was changed", from: "security@site.com" },
//     { id: 3, subject: "New comment on your post", from: "notifications@site.com" },
//   ];

//   const sentData = [
//     { id: 1, subject: "Monthly report submission", to: "manager@company.com" },
//     { id: 2, subject: "Support reply", to: "user123@domain.com" },
//     { id: 3, subject: "Meeting confirmation", to: "team@company.com" },
//   ];

//   const manageItems =[
//     { id: 1, name: "Emily", role: "User" },
//     { id: 2, name: "Daniel", role: "Admin" },
//     { id: 3, name: "Sophia", role: "Moderator" },
//   ];

//   const initialMessages = [
//     {
//       id: 1,
//       sender: "Emily Stone",
//       subject: "Welcome to the dashboard",
//       content: "Hi there! Just wanted to say welcome...",
//       date: "2025-10-07 09:30",
//       starred: false,
//       read: false,
//       avatar: "",
//     },
//     {
//       id: 2,
//       sender: "Daniel Craig",
//       subject: "Monthly Report",
//       content: "Please find attached the latest report...",
//       date: "2025-10-06 14:15",
//       starred: true,
//       read: true,
//       avatar: "",
//     },
//     {
//       id: 3,
//       sender: "Sophia Turner",
//       subject: "Feedback Request",
//       content: "Can you review the new layout?",
//       date: "2025-10-05 11:00",
//       starred: false,
//       read: false,
//       avatar: "",
//     },
//   ];

//   const reportDatas = [
//   { id: 1, name: "Website Redesign", status: "Completed", budget: "$3,000" },
//   { id: 2, name: "Mobile App", status: "In Progress", budget: "$5,500" },
//   { id: 3, name: "SEO Optimization", status: "Delayed", budget: "$1,200" },
//   { id: 4, name: "Cloud Migration", status: "Completed", budget: "$4,000" },
// ];

// const chartDatas = [
//   { name: "Completed", value: 2 },
//   { name: "In Progress", value: 1 },
//   { name: "Delayed", value: 1 },
// ];

// const reportColors = ["#66bb6a", "#ffa726", "#ef5350"];

// const initialDatas = [
//   {
//     id: 1,
//     title: "Website Hosting",
//     issueDate: "2025-09-01",
//     dueDate: "2025-09-10",
//     total: "$120.00",
//     status: "Paid",
//   },
//   {
//     id: 2,
//     title: "Domain Renewal",
//     issueDate: "2025-09-15",
//     dueDate: "2025-09-25",
//     total: "$15.00",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     title: "Email Service",
//     issueDate: "2025-10-01",
//     dueDate: "2025-10-10",
//     total: "$45.00",
//     status: "Overdue",
//   },
// ];

// const salesDatas = [
//   { month: "January", product: "Hosting", amount: 400 },
//   { month: "February", product: "Domain", amount: 600 },
//   { month: "March", product: "Email Service", amount: 800 },
//   { month: "April", product: "SSL Certificate", amount: 700 },
//   { month: "May", product: "Cloud Storage", amount: 950 },
//   { month: "June", product: "Analytics Tool", amount: 1100 },
//   { month: "Jul", product: "Analytics Tool", amount: 1050 },
//   { month: "Ags", product: "Analytics Tool", amount: 580 },
//   { month: "Sep", product: "Analytics Tool", amount: 1310 },
//   { month: "Oct", product: "Analytics Tool", amount: 890 },
//   { month: "Nov", product: "Analytics Tool", amount: 700 },
//   { month: "Dec", product: "Analytics Tool", amount: 600 },
// ];


// export { xAxisData, newMembers, transactions, userRows, products, productsData, userStats, feedbacksData,
//      inboxData, sentData, manageItems, initialMessages, reportDatas, chartDatas, reportColors, initialDatas,
//      salesDatas
// }

export { products, productsData, userRows}