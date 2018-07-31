import React from 'react';
import ExpenseList from './expense-list';
import ExpenseListFilters from './expense-list-filters';

const DashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashboardPage;