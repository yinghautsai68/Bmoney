import { createContext } from "react";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const formatDate = (date) => {
        //handleEmpty
        if (!date) return ""
        const datetime = new Date(date)
        const year = datetime.getFullYear(date)
        const month = datetime.getMonth(date) + 1
        const day = datetime.getDay()

        return `${year}年${month}月${day}日`
    }

    const formatTime = (date) => {
        //handleEmpty
        if (!date) return ""
        const datetime = new Date(date)
        const hours = datetime.getHours()
        const minutes = datetime.getMinutes().toString().padStart(2, "0")
        const period = hours >= 12 ? "下午" : "上午"
        return `${period} ${hours}:${minutes} `
    }

    const formatDateTime = (date) => {
        //handleEmpty
        if (!date) return ""
        const datetime = new Date(date)
        const year = datetime.getFullYear(date)
        const month = datetime.getMonth(date) + 1
        const day = datetime.getDay()
        const hours = datetime.getHours()
        const minutes = datetime.getMinutes().toString().padStart(2, "0")
        const period = hours >= 12 ? "下午" : "上午"
        return `${year}年${month}月${day}日 ${period} ${hours}:${minutes} `
    }
    return (
        < Context.Provider value={{
            formatDate, formatTime, formatDateTime
        }}>
            {children}
        </Context.Provider >
    )
}