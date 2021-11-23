import Dict from './employeesDict';
// import { getEmployeeAndSalary } from '../services/apiEmployees';
import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = () => {
  const elements = Dict.map(item => {
      return (
        <EmployeesListItem key={item.id.toString()} name={item.name} salary={item.salary.toString().split('-')[0].slice(0, 4)} increase={item.increase}/>
      )
    })
    console.log(elements);
  return (
    <ul className="app-list list-group container">
      {elements}
    </ul>
  )
}

// const EmployeesList = renderList(Dict);

export default EmployeesList;
