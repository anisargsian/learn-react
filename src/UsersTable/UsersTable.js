import React, { Component } from 'react';
import Table from '../Table/Table';
import {usersData } from '../data';

const columnNames = Object.keys(usersData[0]);

class UsersTable extends Component {
    render() {
        return (<Table data={usersData} columnNames={columnNames} />);
    };
} 

export default UsersTable;