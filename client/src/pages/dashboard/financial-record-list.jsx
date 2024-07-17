import { useState, useEffect } from "react"
import { useUser } from "@clerk/clerk-react"
import axios from 'axios';
import {useTable, Column, CellProps, Row} from 'react-table'


export const FinancialRecordList = () => {
    const [records, setRecords] = useState([]);
    const {user} = useUser();

    const fetchRecords = async () => {
        if (!user) return;
        try {
            const records = await axios.get(`http://localhost:3001/financial-records/getAllByUserId/${user.id}`)
            setRecords(records.data);
            console.log(records.data);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchRecords();
    }, [user]);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
        columns, data: records,
    })
    return <div className="table-container">
        <table>
            <thead></thead>
            <tbody></tbody>
        </table>
    </div>
}