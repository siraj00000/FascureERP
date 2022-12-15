export const generateDate = (daysLater) => {
    let date = new Date();

    // date now
    let dateNow = date?.toISOString()?.split("T")[0].split("-").join("/").toString();

    // due date 
    date.setDate(date.getDate() + daysLater);
    let dueDate = date?.toISOString()?.split("T")[0].split("-").join("/").toString();
    return { dateNow, dueDate };
};