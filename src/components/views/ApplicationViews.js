import { CustomerViews } from './CustomerViews'
import { EmployeeViews } from './EmployeeViews'

// This is the overall view of the Application and is dependent upon the type of user.
export const ApplicationViews = () => {

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    if (kandyUserObject.staff) {
        return <EmployeeViews />
    } else {
        return <CustomerViews />   
    }
}