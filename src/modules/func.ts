// import { Dessert } from "@/app/api/db/data";

// export const handleAddToCart = (tab, item: Dessert) => {
//   const existingItem = tab.find((entry:any) => entry.item.name === item.name);
//   if (existingItem) {
//     setTab((prevTab:Dessert) =>
//       prevTab.map((entry) =>
//         entry.item.name === item.name
//           ? { ...entry, quantity: entry.quantity + 1 }
//           : entry
//       )
//     );
//   } else {
//     setTab((prevTab) => [...prevTab, { item, quantity: 1 }]);
//   }
// };
