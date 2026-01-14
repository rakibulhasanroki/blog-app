// export const userRoutes = [
//   {
//     title: "User Panel",
//     items: [
//       {
//         title: "User DashBoard",
//         url: "/dashboard",
//       },
//     ],
//   },
// ];

export interface Route {
  title: string;
  items: {
    title: string;
    url: string;
  }[];
}
