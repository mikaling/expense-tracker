import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transacation from './Transaction'

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)



    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transacation transaction={ transaction }/>
                ))}
            </ul>
        </>
    )
}

export default TransactionList