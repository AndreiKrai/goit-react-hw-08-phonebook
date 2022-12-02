import { createSelector } from "@reduxjs/toolkit";

export const  selectContacts = state => state.contacts.contacts.items
export const  selectFilter = state => state.contacts.filter
export const  selectIsOpenToWork = state => state.contacts.isOpenToWork

export const selectfilteredArr = createSelector([selectContacts,selectFilter,selectIsOpenToWork],(contacts,filter,isOpenToWork)=>{
  const nameFilter = contacts.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );   
  if(isOpenToWork === "notSelected"){
    return nameFilter}
  
  const statusFilter= nameFilter.filter(user=>user.isOpenToWork===isOpenToWork)
  return statusFilter
})








// export const selectfilteredArr = state => {
//     const contacts=selectContacts(state);
//     const filter=selectFilter(state);
//     const isOpenToWork=selectIsOpenToWork(state);
//     const nameFilter = contacts.filter(user =>
//       user.name.toLowerCase().includes(filter.toLowerCase())
//     );   
//     if(isOpenToWork === "notSelected"){
//       return nameFilter}
//     else{
//     const statusFilter= nameFilter.filter(user=>user.isOpenToWork===isOpenToWork)
//     return statusFilter}

//   };