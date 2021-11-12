import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"
const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) {

                    const employeeOrders = orders.filter(  // <--- Go to YouTube and search "javascript array filter"
                        (order) => (order.employeeId === employee.id) 
                        
                    )

                    window.alert(` ${employee.name} sold ${employeeOrders.length} products `)
                }
            }
        }
    }
)


// const totalOrders = (orders) => {
//     let grandTotal = 0
//     for (const order of orders) {
//         grandTotal += order.total
//     }
//     return grandTotal
// }

// const topSalesperson = (orders, employees) => {
//     let employeeProfitTracker = {
//         1: 0,
//         2: 0,
//         3: 0,
//         4: 0,
//         5: 0,
//         6: 0,
//         7: 0
//     }

//     for (const order of orders) {
//         employeeProfitTracker[order.employeeId] += order.total
//     }

//     const answer = Object.keys(employeeProfitTracker).reduce((a, b) => employeeProfitTracker[a] > employeeProfitTracker[b] ? a : b)
// }




export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}